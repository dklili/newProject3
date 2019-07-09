import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import AdminMenuBar from '../shareComponent/menuBar/index';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';

import {
    WarnMessage, CoffeeForm,
    CommonDescribe, FormWrapper,
    FormTitleWrapper, FormTitle,
    SubmitBtn, CancelBtn
} from './updateCoffeeStyled'



function UpdateCoffee({ coffeeName, coffeePrice,
    imageUrl, message, id, handleValueChange,
    handleUploadFile, handleUpdateCoffee, successUpdate }) {
    if (successUpdate === true) {
        return (
            <Redirect to='/admin/coffee' />
        )
    }
    return (
        <Container fluid>
            <Row>
                <AdminMenuBar></AdminMenuBar>
            </Row>
            <FormWrapper>
                < Row>
                    <Col md={{ offset: 1 }}>
                        <FormTitleWrapper>
                            <FormTitle>
                                Update Coffee
                            </FormTitle>
                        </FormTitleWrapper>
                    </Col>
                </Row>
                <Form>
                    <Form.Group as={Row} controlId="coffeeName">
                        <Col md={{ span: 2, offset: 1 }}>
                            <WarnMessage>
                                {message}
                            </WarnMessage>
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} controlId="coffeeName">
                        <Col md={{ span: 2, offset: 1 }}>
                            <CommonDescribe>
                                Coffee Name:
                            </CommonDescribe>
                        </Col>
                        <Col md={{ span: 8 }}>
                            <CoffeeForm width={'300px'} name='coffeeName' placeholder="Coffee Name" value={coffeeName} onChange={handleValueChange} />
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} controlId="coffeePrice">
                        <Col md={{ span: 2, offset: 1 }}>
                            <CommonDescribe>
                                Price:
                            </CommonDescribe>
                        </Col>
                        <Col md={{ span: 8 }}>
                            <CoffeeForm width={'300px'} name='coffeePrice' placeholder="Price" value={coffeePrice} onChange={handleValueChange} />
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} controlId="coffeePicture">
                        <Col md={{ span: 2, offset: 1 }}>
                            <CommonDescribe>
                                Picture:
                            </CommonDescribe>
                        </Col>
                        <Col md={{ span: 8 }}>
                            <input type="file" name="file" onChange={handleUploadFile} />
                        </Col>
                    </Form.Group>
                    <Row>
                        <Col md={{ span: 8, offset: 1 }}>
                            <Link to='/admin/coffee'>
                                <CancelBtn variant="danger"> Cancel</CancelBtn>
                            </Link>
                            <SubmitBtn variant="primary" onClick={() => handleUpdateCoffee(coffeeName, coffeePrice, imageUrl, id)}>
                                Save</SubmitBtn>

                        </Col>
                    </Row>
                </Form>
            </FormWrapper>
        </Container >

    )
}

export default UpdateCoffee;