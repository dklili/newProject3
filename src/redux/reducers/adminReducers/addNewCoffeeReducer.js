
const defaultState = {
    coffeeName: '',
    coffeePrice: '',
    imageUrl: '',
    message: '',
    successAddCoffee: false
}


export default (state = defaultState, action) => {
    switch (action.type) {
        case 'storeImg':
            return { ...state, imageUrl: action.value }
        case 'changeAddCoffeeInputValue':
            return { ...state, [action.name]: action.value }
        case 'handleAddCoffeeMessage':
            return { ...state, message: action.value }
        case 'handleSuccessAddCoffee':
            return { ...state, successAddCoffee: action.value }
        case 'handleClearAddCoffeeData':
            return { ...state, coffeeName: action.data.name, coffeePrice: action.data.price }
        default:
            return state;
    }
}
