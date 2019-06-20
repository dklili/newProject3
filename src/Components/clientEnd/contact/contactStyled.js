import styled from 'styled-components';
import topBackground from '../../../assets/contact-bg.jpg';

export const BackgroundWrapper = styled.div`
    height: 1350px;
    width:100%;
    background-image: url(${topBackground});
    background-repeat: no-repeat; 
    background-attachment: fixed; 
    background-position: center center; 
    background-size: cover; 
`
export const Title = styled.h2`
    font-size:${props => props.fontSize};
    color:${props => props.color};
    font-family:monospace ;
    text-align:center;
    margin-top: 200px;
`
export const SubTitle = styled.h2`
    font-size:${props => props.fontSize};
    color:${props => props.color};
    font-family:monospace ;
    text-align:center;
    margin-top: ${props => props.top};
`
export const TextWrapper = styled.div`
    height: 1200px;
    width: 100%;
    border:1px solid gray;
    background-color: rgb(224, 220, 220,0.5);
    margin:auto;
    margin-top: 100px;
`
export const MapWrapper = styled.div`
    height: 300px;
    width: 500px;
    margin:auto;
    margin-top: 100px;
`