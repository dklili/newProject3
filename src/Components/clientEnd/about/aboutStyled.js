import styled from 'styled-components';
import topBackground from '../../../assets/aboutUs-bg.jpg';
import aboutImg from '../../../assets/aboutUs-side.jpg';

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
    font-size:130px;
    color:black;
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
export const AboutUsImage = styled.div`
    height: 100%;
    width: 100%;
    background-image: url(${aboutImg});
    background-repeat: no-repeat;  
    background-position: center center; 
    background-size: cover; 
`
export const PlaceHold = styled.div`
    height: 100px;
`