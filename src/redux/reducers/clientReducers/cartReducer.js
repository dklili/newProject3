
const defaultState = {
    count: 0,
    orders: []
}


export default (state = defaultState, action) => {
    switch (action.type) {
        case 'handleSaveEachUserData':
            return { ...state, count: action.data.count, orders: action.data.orders }
        case 'handleClearnOrderList':
            return { ...state, orders: action.value, count: action.count }

        default:
            return state;
    }
}
