import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Table from 'react-bootstrap/Table';
import AdminMenuBar from '../shareComponent/menuBar/index';
import { TalbeHeader, TableData, BlockBtn } from './customerManagementStyled';


function CustomerManagement() {
    return (
        <Container fluid>
            <Row>
                <AdminMenuBar></AdminMenuBar>
            </Row>
            <Row>
                <Table striped bordered hover size="md">
                    <thead>
                        <tr>
                            <TalbeHeader headerWidth={'150px'} >ID</TalbeHeader>
                            <TalbeHeader headerWidth={'150px'}>First Name</TalbeHeader>
                            <TalbeHeader headerWidth={'150px'}>Last Name</TalbeHeader>
                            <TalbeHeader headerWidth={'200px'}>Phone Number</TalbeHeader>
                            <TalbeHeader headerWidth={'200px'}>Emial Address</TalbeHeader>
                            <TalbeHeader headerWidth={'200px'}>Status</TalbeHeader>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <TableData>1</TableData>
                            <TableData>Frank</TableData>
                            <TableData>Su</TableData>
                            <TableData>0444444444</TableData>
                            <TableData>123@qq.com </TableData>
                            <TableData><BlockBtn variant="danger">Click to unBlock</BlockBtn> </TableData>
                        </tr>
                        <tr>
                            <TableData >2</TableData>
                            <TableData>Jason</TableData>
                            <TableData>XXX</TableData>
                            <TableData>0466666666</TableData>
                            <TableData>123@gmail.com</TableData>
                            <TableData><BlockBtn variant="primary">Click to Block</BlockBtn> </TableData>
                        </tr>
                        <tr>
                            <TableData >3</TableData>
                            <TableData>Tracy</TableData>
                            <TableData>xxx</TableData>
                            <TableData>0455555555</TableData>
                            <TableData>123@hotmail.com</TableData>
                            <TableData><BlockBtn variant="primary">Click to Block</BlockBtn> </TableData>
                        </tr>
                    </tbody>
                </Table>
            </Row>
        </Container>

    )
}

export default CustomerManagement;