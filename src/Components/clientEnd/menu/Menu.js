import React from 'react';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { domain } from '../../../setDomain';

//import component part
import ClientMenuBar from '../shareComponent/clientMenu/index';
import ClientFooter from '../shareComponent/clientFooter/index';
import ShareCoffeeItem from '../shareComponent/coffeeItem/index';

import {
    BackgroundWrapper,
    MainTitle,
    SubTitle,
    CoffeeItemWrapper,
    CoffeeItemHoverWrapper,
    PlaceHold,
    BlackBtn,
    LinkWrapper
} from './menuStyled';

function MenuPage({ product, handleAddToCart }) {
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

                {
                    product.map(item => {
                        return (
                            <Col md={4} key={item._id}>
                                <CoffeeItemWrapper>
                                    <CoffeeItemHoverWrapper>
                                        <ShareCoffeeItem coffeeImg={`${domain}/${item.productImage}`}
                                            coffeeName={item.name}
                                            coffeePrice={item.price} />
                                        <LinkWrapper to='/order'>
                                            <Row>
                                                <BlackBtn
                                                    onClick={() =>
                                                        handleAddToCart(item._id)
                                                    }
                                                >Add To Cart</BlackBtn>

                                            </Row>
                                        </LinkWrapper>
                                    </CoffeeItemHoverWrapper>
                                </CoffeeItemWrapper>
                            </Col>
                        )
                    })
                }
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