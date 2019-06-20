import React from 'react';
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Table from 'react-bootstrap/Table';
import AdminMenuBar from '../shareComponent/menuBar/index';

import { AddBtn, BtnWrapper, TalbeHeader, TableData, EditBtn } from './coffeeManagementStyled';


function CoffeeManagement() {
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
                                <TalbeHeader headerWidth={'150px'} >Coffee Name</TalbeHeader>
                                <TalbeHeader headerWidth={'150px'}>Price</TalbeHeader>
                                <TalbeHeader headerWidth={'150px'}>Place Of Origin</TalbeHeader>
                                <TalbeHeader headerWidth={'800px'}>Describe</TalbeHeader>
                                <TalbeHeader headerWidth={'100px'}>Status</TalbeHeader>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <TableData>Long Black</TableData>
                                <TableData>5.5</TableData>
                                <TableData>Australia</TableData>
                                <TableData>This is a long text to describe the detail of the Long Black</TableData>
                                <TableData>
                                    <Link to='/admin/coffee/addCoffee'>
                                        <EditBtn>Edit</EditBtn>
                                    </Link>
                                </TableData>
                            </tr>
                            <tr>
                                <TableData>Flat White</TableData>
                                <TableData>5.5</TableData>
                                <TableData>American</TableData>
                                <TableData>This is a long text to describe the detail of the Flat White</TableData>
                                <TableData>
                                    <Link to='/admin/coffee/addCoffee'>
                                        <EditBtn>Edit</EditBtn>
                                    </Link>
                                </TableData>
                            </tr>
                            <tr>
                                <TableData >Cappuccino</TableData>
                                <TableData>6</TableData>
                                <TableData>China</TableData>
                                <TableData>This is a long text to describe the detail of the Cappuccino</TableData>
                                <TableData>
                                    <Link to='/admin/coffee/addCoffee'>
                                        <EditBtn>Edit</EditBtn>
                                    </Link>
                                </TableData>
                            </tr>
                        </tbody>
                    </Table>
                </Col>
            </Row>
        </Container >

    )
}

export default CoffeeManagement;