import styled from 'styled-components';
import topBackground from '../../../assets/menu-bg.jpg';
import { Link } from 'react-router-dom';

export const BackgroundWrapper = styled.div`
    height: 500px;
    width:100%;
    background-image: url(${topBackground});
    background-repeat: no-repeat; 
    background-attachment: fixed; 
    background-position: center center; 
    background-size: cover; 
    margin-bottom: 80px;
`
export const MainTitle = styled.h1`
    font-size:150px;
    color:rgb(229,229,229);
    font-weight:bolder;
    font-family:Helvetica, sans-serif;
    text-align:center;
    margin-top: 120px;
`
export const SubTitle = styled.h2`
    font-size:${props => props.fontSize};
    color:${props => props.color};
    font-family:monospace ;
    text-align:center;
    margin-top: 10px;
`
export const CoffeeItemWrapper = styled.div`
    width: 300px;
    height: 450px;
    margin:auto;
    margin-bottom: 20px;
`
export const CoffeeItemHoverWrapper = styled.div`
    width: 100%;
    height: 450px;
    margin:auto;
    padding-top: 30px;
    transition: all 0.3s linear;
    :hover{
        padding-top: 10px;
    }
`
export const PlaceHold = styled.div`
    height: 200px;
`
export const BlackBtn = styled.button`
    cursor: pointer;
    width: 150px;
    height: 40px;
    border:1px solid black;
    border-radius:3px;
    background-color: black;
    color: white;
    margin:auto;
    margin-top: 20px;
    margin-bottom: ${props => props.mb};
    transition: all 0.3s linear;
    :hover{
        background-color: gray;
        color:black;
        text-decoration:none;
    
    }
`

export const LinkWrapper = styled(Link)`
    :hover{
        text-decoration:none
    }
`