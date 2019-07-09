import React, { Component } from 'react';
import Homepage from './HomePage';
import { connect } from 'react-redux';

import { getOrderList } from '../../../redux/actionCreators/adminActions/bookingManagementActions';
import { getUser } from '../../../redux/actionCreators/adminActions/adminCustomerActions';
import { getCoffeList } from '../../../redux/actionCreators/adminActions/coffeeManagementActions';


class AdminHomePage extends Component {
    componentDidMount() {
        this.props.getcountNumber()
    }
    render() {
        return (
            <Homepage bookingCount={this.props.bookingCount}
                userNumber={this.props.userNumber}
                coffeeNumber={this.props.coffeeNumber}
            ></Homepage>
        )
    }
}
const mapStateToProps = (state, ownProps) => ({
    bookingCount: state.bookingManagementReducer.count,
    userNumber: state.adminCustomerReducer.userNumber,
    coffeeNumber: state.coffeeManagementReducer.coffeeNumber
})
const mapDispatchToProps = (dispatch, ownProps) => ({
    getcountNumber: () => {
        dispatch(getOrderList());
        dispatch(getUser());
        dispatch(getCoffeList());

    }
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(AdminHomePage);