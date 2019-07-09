
const defaultState = {
    user: [],
    userNumber: 0
}


export default (state = defaultState, action) => {
    switch (action.type) {
        case 'storeUserDetail':
            return { ...state, user: action.value, userNumber: action.count }
        default:
            return state;
    }
}
