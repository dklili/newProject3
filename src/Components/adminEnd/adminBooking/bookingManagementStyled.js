import styled from 'styled-components';
import Button from 'react-bootstrap/Button';

export const ReadyBtn = styled(Button)`
    width: 100px;
`
export const TalbeHeader = styled.th`
    width: ${(props) => props.headerWidth};
`
export const TableData = styled.td`
    height: 50px;
    line-height:50px;
`