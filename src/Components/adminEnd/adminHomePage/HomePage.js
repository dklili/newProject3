import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import AdminMenuBar from '../shareComponent/menuBar/index';


import {
    SectionWrapper, BookingIcon, CommonTitle, CommonDescribe,
    IcoWrapper, CustomerIcon, CoffeeIcon, RouterLink
} from './homePageStyled';


function Homepage({ bookingCount, userNumber, coffeeNumber }) {
    return (
        <Container fluid>
            <Row>
                <AdminMenuBar></AdminMenuBar>
            </Row>
            <Row>
                <Col md={4}>
                    <RouterLink to="/admin/booking">
                        <SectionWrapper wrapperColor={'rgb(239,179,92)'}>
                            <IcoWrapper>
                                <BookingIcon />
                            </IcoWrapper>
                            <CommonTitle>Booking</CommonTitle>
                            <CommonDescribe>Current Booking Number:{bookingCount}</CommonDescribe>
                        </SectionWrapper>
                    </RouterLink>
                </Col>
                <Col md={4}>
                    <RouterLink to="/admin/customer">
                        <SectionWrapper wrapperColor={'rgb(105,189,106)'}>
                            <IcoWrapper>
                                <CustomerIcon />
                            </IcoWrapper>
                            <CommonTitle>Customer Management</CommonTitle>
                            <CommonDescribe>Current Customer Number:{userNumber}</CommonDescribe>
                        </SectionWrapper>
                    </RouterLink>
                </Col>
                <Col md={4}>
                    <RouterLink to="/admin/coffee">
                        <SectionWrapper wrapperColor={'rgb(90,183,211)'}>
                            <IcoWrapper>
                                <CoffeeIcon />
                            </IcoWrapper>
                            <CommonTitle>Coffee Management</CommonTitle>
                            <CommonDescribe>Current Coffee Number:{coffeeNumber}</CommonDescribe>
                        </SectionWrapper>
                    </RouterLink>
                </Col>
            </Row>
        </Container>

    )
}

export default Homepage;