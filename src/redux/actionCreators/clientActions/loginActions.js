import axios from 'axios';
import { domain } from '../../../setDomain';

export const handleLoginValueChange = (value, name) => ({
    type: 'handleLoginValueChange',
    value,
    name
});
export const successLogin = (value) => ({
    type: 'loginSuccess',
    value
});
export const aleartMessage = (value) => ({
    type: 'loginAleartMessage',
    value
});
export const logiTitle = (value) => ({
    type: 'loginTitle',
    value
});
export const setUserId = (value) => ({
    type: 'setUserId',
    value
})

export const handleLogin = (email, password) => {
    return async dispatch => {
        await axios.post(`${domain}/user/login`, {
            email: email,
            password: password
        })
            .then(function (res) {
                const success = true;
                const message = '';
                const data = res.data;
                const loginTitleValue = 'Logout';
                const userId = data.userId
                dispatch(logiTitle(loginTitleValue));
                dispatch(successLogin(success));
                dispatch(aleartMessage(message));
                dispatch(setUserId(userId));
                localStorage.setItem(data.userId, data.token);
                console.log(localStorage.getItem(data.userId));

            })
            .catch(function (error) {
                const message = 'Invalid Email Or Password'
                dispatch(aleartMessage(message));
            });

    }
}