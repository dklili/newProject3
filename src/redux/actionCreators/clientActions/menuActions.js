import axios from 'axios';
import { domain } from '../../../setDomain';
import { handleOrderInfo } from './orderActions';

export const storeProductDetail = (value) => ({
    type: 'storeProductDetail',
    value
});

export const handleProductDetail = () => {
    return dispatch => {
        axios.get(`${domain}/products`)
            .then(function (res) {
                const data = res.data;
                dispatch(storeProductDetail(data));

            })
            .catch(function (error) {
            });

    }
}

export const handleOrderData = (id) => {
    return dispatch => {
        axios.get(`${domain}/products/${id}`)
            .then(function (res) {
                dispatch(handleOrderInfo(res.data.product))

            })
            .catch(function (error) {
            });
    }
}