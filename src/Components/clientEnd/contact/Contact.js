import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

//component import part
import ClientMenuBar from '../shareComponent/clientMenu/index';
import ClientFooter from '../shareComponent/clientFooter/index';
import SimpleMap from '../shareComponent/googleMap/index';

//styled component import
import { Title, SubTitle, BackgroundWrapper, TextWrapper, MapWrapper } from './contactStyled';


function Contact() {
    return (

        <Container fluid>
            <Row>
                <ClientMenuBar></ClientMenuBar>
            </Row>
            <Row>
                <BackgroundWrapper>
                    <Col md={{ span: 6, offset: 3 }}>
                        <TextWrapper>
                            <Title fontSize={'80px'} color={'Black'}>
                                CONTACT
                            </Title>
                            <SubTitle fontSize={'30px'} color={'Black'} top={'50px'}>
                                Address:
                            </SubTitle>
                            <SubTitle fontSize={'22px'} color={'Black'} top={'30px'}>
                                Australia Sydney Chinatown 20000
                            </SubTitle>
                            <SubTitle fontSize={'30px'} color={'Black'} top={'50px'}>
                                Phone:
                            </SubTitle>
                            <SubTitle fontSize={'22px'} color={'Black'} top={'30px'}>
                                0451 555 555
                            </SubTitle>
                            <SubTitle fontSize={'30px'} color={'Black'} top={'50px'}>
                                Email:
                            </SubTitle>
                            <SubTitle fontSize={'22px'} color={'Black'} top={'30px'}>
                                coffeeShop@gmail.com
                            </SubTitle>
                            <MapWrapper>
                                <SimpleMap />
                            </MapWrapper>
                        </TextWrapper>
                    </Col>
                </BackgroundWrapper>
            </Row>
            <Row>
                <ClientFooter></ClientFooter>
            </Row>
        </Container >

    )
}

export default Contact;