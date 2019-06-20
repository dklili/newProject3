import styled from 'styled-components';
export const BlackBtn = styled.button`
    cursor: pointer;
    width: 150px;
    height: 40px;
    border:1px solid black;
    border-radius:3px;
    background-color: black;
    color: white;
    margin-top: 20px;
    margin-bottom: 80px;
    transition: all 0.3s linear;
    :hover{
        background-color: gray;
        color:black;
    }
`
export const BtnWrapper = styled.div`
    margin:auto;
`