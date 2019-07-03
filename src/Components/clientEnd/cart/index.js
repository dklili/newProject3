import React, { Component } from 'react';
import { connect } from 'react-redux';
// import EmptyCart from './EmptyCart';
import Cart from './Cart'


class DefineCar extends Component {
    render() {
        return (
            <Cart />
        )
    }
}
const mapStateToProps = (state, ownProps) => ({
    product: state.menuReducer.product
});

const ClientCart = connect(
    mapStateToProps
)(DefineCar)
export default ClientCart;