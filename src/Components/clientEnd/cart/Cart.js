import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Table from 'react-bootstrap/Table';

//component import part
import ClientMenuBar from '../shareComponent/clientMenu/index';
import ClientFooter from '../shareComponent/clientFooter/index';

import { TalbeHeader, TableData } from './cartStyled';


function Cart({ booking, handleStatusChange }) {
    return (
        <Container fluid>
            <Row>
                <ClientMenuBar></ClientMenuBar>
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
                        <tr >
                            <TableData>12:30:23</TableData>
                            <TableData>some coffee</TableData>
                            <TableData>0444444444</TableData>
                            <TableData>
                                panding
                            </TableData>
                        </tr>
                        {/* {booking.map(items => {
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
                        })} */}
                    </tbody>
                </Table>
            </Row>
            <Row>
                <ClientFooter></ClientFooter>
            </Row>
        </Container>

    )
}

export default Cart;