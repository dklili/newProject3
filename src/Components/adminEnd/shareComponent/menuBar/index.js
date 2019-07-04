import React from 'react';
import Nav from 'react-bootstrap/Nav';
import { connect } from 'react-redux';
import store from '../../../../redux/index';
import * as actionCreater from '../../../../redux/actionCreators/adminActions/adminLoginActions';
import { NavbarWrapper, NavWrapper, NavbarBrandWrapper, NavLinkWrapper } from './menuBarStyled';
import { withRouter } from 'react-router-dom';


function AdminMenu(props) {
    const changeAddress = (e, address) => {
        e.preventDefault();
        props.history.push(address);
    }
    const handleLogout = (address) => {
        const loginStatus = false;
        sessionStorage.removeItem('admin');
        console.log(sessionStorage.getItem('admin'));
        store.dispatch(actionCreater.handleLoginStatus(loginStatus));
        props.history.push(address);

    }
    return (
        <NavbarWrapper collapseOnSelect expand="lg" bg="dark" variant="dark">
            <NavbarBrandWrapper onClick={(e) => changeAddress(e, '/admin')} >Coffee Shop</NavbarBrandWrapper>
            <NavbarWrapper.Toggle aria-controls="responsive-navbar-nav" />
            <NavbarWrapper.Collapse id="responsive-navbar-nav">
                <NavWrapper className="mr-auto">
                    <NavLinkWrapper onClick={(e) => changeAddress(e, '/admin')}>Home</NavLinkWrapper>
                    <NavLinkWrapper onClick={(e) => changeAddress(e, '/admin/booking')}>Booking</NavLinkWrapper>
                    <NavLinkWrapper onClick={(e) => changeAddress(e, '/admin/customer')}>Customer Management</NavLinkWrapper>
                    <NavLinkWrapper onClick={(e) => changeAddress(e, '/admin/coffee')}>Coffee Management</NavLinkWrapper>
                </NavWrapper>
                <NavWrapper>
                    <Nav.Link onClick={() => handleLogout('/admin/login')}>Logout</Nav.Link>
                </NavWrapper>
            </NavbarWrapper.Collapse>
        </NavbarWrapper>
    )
}
const mapStateToProps = (state, ownProps) => ({
    loginStatus: state.adminLoginReducer.loginStatus
})
const AdminMenuBar = connect(
    mapStateToProps
)(AdminMenu)

export default withRouter(AdminMenuBar);