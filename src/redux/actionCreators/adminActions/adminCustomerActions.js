import axios from 'axios';
import { domain } from '../../../setDomain';



export const storeUserDetail = (value, count) => ({
    type: 'storeUserDetail',
    value,
    count
})
export const getUser = () => {
    return dispatch => {
        axios.get(`${domain}/user`)
            .then(function (res) {
                const user = res.data.product;
                const userNumber = res.data.count
                dispatch(storeUserDetail(user, userNumber));
            })
            .catch(function (error) {
            });

    }
};

export const deleteUser = (id) => {
    return dispatch => {
        axios.delete(`${domain}/user/${id}`)
            .then(function (res) {
                dispatch(getUser());
            })
            .catch(function (error) {
            });

    }
}