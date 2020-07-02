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
        daiBalance: '0',
        claimBalance: '0',
        checkBalanceLoading: false,
        transferLoading: false,
        claimLoading: false,
        metamaskLoading: false,
        zkLoading: false,
        displayMessage: '',
        metamaskAddress: '',
        metamaskLoginMessage: '',
        zkWitness: '',
        generatedProofJson: '',
        isProofGenerated:false,
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
            console.log("claim: ",claimReserve[2]);

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

                toast.success("Transaction Done!", {
                    position: toast.POSITION.TOP_RIGHT
                });
                
                const url= "https://kovan.etherscan.io/tx/"+hash.transactionHash;
                toast.success(<a href={url} style={{color:"white"}} target="_blank">Transaction Hash: {hash.transactionHash}</a>, {
                    position: toast.POSITION.TOP_RIGHT
                });

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
            this.setState({ claimLoading: true, zkLoading: true });
            const accounts = await web3.eth.getAccounts();
            const zkInstance = await getZkSnarkInstance(web3);

            const noteInfo = await zkInstance.methods.getNoteInfo(accounts[0]).call();
            // console.log(noteInfo);
            const senderAmount = web3.utils.fromWei(noteInfo[2], "ether");
            
            if(noteInfo[0]){
                if(noteInfo[1] == web3.utils.toWei(this.state.claimamount, "ether")){   
                    
                    console.log("Witness params generating...");
                    this.setState({ zkWitness: "Witness params generating..." });

                    // Calculate witness
                    const witnessparams = getWitness(
                        noteInfo[3], // sender
                        senderAmount.toString(),
                        accounts[0], // receiver
                        this.state.claimamount
                    );
                    this.setState({ zkWitness: witnessparams });
                    console.log("Witness params generated: ", witnessparams);

                    // // Generate Proof using witness params through zokrates library
                    // // No need to generate proof using command line terminal 
                    // // We have host the zokrates image in docker and automatically calculated when transaction happen 
                    // // So We prioritize submissions that reduce onboarding friction and are usable to people unfamiliar with crypto
                    console.log("Proof is generating...");
                    this.setState({ generatedProofJson: "Please Wait. Proof is generating..." });
                    let generateProof;    
                    await Axios.get("http://localhost:3001/createproof?witness="+witnessparams, {})
                        .then((proof) => {
                            if (proof.statusText == 'OK') {
                            console.log("Proof Generated: ", proof);
                            this.setState({ generatedProofJson: proof.data, isProofGenerated: true });
                                generateProof = proof.data;
                                this.setState({zkLoading: false});
                            } else {
                                console.log(proof);
                            }
                        })
                        .catch((err) => {
                            this.setState({ claimLoading: false, zkLoading: false });
                            toast.error("Proof not generated, Transaction failed", {
                                position: toast.POSITION.TOP_RIGHT
                            });
                            console.log("Server Error: ", err);
                    });

                    // Claim amount privately 
                    // By showing proof of the note and amount will liquidate if proof is correct
                    if(this.state.isProofGenerated){
                        // state updated for other transactions
                        this.setState({isProofGenerated: false });

                        // Claim happen here, blockchain transaction with the parameters of zero-knowledge proof
                        const hash = await zkInstance.methods.claimNote(
                            generateProof.proof.a,
                            generateProof.proof.b,
                            generateProof.proof.c,
                            generateProof.inputs,
                            web3.utils.toWei(this.state.claimamount, "ether")
                        ).send({
                            from: accounts[0]
                        });
                        toast.success("Transaction Done!", {
                            position: toast.POSITION.TOP_RIGHT
                        });
                        
                        const url= "https://kovan.etherscan.io/tx/"+hash.transactionHash;
                        toast.success(<a href={url} style={{color:"white"}} target="_blank">Transaction Hash: {hash.transactionHash}</a>, {
                            position: toast.POSITION.TOP_RIGHT
                        });
                        this.checkBalance();
                        console.log("ClaimeNote Hash: ", hash);
                    }
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
            this.setState({ claimLoading: false, zkLoading: false });
        } catch (error) {
            this.setState({ claimLoading: false, zkLoading: false });
            toast.error("Claim Failed!!", {
                position: toast.POSITION.TOP_RIGHT
            });
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
                    onClaim={this.onClaim}
                    checkBalance={this.checkBalance}
                    checkBalanceLoading={this.state.checkBalanceLoading}
                    transferLoading={this.state.transferLoading}
                    claimLoading={this.state.claimLoading}
                    zkLoading={this.state.zkLoading}
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
