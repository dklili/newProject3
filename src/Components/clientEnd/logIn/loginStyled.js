import styled from 'styled-components';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import topBackground from '../../../assets/Homepage-bg2.jpg';

const GetFormControl = Form.Control;
const GetFormText = Form.Text;

export const LoginFormWrapper = styled.div`
    width:600px;
    height: 500px;
    margin:auto;
    margin-top: 250px;
    margin-bottom: 100px;
`
export const LoginTitle = styled.h2`
    padding-top:${props => props.pTop};
    font-size:${props => props.size};
    font-family:monospace ;
    text-align:center;
`
export const SubmitBtn = styled(Button)`
    margin:auto;
    width: 400px;
    margin-top: 20px;
`
export const FormControl = styled(GetFormControl)`
    width: 400px;
    margin:auto;
    margin-top: 40px;
`
export const FormText = styled(GetFormText)`
    margin:auto;
`
export const BackgroundWrapper = styled.div`
    height: 100%;
    width:100%;
    background-image: url(${topBackground});
    background-repeat: no-repeat; 
    background-size: cover; 
    margin-bottom: 80px;
`