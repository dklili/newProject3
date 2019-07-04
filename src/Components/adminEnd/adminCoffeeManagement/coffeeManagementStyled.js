import styled from 'styled-components';
import Button from 'react-bootstrap/Button';

export const BtnWrapper = styled.div`
    border-bottom: 1px solid black;
`
export const TalbeHeader = styled.th`
    width: ${(props) => props.headerWidth};
`
export const TableData = styled.td`
`
export const ProductImage = styled.div`
    height: 150px;
    width: 150px;
    background-image: url('${props => props.url}');
    background-repeat:no-repeat;
    background-size: contain;
    background-position:center;
`
export const AddBtn = styled(Button)`
    width: 150px;
    margin-top: 20px;
    margin-bottom: 10px;
`
export const EditBtn = styled(Button)`
    width: 150px;
    margin-right: 20px;
`
export const DelectBtn = styled(Button)`
    width: 150px;
    margin-right: 20px;
`