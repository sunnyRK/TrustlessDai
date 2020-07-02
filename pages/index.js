import React, { Component } from 'react';
import Axios from 'axios';
import { toast } from 'react-toastify';

import {getZkSnarkInstance, getERCContractInstance} from '../config/instances/contractInstances';
import web3 from '../config/web3/web3';
import Layout from '../components/Layout';
import {getWitness} from "../functions/getWitness";
import Landing from '../src/components/Landing';
import MainTemplate from '../src/shared/MainTemplate';
import NetworkTypeDialogContainer from '../src/shared/NetworkTypeDialog/NetworkTypeDialogContainer';

class Index extends Component {
    state = {
        recipient:"",
        amount: "",
        claimamount: "",
        zkContractAddress: "0x0B6B70493d7cEf43A4E8eC84E62B9C6767b6bda0",
        daiBalance: '',
        claimBalance: '',
        checkBalanceLoading: false,
        transferLoading: false,
        metamaskLoading: false,
        displayMessage: '',
        metamaskAddress: '',
        metamaskLoginMessage: '',
        zkWitness: '',
        generatedProofJson: '',
    }

    async componentDidMount() {
        let networkType;
        this.setState({ metamaskLoading: true });
        const accounts = await web3.eth.getAccounts();
        if (accounts.length === 0) {
            this.setState({ metamaskLoginMessage: 'Connect your metamask account (& reload)', metamaskLoading: false });
            await window.ethereum.enable();
            const accounts = await web3.eth.getAccounts();
            this.setState({ metamaskLoginMessage: '', metamaskAddress: accounts[0] });
        } else {
            this.setState({ metamaskAddress: accounts[0], metamaskLoading: false });
        }

        await web3.eth.net.getNetworkType()
            .then(function(type) {
                networkType = type
            });

        if(networkType != "kovan") {
            this.setState({
                displayMessage: "Network Error: Change network " + networkType + " to kovan",
            });
        } else {
            this.setState({ displayMessage: '' });
        }
        this.checkBalance();
    }

    checkBalance = async () => {
        try {
            this.setState({ checkBalanceLoading: true });
            const accounts = await web3.eth.getAccounts();

            const daiInstance = await getERCContractInstance(web3);
            const zkInstance = await getZkSnarkInstance(web3);

            const balalnceOfDai = await daiInstance.methods.balanceOf(accounts[0]).call();
            console.log("Your Dai balance");
            console.log(balalnceOfDai);

            const claimReserve = await zkInstance.methods.noteMapping(accounts[0]).call()
            console.log("Your private balance sent by someone, You can liquidiate it in your balance.")
            console.log(claimReserve[2]);

            this.setState({
                daiBalance: balalnceOfDai,
                claimBalance: claimReserve[2],
                checkBalanceLoading: false,
            });

        } catch (error) {
            console.log(error);
            this.setState({ checkBalanceLoading: false });
        }
    };

    ontransfer = async () => {
        event.preventDefault();
        try {
            this.setState({ transferLoading: true });
            const accounts = await web3.eth.getAccounts();
            
            const daiInstance = await getERCContractInstance(web3);
            const allowance = await daiInstance.methods.allowance(accounts[0], this.state.zkContractAddress).call();
            const balance = await daiInstance.methods.balanceOf(accounts[0]).call();

            const inWei = web3.utils.toWei(this.state.amount, "ether");
            if(balance/1e18 >= inWei/1e18) {
                if(parseInt(allowance) < web3.utils.toWei(this.state.amount, "ether")) {
                    console.log("Approving Note balance..");
                    const approvehash = await daiInstance.methods.approve(
                        this.state.zkContractAddress, // ZkPrivateDai Contract address
                        web3.utils.toWei(this.state.amount, "ether")
                    ).send({
                        from: accounts[0]
                    });
                    console.log("Approved: ", approvehash);
                }
                const afterallowance = await daiInstance.methods.allowance(accounts[0], this.state.zkContractAddress).call();
                console.log("After approve note allowance is: ", afterallowance)

                console.log("Transferrng Note...");
                const senderBalalnceInWei = await daiInstance.methods.balanceOf(accounts[0]).call();
                const senderBalanceInEther = web3.utils.fromWei(senderBalalnceInWei, "ether");
                //0xE33f4C2306eFE9BF66a64A3c42408d2Fe1Cb890f

                // Get ZkPrivateDai smart contract instance
                const zkInstance = await getZkSnarkInstance(web3);

                // Sender send Amount Privately and create note for transaction using this solidity function
                const hash = await zkInstance.methods.transferNoteToContract(
                    web3.utils.toWei(this.state.amount, "ether"),
                    web3.utils.toWei(senderBalanceInEther, "ether"),
                    this.state.recipient
                ).send({
                    from: accounts[0]
                });
                console.log("Transaction hash: ", hash);
            } else {
                this.setState({ transferLoading: false });
                toast.error("Insufficient Dai Balance!", {
                    position: toast.POSITION.TOP_RIGHT
                });
            }
            this.setState({ transferLoading: false });
        } catch (error) {
            console.log(error);
            this.setState({ transferLoading: false });
        }
    };

