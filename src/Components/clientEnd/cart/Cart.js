import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Table from 'react-bootstrap/Table';
import Moment from 'react-moment';

//component import part
import ClientMenuBar from '../shareComponent/clientMenu/index';
import ClientFooter from '../shareComponent/clientFooter/index';

import { TalbeHeader, FinishTableData, PandingTableData, ReadyTableData } from './cartStyled';


function Cart({ orders }) {
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
                            <TalbeHeader headerWidth={'250px'}>Name</TalbeHeader>
                            <TalbeHeader headerWidth={'200px'}>Order Number</TalbeHeader>
                            <TalbeHeader headerWidth={'100px'}>Status </TalbeHeader>
                        </tr>
                    </thead>
                    <tbody>
                        {orders.map(item => {
                            if (item.status === 'Pending') {
                                return (
                                    <tr key={item._id}>
                                        <PandingTableData>
                                            <Moment format="YYYY/MM/DD HH:mm">{item.date}</Moment></PandingTableData>
                                        <PandingTableData>{item.product.name}</PandingTableData>
                                        <PandingTableData>{item.quantity}</PandingTableData>
                                        <PandingTableData>
                                            {item.status}</PandingTableData>
                                    </tr>
                                )
                            }
                            else if (item.status === 'Ready') {
                                return (
                                    <tr key={item._id}>
                                        <ReadyTableData><Moment format="YYYY/MM/DD HH:mm">{item.date}</Moment></ReadyTableData>
                                        <ReadyTableData>{item.product.name}</ReadyTableData>
                                        <ReadyTableData>{item.quantity}</ReadyTableData>
                                        <ReadyTableData>
                                            {item.status}</ReadyTableData>
                                    </tr>
                                )
                            }
                            else if (item.status === 'Collected') {
                                return (
                                    <tr key={item._id}>
                                        <FinishTableData><Moment format="YYYY/MM/DD HH:mm">{item.date}</Moment></FinishTableData>
                                        <FinishTableData>{item.product.name}</FinishTableData>
                                        <FinishTableData>{item.quantity}</FinishTableData>
                                        <FinishTableData>
                                            {item.status}</FinishTableData>
                                    </tr>
                                )
                            }
                            return (null)
                        })}
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