import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { MdAssignmentTurnedIn, MdAssignmentInd, MdShoppingCart } from 'react-icons/md';

export const SectionWrapper = styled.div`
    height: 250px;
    background-color: ${props => props.wrapperColor};
    border:1px solid gray;
    margin:auto;
    margin-top: 80px;
    border-radius:10px;
    transition: all 0.3s linear;
    cursor: pointer;
    :hover{
        margin-top: 70px;
        box-shadow:8px 8px 3px 1px rgba(0, 0, 0, 0.2);
        text-decoration:none;
    }
`

export const IcoWrapper = styled.div`
    margin:auto;
    width: 200px;
    text-align:center;
    margin-top: 30px;
`
export const BookingIcon = styled(MdAssignmentTurnedIn)`
    width: 90px;
    height: 90px;
    color: black;
`
export const CustomerIcon = styled(MdAssignmentInd)`
    width: 90px;
    height: 90px;
    color: black;
`
export const CoffeeIcon = styled(MdShoppingCart)`
    width: 90px;
    height: 90px;
    color: black;
`
export const CommonTitle = styled.h2`
    font-size:20px;
    text-align:center;
    color:black;
`
export const CommonDescribe = styled.h3`
    font-size:25px;
    margin-top:25px;
    color:black;
    text-align:center;
    margin-bottom: 30px;
`
export const RouterLink = styled(Link)`
    :hover{
        text-decoration:none;
    }
`