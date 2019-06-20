import styled from 'styled-components';
import Button from 'react-bootstrap/Button';

export const BtnWrapper = styled.div`
    border-bottom: 1px solid black;
`
export const TalbeHeader = styled.th`
    width: ${(props) => props.headerWidth};
`
export const TableData = styled.td`
    height: 50px;
    line-height:50px;
`
export const AddBtn = styled(Button)`
    width: 150px;
    margin-top: 20px;
    margin-bottom: 10px;
`
export const EditBtn = styled(Button)`
    width: 150px;
`