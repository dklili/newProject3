import React from 'react';
import {
    NavbarWrapper, NavWrapper, RouterLink, NavbarBrandWrapper, NavLinkWrapper, NavLinkWrapperRight,
    FixWrapper
} from './menuBarStyled';


function ClinetMenu() {
    return (
        <FixWrapper>
            <NavbarWrapper collapseOnSelect expand="lg" bg="dark" variant="dark">
                <RouterLink to="/">
                    <NavbarBrandWrapper  >Coffee Shop</NavbarBrandWrapper>
                </RouterLink>
                <NavbarWrapper.Toggle aria-controls="responsive-navbar-nav" />
                <NavbarWrapper.Collapse id="responsive-navbar-nav">
                    <NavWrapper className="mr-auto">
                        <RouterLink to="/">
                            <NavLinkWrapper href="/">Home</NavLinkWrapper>
                        </RouterLink>
                        <RouterLink to="/menu">
                            <NavLinkWrapper href="/menu">Menu</NavLinkWrapper>
                        </RouterLink>
                        <RouterLink to="/aboutus">
                            <NavLinkWrapper href="/aboutus">About US</NavLinkWrapper>
                        </RouterLink>
                        <RouterLink to="/contact">
                            <NavLinkWrapper href="/contact">Contact</NavLinkWrapper>
                        </RouterLink>
                    </NavWrapper>
                    <NavWrapper>
                        <RouterLink to="/cart">
                            <NavLinkWrapperRight href="/cart">Cart</NavLinkWrapperRight>
                        </RouterLink>
                    </NavWrapper>
                    <NavWrapper>
                        <RouterLink to="/login">
                            <NavLinkWrapperRight href="/login">LogIn</NavLinkWrapperRight>
                        </RouterLink>
                    </NavWrapper>
                </NavbarWrapper.Collapse>
            </NavbarWrapper>
        </FixWrapper>
    )
}

export default ClinetMenu;