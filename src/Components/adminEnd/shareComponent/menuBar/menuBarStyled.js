import styled from 'styled-components';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { Link } from 'react-router-dom';

const NavbarBrand = Navbar.Brand
const NavLink = Nav.Link

export const NavbarBrandWrapper = styled(NavbarBrand)`
    padding-right: 150px;
    font-size:30px;
`
export const NavbarWrapper = styled(Navbar)`
    width: 1850px;
    margin:auto;
    padding-left: 30px;
`
export const NavWrapper = styled(Nav)`
    :hover{
        text-decoration:none;
    }
`
export const NavLinkWrapper = styled(NavLink)`
    font-size:18px;
    margin-right: 20px;
`
export const RouterLink = styled(Link)`
    :hover{
        text-decoration:none;
    }
`