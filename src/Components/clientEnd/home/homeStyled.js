import styled from 'styled-components';
import topBackground from '../../../assets/Homepage-bg2.jpg';
import secondBackground from '../../../assets/Homepage-bg.jpg';
import thridBackground from '../../../assets/homepage-bg3.jpg'


export const BackgroundWrapper = styled.div`
    height: 700px;
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
    margin-top: 200px;
`
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
    background-image: url(${prop => prop.coffeeItem});
    background-repeat:no-repeat;
    background-size: contain;
    background-position:center;
    margin-top: 50px;
`
export const Line = styled.div`
    height: 2px;
    width: 50px;
    border-bottom: 2px solid gray;
    margin:auto;
    margin-top: 10px;
`
export const CoffeePrice = styled.h3`
    font-size:18px;
    font-family:monospace;
    color: gray;
    text-align:center;
    margin-top: 10px;
`
export const SeeMenuBtn = styled.button`
    cursor: pointer;
    width: 150px;
    height: 40px;
    border:1px solid black;
    border-radius:3px;
    background-color: black;
    color: white;
    margin:auto;
    margin-top: 50px;
    margin-bottom: 80px;
    transition: all 0.3s linear;
    :hover{
        background-color: gray;
        color:black;
    }
`
export const SecondBackgroundWrapper = styled.div`
    height: 400px;
    width:100%;
    background-image: url(${thridBackground});
    background-repeat: no-repeat; 
    background-attachment: fixed; 
    background-position: center center; 
    background-size: cover; 
    margin-bottom: 50px;
`
export const AboutUsDescribe = styled.h3`
    font-size:40px;
    font-family:Helvetica;
    font-weight:bold;
    color: black;
    text-align:center;
    padding-top: 70px;
`
export const AboutUsImage = styled.div`
    height: 400px;
    width: 100%;
    background-image: url(${secondBackground});
    background-repeat: no-repeat;  
    background-position: center center; 
    background-size: cover; 
`