import React from 'react';
import Nav from 'react-bootstrap/Nav';
import { NavbarWrapper, NavWrapper, NavbarBrandWrapper, NavLinkWrapper } from './menuBarStyled';
import { withRouter } from 'react-router-dom';


function AdminMenuBar(props) {
    const changeAddress = (e, address) => {
        e.preventDefault();
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
                    <Nav.Link onClick={(e) => changeAddress(e, '/admin/login')}>Logout</Nav.Link>
                </NavWrapper>
            </NavbarWrapper.Collapse>
        </NavbarWrapper>
    )
}

export default withRouter(AdminMenuBar);