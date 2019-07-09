import axios from 'axios';
import { domain } from '../../../setDomain';


export const storeCoffeeDetail = (value, coffeeNumber) => ({
    type: 'storeCoffeeDetail',
    value,
    coffeeNumber
});

export const storeUpdateCoffeeDetail = (value) => ({
    type: 'storeUpdateCoffeeDetail',
    value
});

export const getCoffeList = () => {
    return dispatch => {
        axios.get(`${domain}/products`)
            .then(function (res) {
                const data = res.data;
                const coffeeNumber = res.data.count
                dispatch(storeCoffeeDetail(data, coffeeNumber));

            })
            .catch(function (error) {
            });

    }
};

export const delectCoffeed = (id) => {
    return dispatch => {
        axios.delete(`${domain}/products/${id}`)
            .then(function (res) {
                dispatch(getCoffeList())

            })
            .catch(function (error) {
            });

    }
};

export const updateCoffee = (id) => {
    return dispatch => {
        axios.get(`${domain}/products/${id}`)
            .then(function (res) {
                const data = res.data;
                dispatch(storeUpdateCoffeeDetail(data))
                console.log(res)
            })
            .catch(function (error) {
            });

    }
}