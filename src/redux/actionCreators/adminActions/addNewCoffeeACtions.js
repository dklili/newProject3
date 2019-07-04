import { domain } from '../../../setDomain';
import axios from 'axios';

export const storeImg = (value) => ({
    type: 'storeImg',
    value
});

export const handleInputvalue = (name, value) => ({
    type: 'changeAddCoffeeInputValue',
    name,
    value
})

export const handleAddCoffeeMessage = (value) => ({
    type: 'handleAddCoffeeMessage',
    value
})

export const handleSuccessAddCoffee = (value) => ({
    type: 'handleSuccessAddCoffee',
    value
})

export const createNewCoffee = (coffeeName, coffeePrice, imageUrl) => {
    return dispatch => {
        const formData = new FormData();
        formData.append("name", coffeeName);
        formData.append("price", coffeePrice)
        formData.append("productImage", imageUrl)
        axios.post(`${domain}/products`, formData, {
            headers: {
                "Content-Type": "multipart/form-data"
            }
        })
            .then(function (res) {
                const value = true
                dispatch(handleSuccessAddCoffee(value))
            })
            .catch(function (error) {
                if (error.response.request.status === 500) {
                    const message = 'Please Enter The Correct Price'
                    dispatch(handleAddCoffeeMessage(message))
                }
            });
    }
}