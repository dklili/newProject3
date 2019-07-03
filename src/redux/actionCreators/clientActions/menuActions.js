import axios from 'axios';
import { domain } from '../../../setDomain';

export const storeProductDetail = (value) => ({
    type: 'storeProductDetail',
    value
});

export const handleProductDetail = () => {
    return dispatch => {
        axios.get(`${domain}/products`, {
        })
            .then(function (res) {
                const data = res.data;
                dispatch(storeProductDetail(data));
                console.log(res);

            })
            .catch(function (error) {
                console.log(error)
            });

    }
}