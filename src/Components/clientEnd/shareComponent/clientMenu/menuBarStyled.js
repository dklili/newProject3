import styled from 'styled-components';
import Navbar from 'react-bootstrap/Navbar';
import Row from 'react-bootstrap/Row'
import Nav from 'react-bootstrap/Nav';
import { Link } from 'react-router-dom';


const NavbarBrand = Navbar.Brand
const NavLink = Nav.Link

export const FixWrapper = styled(Row)`
    width:100%;
    margin:auto;
    position: fixed;
    z-index: 10;
`
export const NavbarBrandWrapper = styled(NavbarBrand)`
    padding-right: 150px;
    height: 40px;
    font-size:25px;
`
export const NavbarWrapper = styled(Navbar)`
    width: 100%;
    margin:auto;
    padding-left: 30px;
`
export const NavWrapper = styled(Nav)`
    :hover{
        text-decoration:none;
    }
`
export const NavLinkWrapper = styled(NavLink)`
    font-size:22px;
    margin-right: 50px;
`
export const NavLinkWrapperRight = styled(NavLink)`
    font-size:18px;
    margin-right: 50px;
`

export const RouterLink = styled(Link)`
    :hover{
        text-decoration:none;
    }
`