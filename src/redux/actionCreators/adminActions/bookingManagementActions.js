import { domain } from '../../../setDomain';
import axios from 'axios';

export const statusChange = (status, itemId) => ({
    type: 'statusChange',
    status,
    itemId
});

export const storeOrderData = (data, count) => ({
    type: 'storeOrderData',
    data,
    count
})

export const getOrderList = () => {
    return dispatch => {
        axios.get(`${domain}/orders`)
            .then(function (res) {
                const data = res.data.orders;
                const count = res.data.count
                dispatch(storeOrderData(data, count));
            })
            .catch(function (error) {
            });

    }
};

export const bookingStatusChange = (state, id) => {
    return dispatch => {
        axios.put(`${domain}/orders/${id}`, {
            status: state
        })
            .then(function (res) {
                dispatch(getOrderList());
            })
            .catch(function (error) {
                console.log(error)
            });

    }
};

export const deleteOrder = (id) => {
    return dispatch => {
        axios.delete(`${domain}/orders/${id}`)
            .then(function (res) {
                dispatch(getOrderList());
            })
            .catch(function (error) {
                console.log(error)
            });

    }
};