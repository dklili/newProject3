
const defaultState = {
    coffeeName: '',
    coffeePrice: 0,
    imageUrl: '',
    id: '',
    message: '',
    successUpdate: false,

}


export default (state = defaultState, action) => {
    switch (action.type) {
        case 'storeUpdateCoffeeDetail':
            return {
                ...state, coffeeName: action.value.product.name, coffeePrice: action.value.product.price,
                id: action.value.product._id
            }
        case 'valueChange':
            return {
                ...state, [action.name]: action.value
            }
        case 'updateImg':
            return {
                ...state, imageUrl: action.value
            }
        case 'handleUpdateCoffeeMessage':
            return {
                ...state, message: action.value
            }
        case 'handleSuccessUpdateCoffee':
            return {
                ...state, successUpdate: action.value
            }
        default:
            return state;
    }
}
