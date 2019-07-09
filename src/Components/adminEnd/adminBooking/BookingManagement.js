import React from 'react';
import Container from 'react-bootstrap/Container';
import Moment from 'react-moment';
import Row from 'react-bootstrap/Row';
import Table from 'react-bootstrap/Table';
import AdminMenuBar from '../shareComponent/menuBar/index';

import { ReadyBtn, TalbeHeader, TableData } from './bookingManagementStyled';


function BookingManagement({ data, handleBookingStatusChange }) {
    return (
        <Container fluid>
            <Row>
                <AdminMenuBar></AdminMenuBar>
            </Row>
            <Row>
                <Table striped bordered hover size="md">
                    <thead>
                        <tr>
                            <TalbeHeader headerWidth={'250px'} >Order Time</TalbeHeader>
                            <TalbeHeader headerWidth={'250px'}>Name</TalbeHeader>
                            <TalbeHeader headerWidth={'100px'}>Status </TalbeHeader>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map(items => {
                            if (items.status === 'Pending') {
                                return (
                                    <tr key={items._id}>
                                        <TableData><Moment format="YYYY/MM/DD HH:mm">{items.date}</Moment></TableData>
                                        <TableData>{items.product.name}</TableData>
                                        <TableData>
                                            <ReadyBtn variant="warning" onClick={() => {
                                                handleBookingStatusChange(items.status, items._id)
                                            }}>
                                                {items.status}
                                            </ReadyBtn>
                                        </TableData>
                                    </tr>
                                )
                            }
                            else if (items.status === 'Ready')
                                return (
                                    <tr key={items._id}>
                                        <TableData><Moment format="YYYY/MM/DD HH:mm">{items.date}</Moment></TableData>
                                        <TableData>{items.product.name}</TableData>
                                        <TableData>
                                            <ReadyBtn variant="success" onClick={() => {
                                                handleBookingStatusChange(items.status, items._id)
                                            }}>
                                                {items.status}
                                            </ReadyBtn>
                                        </TableData>
                                    </tr>
                                )
                            else if (items.status === 'Collected')
                                return (
                                    <tr key={items._id}>
                                        <TableData><Moment format="YYYY/MM/DD HH:mm">{items.date}</Moment></TableData>
                                        <TableData>{items.product.name}</TableData>
                                        <TableData>
                                            <ReadyBtn variant="danger" onClick={() => {
                                                handleBookingStatusChange(items.status, items._id)
                                            }}>
                                                {items.status}
                                            </ReadyBtn>
                                        </TableData>
                                    </tr>
                                )
                            else return null;
                        })}
                    </tbody>
                </Table>
            </Row>
        </Container>

    )
}

export default BookingManagement;