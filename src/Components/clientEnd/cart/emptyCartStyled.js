import styled from 'styled-components';
import { MdRemoveShoppingCart } from "react-icons/md";

export const EmptCartWrapper = styled.div`
    width: 200px;
    height: 530px;
    color: gray;
    margin:auto;
    margin-top: 300px;

`
export const EmptyCartTtitle = styled.h1`
    color:gray;
    font-size:80px;
    text-align:center;
`
export const EmptyIco = styled(MdRemoveShoppingCart)`
    margin:auto;
    font-size:300px;
    color: gray;
`