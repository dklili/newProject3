import styled from 'styled-components';
import background from '../../../assets/login-bg.jpg';
import Button from 'react-bootstrap/Button'

export const LoginBackground = styled.div`
    width:1900px;
    height:920px;
    background-image: url(${background});
    background-size: cover;
`

export const LoginWraper = styled.div`
    width:550px;
    height:500px;
    background-color:rgb(224, 220, 220,0.82);
    border-radius:10px;
    margin:auto;
    margin-top:130px;

`
export const LoginTitle = styled.h2`
    font-size:23px;
    text-align:center;
    padding-top:70px;
    padding-bottom:50px;
    font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
`
export const InputDescribe = styled.h3`
    font-size:19px;
    margin-left:150px;
    margin-top:20px;
`
export const Input = styled.input`
    width:250px;
    height:30px;
    margin-left:150px;
    padding-left: 5px;
`
export const SubmitBtn = styled(Button)`
    width: 250px;
    margin-top: 20px;
    margin-left: 150px;
    margin-top: 40px;
    
`