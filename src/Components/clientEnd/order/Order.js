import React from 'react';


import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { domain } from '../../../setDomain';
import { Redirect } from 'react-router-dom';

import { ImgWrapper, OrderTitle, GrayBtn, BtnWrapper, BlackBtn } from './orderStyled';

//import component part
import ClientMenuBar from '../shareComponent/clientMenu/index';
import ClientFooter from '../shareComponent/clientFooter/index';

function MenuPage({ imageUrl, name, price, number, userID, productID, successCreateOrder,
    handleOrderIncrease, handleOrderDecrease, handleSubmiteOrder }) {
    if (userID === '') {
        return (
            <Redirect to='/login' />
        )
    }
    else if (successCreateOrder === true) {
        return (
            <Redirect to='/cart' />
        )
    }
    return (

        <Container fluid>
            <Row>
                <ClientMenuBar />
            </Row>
            <Row>
                <Col md={6}>

                    <ImgWrapper bgImg={`${domain}/${imageUrl}`} ></ImgWrapper>
                </Col>
                <Col md={6}>
                    <OrderTitle mt='11rem' fs='4rem'>
                        {name}
                    </OrderTitle>
                    <OrderTitle mt='2rem' fs='2rem'>
                        Price: ${price}
                    </OrderTitle>
                    <OrderTitle mt='2rem' fs='2rem'>
                        Number:
                    </OrderTitle>
                    <Row>
                        <Col md={2}>

                            <BtnWrapper>
                                <GrayBtn onClick={() =>
                                    handleOrderDecrease(number)
                                }>-</GrayBtn>
                            </BtnWrapper>
                        </Col>
                        <Col md={2}>
                            <OrderTitle mt='6rem' fs='2rem' ta='center'>
                                {number}
                            </OrderTitle>
                        </Col>
                        <Col md={2}>
                            <BtnWrapper>
                                <GrayBtn onClick={() =>
                                    handleOrderIncrease(number)
                                }>+</GrayBtn>
                            </BtnWrapper>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={2}>
                            <BtnWrapper>
                                <BlackBtn
                                    onClick={() => handleSubmiteOrder(number, userID, productID)}
                                >Submit</BlackBtn>
                            </BtnWrapper>
                        </Col>
                    </Row>
                </Col>
            </Row>
            <Row>
                <ClientFooter />
            </Row>

        </Container >

    )
}

export default MenuPage;