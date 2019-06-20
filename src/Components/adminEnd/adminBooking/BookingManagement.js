import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Table from 'react-bootstrap/Table';
import ProgressBar from 'react-bootstrap/ProgressBar';
import AdminMenuBar from '../shareComponent/menuBar/index';

import { ReadyBtn, TalbeHeader, TableData } from './bookingManagementStyled';


function BookingManagement() {
    return (
        <Container fluid>
            <Row>
                <AdminMenuBar></AdminMenuBar>
            </Row>
            <Row>
                <Table striped bordered hover size="md">
                    <thead>
                        <tr>
                            <TalbeHeader headerWidth={'150px'} >Order Time</TalbeHeader>
                            <TalbeHeader headerWidth={'800px'}>Progress</TalbeHeader>
                            <TalbeHeader headerWidth={'250px'}>Name</TalbeHeader>
                            <TalbeHeader headerWidth={'200px'}>Phone Number</TalbeHeader>
                            <TalbeHeader headerWidth={'100px'}>Status</TalbeHeader>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <TableData>18:34:26</TableData>
                            <TableData><ProgressBar animated variant="warning" now={20} style={{ marginTop: 18 }} /></TableData>
                            <TableData>Frank</TableData>
                            <TableData>0444444444</TableData>
                            <TableData>
                                Cooking
                            </TableData>
                        </tr>
                        <tr>
                            <TableData >18:20:27</TableData>
                            <TableData><ProgressBar animated={false} now={100} style={{ marginTop: 18 }} /></TableData>
                            <TableData>Jason</TableData>
                            <TableData>0466666666</TableData>
                            <TableData>
                                <ReadyBtn>Ready</ReadyBtn>
                            </TableData>
                        </tr>
                        <tr>
                            <TableData >15:20:27</TableData>
                            <TableData><ProgressBar animated={false} variant="success" now={100} style={{ marginTop: 18 }} /></TableData>
                            <TableData>Tracy</TableData>
                            <TableData>0455555555</TableData>
                            <TableData>
                                Down
                            </TableData>
                        </tr>
                    </tbody>
                </Table>
            </Row>
        </Container>

    )
}

export default BookingManagement;