import styled from 'styled-components';
import Button from 'react-bootstrap/Button';

export const ReadyBtn = styled(Button)`
    width: 100px;
`
export const TalbeHeader = styled.th`
    width: ${(props) => props.headerWidth};
`
export const PandingTableData = styled.td`
    height: 50px;
    line-height:50px;
    background-color: rgb(254,243,205);
`
export const FinishTableData = styled.td`
    height: 50px;
    line-height:50px;
    background-color: rgb(226,227,229);
`
export const ReadyTableData = styled.td`
    height: 50px;
    line-height:50px;
    background-color: rgb(212,237,218);
`