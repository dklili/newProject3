import axios from 'axios';
import { domain } from '../../../setDomain';


export const storeCoffeeDetail = (value) => ({
    type: 'storeCoffeeDetail',
    value
})

export const getCoffeList = () => {
    return dispatch => {
        axios.get(`${domain}/products`)
            .then(function (res) {
                const data = res.data;
                dispatch(storeCoffeeDetail(data));

            })
            .catch(function (error) {
            });

    }
}

export const delectCoffeed = (id) => {
    return dispatch => {
        axios.delete(`${domain}/products/${id}`)
            .then(function (res) {
                dispatch(getCoffeList())

            })
            .catch(function (error) {
            });

    }
}