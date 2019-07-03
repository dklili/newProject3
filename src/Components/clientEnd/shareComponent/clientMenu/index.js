import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import {
    NavbarWrapper, NavWrapper, NavbarBrandWrapper, NavLinkWrapper, NavLinkWrapperRight,
    FixWrapper
} from './menuBarStyled';
import store from '../../../../redux/index';

const Menu = (props) => {
    const changeAddress = (e, address) => {
        e.preventDefault();
        props.history.push(address)
    }
    const validatePageStatus = () => {
        const password = '';
        const email = '';
        const actionTypes = 'loginTitle';
        const value = 'login';
        const success = false;
        localStorage.removeItem(store.userID)
        store.dispatch({
            type: actionTypes,
            value: value,
            success: success,
            password: password,
            email: email
        })
    }
    return (
        <FixWrapper>
            <NavbarWrapper collapseOnSelect expand="lg" bg="dark" variant="dark">
                <NavbarBrandWrapper onClick={(e) => { changeAddress(e, '/') }}>Coffee Shop</NavbarBrandWrapper>
                <NavbarWrapper.Toggle aria-controls="responsive-navbar-nav" />
                <NavbarWrapper.Collapse id="responsive-navbar-nav">
                    <NavWrapper className="mr-auto">
                        <NavLinkWrapper onClick={(e) => { changeAddress(e, '/') }} >Home</NavLinkWrapper>
                        <NavLinkWrapper onClick={(e) => { changeAddress(e, '/menu') }}>Menu</NavLinkWrapper>
                        <NavLinkWrapper onClick={(e) => { changeAddress(e, '/aboutus') }}>About US</NavLinkWrapper>
                        <NavLinkWrapper onClick={(e) => { changeAddress(e, '/contact') }}>Contact</NavLinkWrapper>
                    </NavWrapper>
                    <NavWrapper>
                        <NavLinkWrapperRight onClick={(e) => { changeAddress(e, '/cart') }}>Cart</NavLinkWrapperRight>
                    </NavWrapper>
                    <NavWrapper>
                        <NavLinkWrapperRight onClick={(e) => {
                            props.login === 'login' ? changeAddress(e, '/login') : validatePageStatus();

                        }}>{props.login}</NavLinkWrapperRight>
                    </NavWrapper>
                </NavbarWrapper.Collapse>
            </NavbarWrapper>
        </FixWrapper >
    )
}
const mapStateToProps = (state) => ({
    login: state.loginReducer.login
})

const ClientMenu = connect(
    mapStateToProps
)(Menu)

export default withRouter(ClientMenu);