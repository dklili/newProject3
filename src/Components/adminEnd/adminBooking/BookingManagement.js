import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Table from 'react-bootstrap/Table';
import ProgressBar from 'react-bootstrap/ProgressBar';
import AdminMenuBar from '../shareComponent/menuBar/index';

import { ReadyBtn, TalbeHeader, TableData } from './bookingManagementStyled';


function BookingManagement({ booking, handleStatusChange }) {
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
                            <TalbeHeader headerWidth={'100px'}>Status </TalbeHeader>
                        </tr>
                    </thead>
                    <tbody>
                        {booking.map(items => {
                            if (items.status === "Panding") {
                                return (
                                    <tr key={items.id}>
                                        <TableData>{items.orderTime}</TableData>
                                        <TableData><ProgressBar animated variant="warning" now={items.progress} style={{ marginTop: 18 }} /></TableData>
                                        <TableData>{items.name}</TableData>
                                        <TableData>{items.phoneNumber}</TableData>
                                        <TableData>
                                            {items.status}
                                        </TableData>
                                    </tr>
                                )
                            }
                            if (items.status === "Ready") {
                                return (
                                    <tr key={items.id}>
                                        <TableData >{items.orderTime}</TableData>
                                        <TableData><ProgressBar animated={false} now={items.progress} style={{ marginTop: 18 }} /></TableData>
                                        <TableData>{items.name}</TableData>
                                        <TableData>{items.phoneNumber}</TableData>
                                        <TableData>
                                            <ReadyBtn onClick={() => handleStatusChange(items.id)}>{items.status}</ReadyBtn>
                                        </TableData>
                                    </tr>
                                )
                            }
                            else return (
                                (
                                    <tr key={items.id}>
                                        <TableData >{items.orderTime}</TableData>
                                        <TableData><ProgressBar animated={false} variant="success" now={items.progress} style={{ marginTop: 18 }} /></TableData>
                                        <TableData>{items.name}</TableData>
                                        <TableData>{items.phoneNumber}</TableData>
                                        <TableData>
                                            {items.status}
                                        </TableData>
                                    </tr>
                                )
                            )
                        })}
                    </tbody>
                </Table>
            </Row>
        </Container>

    )
}

export default BookingManagement;