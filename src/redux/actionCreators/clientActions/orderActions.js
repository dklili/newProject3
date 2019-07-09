import axios from 'axios';
import { domain } from '../../../setDomain';
export const handleNewNumber = (value) => ({
    type: 'handleNewNumber',
    value
});

export const handleOrderInfo = (value) => ({
    type: 'handleOrderInfo',
    value
});

export const handleSuccessCreateOrder = (value) => ({
    type: 'handleSuccessCreateOrder',
    value
});

export const submiteOrder = (number, userID, productID) => {
    return dispatch => {
        axios.post(`${domain}/orders`,
            {
                quantity: number,
                productId: productID,
                userId: userID
            })
            .then(function (res) {
                const message = true;
                dispatch(handleSuccessCreateOrder(message))

            })
            .catch(function (error) {
                console.log(error)
            });

    }
}