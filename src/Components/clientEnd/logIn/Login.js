import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';
import { Redirect } from 'react-router-dom';

//component import part
import ClientMenuBar from '../shareComponent/clientMenu/index';
import ClientFooter from '../shareComponent/clientFooter/index';

//styled import part 
import {
    LoginFormWrapper, LoginTitle, SubmitBtn, FormControl,
    FormText, BackgroundWrapper
} from './loginStyled';

function Login({ email, password, message, success, handleInputValue, handleSubmit }) {
    if (success === true) {
        return (
            <Redirect to="/" />
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
                            Welcome Back To Our Coffee Shop
                        </LoginTitle>
                        <LoginTitle pTop={'10px'} size={'15px'}>
                            Enter your detail below here
                        </LoginTitle>
                        <LoginTitle pTop={'10px'} size={'15px'} Acolor='red'>
                            {message}
                        </LoginTitle>
                        <Form>
                            <Form.Group controlId="formBasicEmail">
                                <FormControl type="email" placeholder="Enter email" name='email' onChange={handleInputValue} />
                                <Row>
                                    <FormText className="text-muted" >
                                        We'll never share your email with anyone else.
                                </FormText>
                                </Row>
                            </Form.Group>

                            <Form.Group controlId="formBasicPassword">
                                <FormControl type="password" placeholder="Password" name='password' onChange={handleInputValue} />
                            </Form.Group>
                            <Form.Group controlId="formBasicChecbox">
                            </Form.Group>
                            <Row>
                                <SubmitBtn variant="primary" onClick={() => handleSubmit(email, password)}>
                                    Login
                                </SubmitBtn>
                            </Row>
                            <Link to='/signup'>
                                <Row>
                                    <SubmitBtn variant="primary" type="submit">
                                        Without an account? Signup
                                    </SubmitBtn>
                                </Row>
                            </Link>
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