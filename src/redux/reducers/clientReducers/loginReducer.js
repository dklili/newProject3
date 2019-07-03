
const defaultState = {
    email: '',
    password: '',
    message: '',
    success: false,
    login: 'login',
    userID: ''
}


export default (state = defaultState, action) => {
    switch (action.type) {
        case 'handleLoginValueChange':
            return { ...state, [action.name]: action.value }
        case 'loginAleartMessage':
            return { ...state, message: action.value }
        case 'loginSuccess':
            return { ...state, success: action.value }
        case 'loginTitle':
            return {
                ...state, login: action.value, success: action.success,
                password: action.password, emial: action.email
            }
        case 'setUserId':
            return { ...state, userID: action.value }
        default:
            return state;
    }
}
