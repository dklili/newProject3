import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import { Redirect } from 'react-router-dom';

import {
    LoginWraper, LoginBackground, LoginTitle,
    InputDescribe, Input, SubmitBtn, LoginWarningMessage
} from './loginStyled';


function LoginPage({ username, password, handleInputChange, handleLoginVlidation, message, loginStatus }) {
    if (loginStatus === true || sessionStorage.getItem('admin') === 'loginTokenTrue') {
        return (<Redirect to='/admin' />)
    }
    else {
        return (
            <Container fluid>
                <Row>
                    <LoginBackground>
                        <LoginWraper>
                            <LoginTitle>Welcome Come to XXX Management System</LoginTitle>
                            <LoginWarningMessage>
                                {message}
                            </LoginWarningMessage>
                            <InputDescribe>Username:</InputDescribe>
                            <Input name='username' onChange={handleInputChange}></Input>
                            <InputDescribe>Password:</InputDescribe>
                            <Input name='password' type="password" onChange={handleInputChange}></Input>
                            <SubmitBtn variant="primary" onClick={() => {
                                handleLoginVlidation(username, password)
                            }}>Submit</SubmitBtn>
                        </LoginWraper>
                    </LoginBackground>
                </Row>
            </Container>

        )
    }

}

export default LoginPage;