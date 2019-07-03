import React from 'react';
import styled from 'styled-components';
import NavBar from './NavBar.js';
import { Row, Image, Button } from 'react-bootstrap';

const OuterDiv = styled.div`
    background-color: #E8E8E8;
    margin-top: 2rem;
    width: 82rem;
    height: 37rem;
`

const NewDiv1 = styled.div`
    height: 30rem;
    margin-top: 2.5rem;
    width: 41rem;
`

const NewDiv2 = styled.div`
    height: 25rem;
    margin-top: 4rem;
    margin-left: 11rem;
    width: 19rem;
`

const OrderImage = styled(Image)`
    margin-top: 0.5rem;
    width: 28rem;
    height: 31rem;
    object-fit: cover;
`

const OrderBrandName = styled.div`
    text-align: left;
    width: 10rem;
    height: 2rem;
`

const OrderPrice = styled.div`
    text-align: left;
    width: 10rem;
    height: 1rem;
    margin-top: 1rem;
`

const OrderDesp = styled.div`
    text-align: left;
    width: 18rem;
    height: 9.5rem;
    margin-top: 1.5rem;
`

const DelBtn = styled(Button)`
    margin-left: 1rem;
    width: 4rem;
    height: 4rem;
`

const AddBtn = styled(Button)`
    margin-left: 3rem;
    width: 4rem;
    height: 4rem;
`

const Number = styled.div`
    margin-top: 0.5rem;
    margin-left: 3rem;
    width: 4rem;
    height: 4rem;
`

const InnerDiv = styled.div`
    text-align: left;
    margin-top: 1rem;
    margin-left: 5.5rem;
`

const OrderBtn = styled(Button)`
    margin-left: 11.5rem;
    width: 6rem;
    height: 2.5rem;
    margin-top: 3rem;
`

class Order extends React.Component {

    state = {
        cupsNumber: 1,
    }

    handleIncrement = (e) => {
        e.preventDefault();
        this.setState({
            cupsNumber: this.state.cupsNumber + 1
        })
    }

    handleDecrement = (e) => {
        e.preventDefault();
        if (this.state.cupsNumber > 1) {
            this.setState({
                cupsNumber: this.state.cupsNumber - 1
            })
        } else {
            this.setState({
                cupsNumber: this.state.cupsNumber
            })
        }
    }

    render() {
        return (
            <div>
            <NavBar />
                <OuterDiv>
                <Row>
                    <NewDiv1>
                        <OrderImage key={2} src={require(""+"./images/cafe-latte.jpg")} />
                    </NewDiv1>
                    <NewDiv2>
                        <OrderBrandName classname="text-dark order-brandName">
                            <h3>Cafe Latte</h3>
                        </OrderBrandName>
                        <OrderPrice classname="text-dark order-price">
                            <h6>Price: $5</h6>
                        </OrderPrice>
                        <OrderDesp classname="text-dark order-description">
                            <p>Descroption: 
                                <br/>
                                <br/>
                            </p>
                        </OrderDesp>
                        <Row>
                            <DelBtn variant="secondary" onClick={(e) => this.handleDecrement(e)}>
                                <h1>-</h1>
                            </DelBtn>
                            <Number>
                                <h1><b>{this.state.cupsNumber}</b></h1>
                            </Number>
                            <AddBtn variant="secondary" onClick={(e) => this.handleIncrement(e)}>
                                <h1>+</h1>
                            </AddBtn>
                        </Row>
                        <InnerDiv>
                            <h5>Totol Price: $</h5>
                        </InnerDiv>
                        <OrderBtn variant="dark">
                            <p>Submit</p>
                        </OrderBtn>
    
                    </NewDiv2>
                    </Row>
                </OuterDiv>
            </div>
        )  
    }
   
}

export default Order