import React from 'react';

import { CoffeeItem, SubTitle, CoffeePrice, Line } from './coffeeItemStyled';

function ShareCoffeeItem(props) {
    return (
        <div>
            <CoffeeItem coffeeImg={props.coffeeImg}></CoffeeItem>
            <SubTitle fontSize='18px' color={'gray'}>
                {props.coffeeName}
            </SubTitle>
            <Line width={'50px'}></Line>
            <CoffeePrice>
                {props.coffeePrice}
            </CoffeePrice>
        </div>
    )
}

export default ShareCoffeeItem;