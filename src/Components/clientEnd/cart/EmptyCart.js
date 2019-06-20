import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

//component import part
import ClientMenuBar from '../shareComponent/clientMenu/index';
import ClientFooter from '../shareComponent/clientFooter/index';

//import styled 
import { EmptCartWrapper, EmptyIco, EmptyCartTtitle } from './emptyCartStyled';


function EmptyCart() {
    return (

        <Container fluid>
            <Row>
                <ClientMenuBar></ClientMenuBar>
            </Row>
            <Row>
                <EmptCartWrapper>
                    <EmptyCartTtitle>Empty</EmptyCartTtitle>
                    <Row>
                        <EmptyIco></EmptyIco>
                    </Row>
                </EmptCartWrapper>
            </Row>
            <Row>
                <ClientFooter></ClientFooter>
            </Row>
        </Container >

    )
}

export default EmptyCart;