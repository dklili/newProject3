import axios from 'axios';
import { domain } from '.././../../setDomain';


export const handleSaveEachUserData = (data) => ({
    type: 'handleSaveEachUserData',
    data
})

export const handleClearnOrderList = (value, count) => ({
    type: 'handleClearnOrderList',
    value,
    count
})

export const handleEachUserOrderDetail = (userId) => {
    return dispatch => {
        axios.get(`${domain}/orders/userById/${userId}`, {
        })
            .then(function (res) {
                console.log(res)
                dispatch(handleSaveEachUserData(res.data))

            })
            .catch(function (error) {
            });

    }
}