import React, { Component } from 'react';
import CoffeeManagement from './coffeeManagementConnect';
import store from '../../../redux/index';
import * as actionCreaters from '../../../redux/actionCreators/adminActions/coffeeManagementActions';
import { handleSuccessUpdateCoffee, handleUpdateCoffeeMessage } from '../../../redux/actionCreators/adminActions/updateCoffeeActions';
import { handleSuccessAddCoffee, handleClearAddCoffeeData, handleAddCoffeeMessage } from '../../../redux/actionCreators/adminActions/addNewCoffeeACtions';

class AdminCoffeeManagement extends Component {
    componentDidMount() {
        const emptyData = {
            name: '',
            price: ''
        }
        const value = false;
        const message = '';
        store.dispatch(actionCreaters.getCoffeList());
        store.dispatch(handleSuccessUpdateCoffee(value));
        store.dispatch(handleUpdateCoffeeMessage(message));
        store.dispatch(handleAddCoffeeMessage(message));
        store.dispatch(handleSuccessAddCoffee(value));
        store.dispatch(handleClearAddCoffeeData(emptyData));
    }
    render() {
        return (
            <CoffeeManagement></CoffeeManagement>
        )
    }
}

export default AdminCoffeeManagement;