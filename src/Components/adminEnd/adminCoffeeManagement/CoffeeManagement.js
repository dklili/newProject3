import React from 'react';
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Table from 'react-bootstrap/Table';
import AdminMenuBar from '../shareComponent/menuBar/index';
import { domain } from '../../../setDomain';

import {
    AddBtn, BtnWrapper, TalbeHeader, TableData,
    EditBtn, DelectBtn, ProductImage
} from './coffeeManagementStyled';


function CoffeeManagement({ data, handleDeleteCoffee, handleUpdateCoffee }) {
    return (
        <Container fluid>
            <Row>
                <AdminMenuBar></AdminMenuBar>
            </Row>
            <Row>
                <Col md={12}>
                    <Link to='/admin/coffee/addCoffee'>
                        <BtnWrapper>
                            <AddBtn>Add Coffee</AddBtn>
                        </BtnWrapper>
                    </Link>
                </Col>
                <Col md={12}>
                    <Table striped bordered hover size="md">
                        <thead>
                            <tr>
                                <TalbeHeader headerWidth={'300px'} >Coffee Name</TalbeHeader>
                                <TalbeHeader headerWidth={'300px'}>Price</TalbeHeader>
                                <TalbeHeader headerWidth={'300px'}>Image</TalbeHeader>
                                <TalbeHeader headerWidth={'50px'}>Edit</TalbeHeader>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                data.map((item) => {
                                    return (
                                        <tr key={item._id}>
                                            <TableData>{item.name}</TableData>
                                            <TableData>{item.price}</TableData>
                                            <TableData>
                                                <ProductImage url={`${domain}/${item.productImage}`} />
                                            </TableData>
                                            <TableData>
                                                <Link to='/admin/coffee/updateCoffee'>
                                                    <EditBtn onClick={
                                                        () => {
                                                            handleUpdateCoffee(item._id)
                                                        }
                                                    }>Edit</EditBtn>
                                                </Link>
                                                <DelectBtn variant="danger" onClick={
                                                    () => {
                                                        handleDeleteCoffee(item._id, item.name)
                                                    }
                                                }>Delete</DelectBtn>
                                            </TableData>
                                        </tr>
                                    )
                                })
                            }

                        </tbody>
                    </Table>
                </Col>
            </Row>
        </Container >

    )
}

export default CoffeeManagement;