import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';

//component import part
import ClientMenuBar from '../shareComponent/clientMenu/index';
import ClientFooter from '../shareComponent/clientFooter/index';

//styled import part 
import {
    LoginFormWrapper, LoginTitle, SubmitBtn, FormControl,
    FormText, BackgroundWrapper
} from './loginStyled';

function Login() {
    return (

        <Container fluid>
            <Row>
                <ClientMenuBar></ClientMenuBar>
            </Row>
            <Row>
                <Col md={6}>
                    <LoginFormWrapper>
                        <LoginTitle pTop={'20px'} size={'30px'}>
                            Welcome Back To Our Coffee Shop
                        </LoginTitle>
                        <LoginTitle pTop={'10px'} size={'15px'}>
                            Enter your detail below here
                        </LoginTitle>
                        <Form>
                            <Form.Group controlId="formBasicEmail">
                                <FormControl type="email" placeholder="Enter email" />
                                <Row>
                                    <FormText className="text-muted">
                                        We'll never share your email with anyone else.
                                </FormText>
                                </Row>
                            </Form.Group>

                            <Form.Group controlId="formBasicPassword">
                                <FormControl type="password" placeholder="Password" />
                            </Form.Group>
                            <Form.Group controlId="formBasicChecbox">
                            </Form.Group>
                            <Row>
                                <SubmitBtn variant="primary" type="submit">
                                    Submit
                                </SubmitBtn>
                            </Row>
                        </Form>
                    </LoginFormWrapper>
                </Col>
                <Col md={6}>
                    <BackgroundWrapper></BackgroundWrapper>
                </Col>
            </Row>
            <Row>
                <ClientFooter></ClientFooter>
            </Row>
        </Container >

    )
}

export default Login;