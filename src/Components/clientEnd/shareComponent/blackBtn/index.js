import React from 'react';
import { Link } from 'react-router-dom';

import { BlackBtn, BtnWrapper } from './blackBtnStyled';



function ShareBlackBtn(props) {
    return (
        <BtnWrapper>
            <Link to={props.btnLink}>
                <BlackBtn>{props.btnTitle}</BlackBtn>
            </Link>
        </BtnWrapper>
    )
}

export default ShareBlackBtn;