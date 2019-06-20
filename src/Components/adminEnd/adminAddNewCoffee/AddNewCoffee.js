import React from 'react';
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import AdminMenuBar from '../shareComponent/menuBar/index';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';

import { CoffeeForm, CommonDescribe, FormWrapper, FormTitleWrapper, FormTitle, SubmitBtn, CancelBtn } from './addNewCoffeeStyled'


function AddNewCoffee() {
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
                                Add New Coffee
                            </FormTitle>
                        </FormTitleWrapper>
                    </Col>
                </Row>
                <Form>
                    <Form.Group as={Row} controlId="formPlaintextEmail">
                        <Col md={{ span: 2, offset: 1 }}>
                            <CommonDescribe>
                                Coffee Name:
                            </CommonDescribe>
                        </Col>
                        <Col md={{ span: 8 }}>
                            <CoffeeForm width={'300px'} placeholder="Coffee Name" />
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} controlId="formPlaintextEmail">
                        <Col md={{ span: 2, offset: 1 }}>
                            <CommonDescribe>
                                Price:
                            </CommonDescribe>
                        </Col>
                        <Col md={{ span: 8 }}>
                            <CoffeeForm width={'300px'} placeholder="Price" />
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} controlId="formPlaintextEmail">
                        <Col md={{ span: 2, offset: 1 }}>
                            <CommonDescribe>
                                Place of Origin:
                            </CommonDescribe>
                        </Col>
                        <Col md={{ span: 8 }}>
                            <CoffeeForm width={'300px'} placeholder="Place of Origin" />
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} controlId="exampleForm.ControlTextarea1">
                        <Col md={{ span: 8, offset: 1 }}>
                            <CommonDescribe>Coffee Describe;</CommonDescribe>
                            <Form.Control as="textarea" rows="5" />
                        </Col>
                    </Form.Group>
                    <Row>
                        <Col md={{ span: 8, offset: 1 }}>
                            <Link to='/admin/coffee'>
                                <CancelBtn variant="danger"> Cancel</CancelBtn>
                            </Link>
                            <Link to='/admin/coffee'>
                                <SubmitBtn variant="primary"> Save</SubmitBtn>
                            </Link>
                        </Col>
                    </Row>
                </Form>
            </FormWrapper>
        </Container >

    )
}

export default AddNewCoffee;