
const defaultState = {
    username: '',
    password: '',
    message: '',
    loginStatus: false
}


export default (state = defaultState, action) => {
    switch (action.type) {
        case 'storeInputValue':
            return { ...state, [action.name]: action.value }
        case 'handleLoginMessage':
            return { ...state, message: action.value }
        case 'handleLoginStatus':
            return { ...state, loginStatus: action.value }
        default:
            return state;
    }
}
