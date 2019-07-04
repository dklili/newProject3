
const defaultState = {
    data: []

}


export default (state = defaultState, action) => {
    switch (action.type) {
        case 'storeCoffeeDetail':
            return {
                ...state, data: action.value.product
            }
        default:
            return state;
    }
}
