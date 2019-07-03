import React, { Component } from 'react';
import MenuPage from './menuConnect';
import store from '../../../redux/index';
import * as actionCreater from '../../../redux/actionCreators/clientActions/menuActions';

class ClientMenu extends Component {
    obtainProductDetail = () => {
        store.dispatch(actionCreater.handleProductDetail())
    }
    componentDidMount() {
        this.obtainProductDetail();
    }
    render() {
        return (
            <MenuPage />
        )
    }
}

export default ClientMenu;