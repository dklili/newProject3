import React, { Component } from 'react';
import BookingManagement from './BookingManagementConnect';
import store from '../../../redux/index';
import * as actionCreaters from '../../../redux/actionCreators/adminActions/bookingManagementActions';

class AdminBookingManagement extends Component {
    componentDidMount() {
        store.dispatch(actionCreaters.getOrderList());
    }

    render() {
        return (

            <BookingManagement >
            </BookingManagement>
        )
    }
}



export default AdminBookingManagement;