import styled from 'styled-components';
import Button from 'react-bootstrap/Button';

export const BlockBtn = styled(Button)`
    width: 200px;
`
export const TalbeHeader = styled.th`
    width: ${(props) => props.headerWidth};
`
export const TableData = styled.td`
    height: 50px;
    line-height:50px;
`