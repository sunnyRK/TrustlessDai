import React, { Component } from 'react';
import { Container, Form, Button, Grid, Input } from 'semantic-ui-react';
import { ToastContainer } from 'react-toastify';
import {getZkSnarkInstance, getERCContractInstance} from '../config/instances/contractInstances';
import web3 from '../config/web3/web3';
import Layout from '../components/Layout';
import {getWitness} from "../functions/getWitness";
import Axios from 'axios';
const BN = require('bignumber.js');

class Index extends Component {

    state = {
        recipient:"",
        amount: "",
        claimamount: "",
        zkContractAddress: "0x0B6B70493d7cEf43A4E8eC84E62B9C6767b6bda0",
        daiBalance: 0,
        claimBalance: 0
    }

    checkBalalnce = async () => {
        event.preventDefault();
        try {
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
                claimBalance: claimReserve[2]
            });

        } catch (error) {
            console.log(error);
        }
    };

    ontransfer = async () => {
        event.preventDefault();
        try {
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
                alert("Insufficient Dai Balance!");
            }
        } catch (error) {
            console.log(error);
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
                    console.log("Witness params to generate proof: ", witnessparams)

                    // // Generate Proof using witness params through zokrates library
                    // // No need to generate proof using command line terminal 
                    // // We have host the zokrates image in docker and automatically calculated when transaction happen 
                    // // So We prioritize submissions that reduce onboarding friction and are usable to people unfamiliar with crypto
                    let generateProof;    
                    await Axios.get("http://localhost:3001/createproof?witness="+witnessparams, {})
                        .then((proof) => {
                            if (proof.statusText == 'OK') {
                                console.log("Generate Proof Response from witness:", proof);
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
                    this.checkBalalnce();
                    console.log("ClaimeNote Hash: ", hash);
                } else {
                    alert("Claim amount is not valid!")
                }
            } else {
                alert("Note is used!");
            }
            
        } catch (error) {
            console.log(error);
        }
    };

    render() {
        return (
          <Layout>
            <ToastContainer/>
            <Container>
                <Grid>
                    <Grid.Row>
                        <Form onSubmit={this.ontransfer}>
                            <Form.Field>
                                <Input
                                    type = "input"
                                    labelPosition="right"
                                    label="Recipient Address"
                                    value={this.state.recipient}
                                    onChange={event => 
                                        this.setState({
                                            recipient: event.target.value,
                                    })}
                                />
                            </Form.Field>
                            <Form.Field>
                                <Input
                                    type = "input"
                                    labelPosition="right"
                                    label="Amount"
                                    value={this.state.amount}
                                    onChange={event => 
                                        this.setState({
                                            amount: event.target.value,
                                    })}
                                />                              
                            </Form.Field>
                            <Form.Field>
                                <Button>transfer</Button> 
                            </Form.Field>
                        </Form>
                    </Grid.Row>
                
                    <Grid.Row>
                        <Form onSubmit={this.onClaim}>

                            <Form.Field>
                                <Input
                                    type = "input"
                                    labelPosition="right"
                                    label="Claim Amount"
                                    value={this.state.claimamount}
                                    onChange={event => 
                                        this.setState({
                                            claimamount: event.target.value,
                                    })}
                                />                              
                            </Form.Field>
                            <Form.Field>
                                <Button>claim amount</Button> 
                            </Form.Field>                        
                        </Form>
                    </Grid.Row>

                    <Grid.Row>
                        <Form onSubmit={this.checkBalalnce}>
                            <Form.Field>
                                <Button>check balance</Button> 
                            </Form.Field>                        
                        </Form>
                    </Grid.Row>
                </Grid>
            </Container>
          </Layout>
        );
    }
}

export default Index;
