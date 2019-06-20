import styled from 'styled-components';
export const SubTitle = styled.h2`
    font-size:${props => props.fontSize};
    color:${props => props.color};
    font-family:monospace ;
    text-align:center;
    margin-top: 10px;
`
export const CoffeeItem = styled.div`
height: 250px;
width:100%;
background-image: url(${props => props.coffeeImg});
background-repeat:no-repeat;
background-size: contain;
background-position:center;
margin-top: 50px;
`
export const Line = styled.div`
height: 2px;
width: ${props => props.width};
border-bottom: 2px solid gray;
margin:auto;
margin-top: 20px;
`
export const CoffeePrice = styled.h3`
font-size:18px;
font-family:monospace;
color: gray;
text-align:center;
margin-top: 10px;
`