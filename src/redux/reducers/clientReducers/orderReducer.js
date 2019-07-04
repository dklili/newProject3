
const defaultState = {
    number: 1,
    name: '',
    price: '',
    imageUrl: ''
}


export default (state = defaultState, action) => {
    switch (action.type) {
        case 'handleNewNumber':
            return { ...state, number: action.value }
        case 'handleOrderInfo':
            return {
                ...state, name: action.value.name, price: action.value.price,
                imageUrl: action.value.productImage
            }
        default:
            return state;
    }
}
