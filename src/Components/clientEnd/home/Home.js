import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

//component import part
import ClientMenuBar from '../shareComponent/clientMenu/index';
import ClientFooter from '../shareComponent/clientFooter/index';
import ShareCoffeeItem from '../shareComponent/coffeeItem/index';
import ShareBlackBtn from '../shareComponent/blackBtn/index';
import longBlack from '../../../assets/longBlack.jpg';
import flateWhite from '../../../assets/flateWhite.png';
import kabu from '../../../assets/kabu.jpg';


import {
    BackgroundWrapper, MainTitle, SubTitle, Line,
    SecondBackgroundWrapper, AboutUsDescribe, AboutUsImage,
} from './homeStyled';

function HomePage() {
    return (

        <Container fluid>
            <Row>
                <ClientMenuBar></ClientMenuBar>
            </Row>
            <Row>
                <BackgroundWrapper>
                    <MainTitle>
                        Coffee.
                    </MainTitle>
                    <SubTitle fontSize={'40px'} color={'rgb(229,229,229)'}>
                        It's the Simple Pleasures in Life
                    </SubTitle>
                </BackgroundWrapper>
            </Row>
            <Row>
                <Col md={12}>
                    <SubTitle fontSize='40px' color={'gray'}>
                        Everything's Fresh Here at Coffee.
                    </SubTitle>
                    <Line width={'400px'}></Line>
                </Col>
            </Row>
            <Row>
                <Col md={{ span: 2, offset: 2 }}>
                    <ShareCoffeeItem coffeeImg={longBlack} coffeeName={'Long Black'} coffeePrice={'$ 5.5'} />
                </Col>
                <Col md={{ span: 2, offset: 1 }}>
                    <ShareCoffeeItem coffeeImg={flateWhite} coffeeName={'Flate White'} coffeePrice={'$ 6.0'} />
                </Col>
                <Col md={{ span: 2, offset: 1 }}>
                    <ShareCoffeeItem coffeeImg={kabu} coffeeName={'Cappuccino'} coffeePrice={'$ 5.5'} />
                </Col>
            </Row>
            <Row>
                <ShareBlackBtn btnTitle={'See Menu'} btnLink={'/menu'} />
            </Row>
            <Row>
                <SecondBackgroundWrapper>
                </SecondBackgroundWrapper>
            </Row>
            <Row>
                <Col md={{ span: 4, offset: 2 }}>
                    <AboutUsDescribe>About Us</AboutUsDescribe>
                    <SubTitle fontSize='20px' color={'gray'}>
                        This is your About section. It’s a great space to tell your story
                        and to describe who you are and what you do. If you're a business,
                        talk about how you started and tell the story of your professional journey.
                        People want to know the real you, so don't be afraid to share personal anecdotes.
                        Explain your core values and how you, your organization, or your business stand out
                        from the crowd.
                    </SubTitle>
                    <Row>
                        <ShareBlackBtn btnTitle={'About Us'} btnLink={'/aboutus'} />
                    </Row>
                </Col>
                <Col md={{ span: 4 }}>
                    <AboutUsImage></AboutUsImage>
                </Col>
            </Row>
            <Row>
                <ClientFooter></ClientFooter>
            </Row>
        </Container >

    )
}

export default HomePage;