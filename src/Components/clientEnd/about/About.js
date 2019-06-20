import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

//component import part
import ClientMenuBar from '../shareComponent/clientMenu/index';
import ClientFooter from '../shareComponent/clientFooter/index';

//styled component import
import { BackgroundWrapper, MainTitle, SubTitle, AboutUsImage, PlaceHold } from './aboutStyled';


function AboutUs() {
    return (

        <Container fluid>
            <Row>
                <ClientMenuBar></ClientMenuBar>
            </Row>
            <Row>
                <BackgroundWrapper>
                    <MainTitle>
                        About Us
                    </MainTitle>
                    <SubTitle fontSize={'40px'} color={'black'}>
                        Listen to Our Story
                    </SubTitle>
                </BackgroundWrapper>
            </Row>
            <Row>
                <Col md={{ span: 4, offset: 2 }}>
                    <SubTitle fontSize={'18px'}>
                        This is your About section. It’s a great space to tell your story and
                        to describe who you are and what you do. If you're a business,
                         talk about how you started and tell the story of your professional journey.
                         People want to know the real you, so don't be afraid to share personal anecdotes.
                          Explain your core values and how you, your organization,
                           or your business stand out from the crowd.
                           This is your About section. It’s a great space to tell your story and
                        to describe who you are and what you do. If you're a business,
                         talk about how you started and tell the story of your professional journey.
                         People want to know the real you, so don't be afraid to share personal anecdotes.
                          Explain your core values and how you, your organization,
                           or your business stand out from the crowd.
                           This is your About section. It’s a great space to tell your story and
                        to describe who you are and what you do. If you're a business,
                         talk about how you started and tell the story of your professional journey.
                         People want to know the real you, so don't be afraid to share personal anecdotes.
                          Explain your core values and how you, your organization,
                           or your business stand out from the crowd.
                           This is your About section. It’s a great space to tell your story and
                        to describe who you are and what you do. If you're a business,
                         talk about how you started and tell the story of your professional journey.
                         People want to know the real you, so don't be afraid to share personal anecdotes.
                          Explain your core values and how you, your organization,
                           or your business stand out from the crowd.
                    </SubTitle>
                </Col>
                <Col md={{ span: 4 }}>
                    <AboutUsImage />
                </Col>
            </Row>
            <Row>
                <PlaceHold></PlaceHold>
            </Row>
            <Row>
                <ClientFooter></ClientFooter>
            </Row>
        </Container >

    )
}

export default AboutUs;