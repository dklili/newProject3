import React from 'react';
import Nav from 'react-bootstrap/Nav';
import { NavbarWrapper, NavWrapper, RouterLink, NavbarBrandWrapper, NavLinkWrapper } from './menuBarStyled';


function AdminMenuBar() {
    return (
        <NavbarWrapper collapseOnSelect expand="lg" bg="dark" variant="dark">
            <RouterLink to="/admin">
                <NavbarBrandWrapper  >Coffee Shop</NavbarBrandWrapper>
            </RouterLink>
            <NavbarWrapper.Toggle aria-controls="responsive-navbar-nav" />
            <NavbarWrapper.Collapse id="responsive-navbar-nav">
                <NavWrapper className="mr-auto">
                    <RouterLink to="/admin">
                        <NavLinkWrapper href="/admin">Home</NavLinkWrapper>
                    </RouterLink>
                    <RouterLink to="/admin/booking">
                        <NavLinkWrapper href="/admin/booking">Booking</NavLinkWrapper>
                    </RouterLink>
                    <RouterLink to="/admin/customer">
                        <NavLinkWrapper href="/admin/customer">Customer Management</NavLinkWrapper>
                    </RouterLink>
                    <RouterLink to="/admin/coffee">
                        <NavLinkWrapper href="/admin/coffee">Coffee Management</NavLinkWrapper>
                    </RouterLink>
                </NavWrapper>
                <NavWrapper>
                    <RouterLink to="/admin/login">
                        <Nav.Link href="/admin/login">Logout</Nav.Link>
                    </RouterLink>
                </NavWrapper>
            </NavbarWrapper.Collapse>
        </NavbarWrapper>
    )
}

export default AdminMenuBar;