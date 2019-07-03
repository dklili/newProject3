import React, { Component } from 'react';
import Login from './loginConnect';
import store from '../../../redux/index';
import * as actionCreaters from '../../../redux/actionCreators/clientActions/singUpActions';

class ClientLogin extends Component {
    handleClearnSuccess = () => {
        const success = false;
        store.dispatch(actionCreaters.successCreate(success));
    }
    componentDidMount() {
        this.handleClearnSuccess();
    }
    render() {
        return (
            <Login />
        )
    }
}

export default ClientLogin;