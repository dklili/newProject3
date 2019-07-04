import React, { Component } from 'react';
import CoffeeManagement from './coffeeManagementConnect';
import store from '../../../redux/index';
import * as actionCreaters from '../../../redux/actionCreators/adminActions/coffeeManagementActions';

class AdminCoffeeManagement extends Component {
    componentDidMount() {
        store.dispatch(actionCreaters.getCoffeList())
    }
    render() {
        return (
            <CoffeeManagement></CoffeeManagement>
        )
    }
}

export default AdminCoffeeManagement;