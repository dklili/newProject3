import axios from 'axios';
import { domain } from '../../../setDomain';

export const handleValueChange = (value, name) => ({
    type: 'handleValueChange',
    value,
    name
});
export const successCreate = (value) => ({
    type: 'successCreate',
    value
});
export const aleartMessage = (value) => ({
    type: 'aleartMessage',
    value
})

export const createNewUser = (email, password) => {
    return dispatch => {
        axios.post(`${domain}/user/signup`, {
            email: email,
            password: password
        })
            .then(function (res) {
                const success = true
                const message = ''
                dispatch(successCreate(success));
                dispatch(aleartMessage(message));
                console.log(res)

            })
            .catch(function (error) {
                if (error.response.request.status === 409) {
                    const message = 'Email Already Being Used'
                    dispatch(aleartMessage(message));
                }
                if (error.response.request.status === 500) {
                    const message = 'Please Enter The Correct Email Address'
                    dispatch(aleartMessage(message));
                }
            });

    }
}