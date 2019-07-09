import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import store from '../../../redux/index';
import * as actionCreators from '../../../redux/actionCreators/clientActions/cartActions';

import { handleSuccessCreateOrder } from '../../../redux/actionCreators/clientActions/orderActions';
import EmptyCart from './EmptyCart';
import Cart from './Cart'


class DefineCar extends Component {

    componentDidMount() {
        const message = false;
        store.dispatch(handleSuccessCreateOrder(message))
        store.dispatch(actionCreators.handleEachUserOrderDetail(this.props.userId))
    }
    render() {
        if (this.props.userId === '') {
            return (
                <Redirect to='/login' />
            )
        }
        else if (this.props.count === 0) {
            return (
                <EmptyCart />
            )
        }
        else {
            return (
                <Cart orders={this.props.orders} />
            )
        }
    }
}
const mapStateToProps = (state, ownProps) => ({
    count: state.cartReducer.count,
    userId: state.loginReducer.userID,
    orders: state.cartReducer.orders
});

const ClientCart = connect(
    mapStateToProps
)(DefineCar)
export default ClientCart;