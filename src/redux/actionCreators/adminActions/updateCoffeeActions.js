import axios from 'axios';
import { domain } from '../../../setDomain';
export const updateImg = (value) => ({
    type: 'updateImg',
    value
});

export const valueChange = (name, value) => ({
    type: 'valueChange',
    name,
    value
});
export const handleUpdateCoffeeMessage = (value) => ({
    type: 'handleUpdateCoffeeMessage',
    value
});
export const handleSuccessUpdateCoffee = (value) => ({
    type: 'handleSuccessUpdateCoffee',
    value
})
export const upDateCoffee = (coffeeName, coffeePrice, imageUrl, id) => {
    return dispatch => {
        const formData = new FormData();
        formData.append("name", coffeeName);
        formData.append("price", coffeePrice)
        formData.append("productImage", imageUrl)
        axios.put(`${domain}/products/${id}`, formData, {
            headers: {
                "Content-Type": "multipart/form-data"
            }
        })
            .then(function (res) {
                console.log(res)
                const value = true
                dispatch(handleSuccessUpdateCoffee(value))
            })
            .catch(function (error) {
                if (error.response.request.status === 500) {
                    // const message = 'Please Enter The Correct Price'
                    // dispatch(handleUpdateCoffeeMessage(message))
                }
            });
    }
}