import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

//import component part
import ClientMenuBar from '../shareComponent/clientMenu/index';
import ClientFooter from '../shareComponent/clientFooter/index';
import ShareCoffeeItem from '../shareComponent/coffeeItem/index';
import ShareBlackBtn from '../shareComponent/blackBtn/index';
import longBlack from '../../../assets/longBlack.jpg';
import flateWhite from '../../../assets/flateWhite.png';
import kabu from '../../../assets/kabu.jpg';
import natie from '../../../assets/natie.png';
import maqiduo from '../../../assets/maqiduo.png';
import americano from '../../../assets/Americano.jpg';

import { BackgroundWrapper, MainTitle, SubTitle, CoffeeItemWrapper, CoffeeItemHoverWrapper, PlaceHold } from './menuStyled';

function MenuPage() {
    return (

        <Container fluid>
            <Row>
                <ClientMenuBar></ClientMenuBar>
            </Row>
            <Row>
                <BackgroundWrapper>
                    <MainTitle>
                        Menu
                    </MainTitle>
                    <SubTitle fontSize={'40px'} color={'rgb(229,229,229)'}>
                        It's Always Coffee Time
                    </SubTitle>
                </BackgroundWrapper>
            </Row>
            <Row>
                <Col md={{ span: 2, offset: 2 }}>
                    <CoffeeItemWrapper>
                        <CoffeeItemHoverWrapper>
                            <ShareCoffeeItem coffeeImg={longBlack} coffeeName={'Long Black'} coffeePrice={'$ 5.5'} />
                            <Row>
                                <ShareBlackBtn btnTitle={'Add To Cart'} />
                            </Row>
                        </CoffeeItemHoverWrapper>
                    </CoffeeItemWrapper>
                </Col>
                <Col md={{ span: 2, offset: 1 }}>
                    <CoffeeItemWrapper>
                        <CoffeeItemHoverWrapper>
                            <ShareCoffeeItem coffeeImg={flateWhite} coffeeName={'Flate White'} coffeePrice={'$ 6.0'} />
                            <Row>
                                <ShareBlackBtn btnTitle={'Add To Cart'} />
                            </Row>
                        </CoffeeItemHoverWrapper>
                    </CoffeeItemWrapper>
                </Col>
                <Col md={{ span: 2, offset: 1 }}>
                    <CoffeeItemWrapper>
                        <CoffeeItemHoverWrapper>
                            <ShareCoffeeItem coffeeImg={kabu} coffeeName={'Cappuccino'} coffeePrice={'$ 5.5'} />
                            <Row>
                                <ShareBlackBtn btnTitle={'Add To Cart'} />
                            </Row>
                        </CoffeeItemHoverWrapper>
                    </CoffeeItemWrapper>
                </Col>
                <Col md={{ span: 2, offset: 2 }}>
                    <CoffeeItemWrapper>
                        <CoffeeItemHoverWrapper>
                            <ShareCoffeeItem coffeeImg={natie} coffeeName={'Caffè Latte'} coffeePrice={'$ 7.0'} />
                            <Row>
                                <ShareBlackBtn btnTitle={'Add To Cart'} />
                            </Row>
                        </CoffeeItemHoverWrapper>
                    </CoffeeItemWrapper>
                </Col>
                <Col md={{ span: 2, offset: 1 }}>
                    <CoffeeItemWrapper>
                        <CoffeeItemHoverWrapper>
                            <ShareCoffeeItem coffeeImg={maqiduo} coffeeName={'Machiatto'} coffeePrice={'$ 7.0'} />
                            <Row>
                                <ShareBlackBtn btnTitle={'Add To Cart'} />
                            </Row>
                        </CoffeeItemHoverWrapper>
                    </CoffeeItemWrapper>
                </Col>
                <Col md={{ span: 2, offset: 1 }}>
                    <CoffeeItemWrapper>
                        <CoffeeItemHoverWrapper>
                            <ShareCoffeeItem coffeeImg={americano} coffeeName={'Americano'} coffeePrice={'$ 5.5'} />
                            <Row>
                                <ShareBlackBtn btnTitle={'Add To Cart'} />
                            </Row>
                        </CoffeeItemHoverWrapper>
                    </CoffeeItemWrapper>
                </Col>
            </Row>
            <Row>
                <PlaceHold />
            </Row>
            <Row>
                <ClientFooter></ClientFooter>
            </Row>
        </Container >

    )
}

export default MenuPage;