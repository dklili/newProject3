import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import { Link } from 'react-router-dom';

import { LoginWraper, LoginBackground, LoginTitle, InputDescribe, Input, SubmitBtn } from './loginStyled';


function LoginPage() {
    return (
        <Container fluid>
            <Row>
                <LoginBackground>
                    <LoginWraper>
                        <LoginTitle>Welcome Come to XXX Management System</LoginTitle>
                        <InputDescribe>Username:</InputDescribe>
                        <Input></Input>
                        <InputDescribe>Password:</InputDescribe>
                        <Input type="password"></Input>
                        <Link to='/admin'>
                            <SubmitBtn variant="primary">Submit</SubmitBtn>
                        </Link>
                    </LoginWraper>
                </LoginBackground>
            </Row>
        </Container>

    )
}

export default LoginPage;