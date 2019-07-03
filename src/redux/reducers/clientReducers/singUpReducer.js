
const defaultState = {
    email: '',
    password: '',
    passwordValid: '',
    message: '',
    success: false
}


export default (state = defaultState, action) => {
    switch (action.type) {
        case 'handleValueChange':
            return { ...state, [action.name]: action.value }
        case 'aleartMessage':
            return { ...state, message: action.value }
        case 'successCreate':
            return { ...state, success: action.value }
        default:
            return state;
    }
}
