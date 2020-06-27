import React, { Component } from 'react';
import { Container, Form, Button } from 'semantic-ui-react';
import Layout from '../components/Layout';
import { ToastContainer } from 'react-toastify';
import { withRouter } from 'next/router';
import Link from 'next/link';

class Index extends Component {



    render() {
        return (
          <div>
            <ToastContainer/>
            <Container>
                <Form onSubmit={this.onsubmit}>
                    <Button>Submit</Button>
                </Form>
            </Container>
          </div>
        );
    }
}

export default Index;
