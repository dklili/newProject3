import styled from 'styled-components';

import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

//define the form.xxx file
const formControl = Form.Control;
const formLaber = Form.Label;


export const FormWrapper = styled.div`
    margin-top: 50px;
`
export const CoffeeForm = styled(formControl)`
    width: ${props => props.width};
    height: ${props => props.height};
    margin-left: 5px;
`
export const FormTitleWrapper = styled.div`
    border-bottom: 1px dotted #000;
    width: 370px;
    margin-bottom: 15px;
`
export const FormTitle = styled.h1`
    font-size: 50px;
`
export const CommonDescribe = styled(formLaber)`
    height:30px;
    line-height:30px;
    font-size:18px;
    margin-left: 5px;

`
export const SubmitBtn = styled(Button)`
    width: 150px;
    margin-left: 20px;
`
export const CancelBtn = styled(Button)`
    width: 150px;
`