    onClaim = async () => {
        event.preventDefault();
        try {
            const accounts = await web3.eth.getAccounts();
            const zkInstance = await getZkSnarkInstance(web3);

            const noteInfo = await zkInstance.methods.getNoteInfo(accounts[0]).call();
            console.log(noteInfo);
            const senderAmount = web3.utils.fromWei(noteInfo[2], "ether");
            console.log(senderAmount.toString());

            if(noteInfo[0]){
                if(noteInfo[1] == web3.utils.toWei(this.state.claimamount, "ether")){                    
                    // Calculate witness
                    const witnessparams = getWitness(
                        noteInfo[3], // sender
                        senderAmount.toString(),
                        accounts[0], // receiver
                        this.state.claimamount
                    );
                    this.setState({ zkWitness: witnessparams });
                    // // Generate Proof using witness params through zokrates library
                    // // No need to generate proof using command line terminal 
                    // // We have host the zokrates image in docker and automatically calculated when transaction happen 
                    // // So We prioritize submissions that reduce onboarding friction and are usable to people unfamiliar with crypto
                    let generateProof;    
                    await Axios.get("http://localhost:3001/createproof?witness="+witnessparams, {})
                        .then((proof) => {
                            if (proof.statusText == 'OK') {
                            this.setState({ generatedProofJson: proof });
                                generateProof = proof;
                            } else {
                                console.log(proof);
                            }
                        })
                        .catch((err) => {
                            console.log("Server Error: ", err);
                    });

                    // Claim amount privately 
                    // By showing proof of the note and amount will liquidate if proof is correct
                    const hash = await zkInstance.methods.claimNote(
                        generateProof.data.proof.a,
                        generateProof.data.proof.b,
                        generateProof.data.proof.c,
                        generateProof.data.inputs,
                        web3.utils.toWei(this.state.claimamount, "ether")
                    ).send({
                        from: accounts[0]
                    });
                    this.checkBalance();
                    console.log("ClaimeNote Hash: ", hash);
                } else {
                    toast.error("Claim amount is not valid!", {
                        position: toast.POSITION.TOP_RIGHT
                    });
                }
            } else {
                toast.error("Note is used!", {
                    position: toast.POSITION.TOP_RIGHT
                });
            }
        } catch (error) {
            console.log(error);
        }
    };

    handleState = (value, callback) => {
        this.setState(value, () => {
          if (callback) callback();
        });
    }

    onClearClick = (key) => {
        this.setState({ [key]: '' });
    }

    render() {
        return (
            <MainTemplate>
                <Landing
                    recipient={this.state.recipient}
                    amount={this.state.amount}
                    claimamount={this.state.claimamount}
                    daiBalance={this.state.daiBalance}
                    claimBalance={this.state.claimBalance}
                    handleState={this.handleState}
                    ontransfer={this.ontransfer}
                    checkBalance={this.checkBalance}
                    checkBalanceLoading={this.state.checkBalanceLoading}
                    transferLoading={this.state.transferLoading}
                    metamaskLoading={this.state.metamaskLoading}
                    metamaskAddress={this.state.metamaskAddress}
                    zkWitness={this.state.zkWitness}
                    generatedProofJson={this.state.generatedProofJson}
                    onClearClick={this.onClearClick}
                />
                <NetworkTypeDialogContainer
                    displayMessage={this.state.metamaskLoginMessage || this.state.displayMessage}
                    openDialog={this.state.metamaskLoginMessage || this.state.displayMessage}
                />
            </MainTemplate>
        );
    }
}

export default Index;
