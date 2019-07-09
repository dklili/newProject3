
const defaultState = {
    data: [],
    count: 0

}


export default (state = defaultState, action) => {
    switch (action.type) {
        case 'statusChange':
            return { ...state, test: action.status }
        case 'storeOrderData':
            return { ...state, data: action.data, count: action.count }
        default:
            return state;
    }
}
