import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import { Redirect } from 'react-router-dom';

//component import part
import ClientMenuBar from '../shareComponent/clientMenu/index';
import ClientFooter from '../shareComponent/clientFooter/index';

//styled import part 
import {
    LoginFormWrapper, LoginTitle, SubmitBtn, FormControl,
    FormText, BackgroundWrapper
} from './singupStyled';

function Singup({ success, message, email, password, passwordValid, handleInputValue, handleCreateNewUser }) {
    if (success === true) {
        return (
            <Redirect to="/login" />
        )
    }
    return (
        <Container fluid>
            <Row>
                <ClientMenuBar></ClientMenuBar>
            </Row>
            <Row>
                <Col md={6}>
                    <LoginFormWrapper>
                        <LoginTitle pTop={'20px'} size={'30px'}>
                            Thanks for Register!
                        </LoginTitle>
                        <LoginTitle pTop={'10px'} size={'15px'}>
                            Enter your detail below here
                        </LoginTitle>
                        <LoginTitle pTop={'10px'} size={'15px'} Acolor='red'>
                            {message}
                        </LoginTitle>
                        <Form>
                            <Form.Group controlId="formBasicEmail">
                                <FormControl name='email' type="email" placeholder="Enter email"
                                    onChange={handleInputValue} />
                                <Row>
                                    <FormText className="text-muted">
                                        We'll never share your email with anyone else.
                                </FormText>
                                </Row>
                            </Form.Group>

                            <Form.Group controlId="formBasicPassword">
                                <FormControl name='password' type="password" placeholder="Password"
                                    onChange={handleInputValue} />
                            </Form.Group>
                            <Form.Group controlId="formBasicPasswordValid">
                                <FormControl name='passwordValid' type="password" placeholder="Please Enter Your Password Again"
                                    onChange={handleInputValue} />
                            </Form.Group>
                            <Form.Group controlId="formBasicChecbox">
                            </Form.Group>
                            <Row>
                                <SubmitBtn variant="primary"
                                    onClick={() => handleCreateNewUser(email, password, passwordValid)}
                                >
                                    signUp
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

export default Singup;