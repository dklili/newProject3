import styled from 'styled-components';


export const ImgWrapper = styled.div`
    height: 30rem;
    width: 30rem;
    background-image: url('${props => props.bgImg}');
    background-repeat:no-repeat;
    background-size: contain;
    background-position:center;
    margin:auto;
    margin-top: 11rem;
    margin-bottom: 11rem;
    border-radius:3rem;
`

export const OrderTitle = styled.h1`
    color: black;
    font-size:${props => props.fs};
    margin-top: ${props => props.mt};
    font-family:Helvetica, sans-serif;
    padding-left: 28px;

`
export const BtnWrapper = styled.div`
`
export const GrayBtn = styled.button`
    cursor: pointer;
    width: 70px;
    height: 70px;
    border:1px solid black;
    border-radius:3px;
    background-color: gray;
    margin-top: 60px;
    font-size:3rem;
    color: white;
    transition: all 0.3s linear;
    :hover{
        background-color: gray;
        color:black;
    }
`
export const BlackBtn = styled.button`
    cursor: pointer;
    width: 150px;
    height: 40px;
    border:1px solid black;
    border-radius:3px;
    background-color: black;
    color: white;
    margin-top: 60px;
    transition: all 0.3s linear;
    :hover{
        background-color: gray;
        color:black;
    }
`