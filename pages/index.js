import React, { Component } from 'react';
import { Container, Form, Button, Grid, Input } from 'semantic-ui-react';
import { ToastContainer } from 'react-toastify';
import {getZkSnarkInstance, getERCContractInstance} from '../config/instances/contractInstances';
import web3 from '../config/web3/web3';
import Layout from '../components/Layout';
import {getWitness} from "../functions/getWitness";
import Axios from 'axios';

class Index extends Component {

    state = {
        recipient:"",
        amount: "",
        claimamount: "",
        zkContractAddress: "0x0B6B70493d7cEf43A4E8eC84E62B9C6767b6bda0"
    }

    ontransfer = async () => {
        event.preventDefault();
        try {
            const accounts = await web3.eth.getAccounts();

            const daiInstance = await getERCContractInstance(web3);
            const approvehash = await daiInstance.methods.approve(
                this.state.zkContractAddress, // ZkPrivateDai Contract address
                this.state.claimamount
            ).send({
                from: accounts[0]
            });
            console.log("approveHash: ", approvehash);

            const senderBalalnce = await daiInstance.methods.balanceOf(accounts[0]).call();

            const zkInstance = await getZkSnarkInstance(web3);
            const hash = await zkInstance.methods.transferNoteToContract(
                this.state.claimamount,
                this.state.recipient,
                senderBalalnce
            ).send({
                from: accounts[0]
            });
            console.log("Transaction hash: ", hash);

        } catch (error) {
            console.log(error)
        }
    };

    onClaim = async () => {
        event.preventDefault();
        try {
            const accounts = await web3.eth.getAccounts();
            const zkInstance = await getZkSnarkInstance(web3);

            const noteInfo = await zkInstance.methods.getNoteInfo(accounts[0]).call();
            
            // Calculate witness
            const witnessparams = getWitness(
                noteInfo[3], // sender
                noteInfo[2], 
                accounts[0], // receiver
                this.state.claimamount
            );
            console.log(witnessparams)

            // Generate Proof using witness params through zokrates library
            // No need to generate proof using command line terminal 
            // We have host the zokrates image in docker and automatically calculated when transaction happen 
            // So We prioritize submissions that reduce onboarding friction and are usable to people unfamiliar with crypto
            let generateProof;    
            await Axios.get("http://localhost:3001/createproof?witness="+witnessparams, {})
                .then((res) => {
                    if (res.statusText == 'OK') {
                        console.log("response:", res)
                        generateProof = res
                    } else {
                        alert("error")
                        console.log(res);
                    }
                })
                .catch((err) => {
                    alert("err")
                    console.log(err);
            });

            // 
            const hash = await zkInstance.methods.claimNote(
                generateProof.data.proof.a,
                generateProof.data.proof.b,
                generateProof.data.proof.c,
                generateProof.data.inputs,
                this.state.claimamount
            ).send({
                from: accounts[0]
            });
            
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
                </Grid>
            </Container>
          </Layout>
        );
    }
}

export default Index;
