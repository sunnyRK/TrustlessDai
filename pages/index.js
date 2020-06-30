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
        claimamount: ""
    }

    ontransfer = async () => {
        event.preventDefault();
        try {
            const accounts = await web3.eth.getAccounts();

            const daiInstance = await getERCContractInstance(web3);
            const approvehash = await daiInstance.methods.approve(
                "0xBEe02FD1e5b9e3B34A856Fb1E6493dFC854968dB",
                this.state.claimamount
            ).send({
                from: accounts[0]
            });
            console.log("approveHash: ", approvehash);

            const zkInstance = await getZkSnarkInstance(web3);
            const hash = await zkInstance.methods.transferNoteToContract(
                this.state.claimamount,
                this.state.recipient,
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
            // const witnessparams = getWitness(
            //     '0xAeF37Da1db647bC187a46AEBEB662CF269636e54', // sender
            //     '9', 
            //     '0xE33f4C2306eFE9BF66a64A3c42408d2Fe1Cb890f', // receiver
            //     '2'
            // );

            const witnessparams = getWitness(
                "0xAeF37Da1db647bC187a46AEBEB662CF269636e54", // sender
                '9', 
                accounts[0], // receiver
                this.state.claimamount
            );
            console.log(witnessparams)

            // const url = "http://localhost:3001/createproof";
            // await Axios.get("http://localhost:3001/createproof?witness=168904202930327939080492230969004622904 339630068017193623570711849636010664817 1216631698 326532002671535014699329485375999702230 0 0 80710054703952517336223123171789823554 92441430577956810800440641638774416100 3812576291 9221067889684513358870464131861547279 0 0 168904202930327939080492230969004622904 339630068017193623570711849636010664817 0 0"
            // await Axios.get("http://localhost:3001/createproof?witness=80710054703952517336223123171789823554 92441430577956810800440641638774416100 3812576291 9221067889684513358870464131861547279 0 0 168904202930327939080492230969004622904 339630068017193623570711849636010664817 1216631698 326532002671535014699329485375999702230 0 0 80710054703952517336223123171789823554 92441430577956810800440641638774416100 0 0",{    
            let response;    
            await Axios.get("http://localhost:3001/createproof?witness="+witnessparams, {})
                .then((res) => {
                    if (res.statusText == 'OK') {
                        console.log("response:", res)
                        response = res
                    } else {
                        alert("error")
                        console.log(res);
                    }
                })
                .catch((err) => {
                    alert("err")
                    console.log(err);
            });

            // console.log(response.data.proof.a)
            // console.log(response.data.inputs)


            const hash = await zkInstance.methods.claimNote(
                response.data.proof.a,
                response.data.proof.b,
                response.data.proof.c,
                response.data.inputs,
                this.state.claimamount
            ).send({
                from: accounts[0]
            });
            
            // const hash = await zkInstance.methods.claimNote(
            //     ["0x168bab1bbbc15936beb565b51ce8fea998006a0fa9567417aa6261f46dcd16f9", "0x01e5c794ab8299705c319366d1bb2bee79b96f05fa08c9aa103f8dcb43a8806b"],
            //     [["0x1167f9740114fe14ddb0545c4118362589fd7e7ef0bcada02c0212b153755d51", "0x1b92451f7a2f8ce896171a8d5842f3455446f2b35e1fb81a1f5040cbcace54ed"], ["0x30583965a284f87f733cf0c57016d98446500f31559f810bc6aa6d0c44f2bdd5", "0x066b64dde5525d349011707b6f664cc1c1c4b58c3b822016381796675565fdf4"]],
            //     ["0x12d79f5ac4c6cac84c97a113bfa9d2a0c27bbe818e4ca0aad4e9e7015f2ec24a", "0x17093bbb859ab53232b408b012e761b1dc87c0cc9d12d09e8d2c99243d1f17c7"],
            //     ["0x000000000000000000000000000000007f11c426b5418e7f6d1577d332178438", "0x00000000000000000000000000000000ff825f2e5750acc639cf923b34f02371", "0x000000000000000000000000000000003cb830ed06f3d0e56d7d0ad35010de42", "0x00000000000000000000000000000000458b9269b0c07f752e592cd7832522e4", "0x000000000000000000000000000000007f11c426b5418e7f6d1577d332178438", "0x00000000000000000000000000000000ff825f2e5750acc639cf923b34f02371", "0x0000000000000000000000000000000000000000000000000000000000000001"],
            //     "20"
            // ).send({
            //     from: accounts[0]
            // });
            // console.log("Transaction hash: ", hash);
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
