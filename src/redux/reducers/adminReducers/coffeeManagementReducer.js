
const defaultState = {
    data: [],
    coffeeNumber: 0

}


export default (state = defaultState, action) => {
    switch (action.type) {
        case 'storeCoffeeDetail':
            return {
                ...state, data: action.value.product, coffeeNumber: action.coffeeNumber
            }
        default:
            return state;
    }
}
