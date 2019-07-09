
const defaultState = {
    number: 1,
    name: '',
    price: '',
    productID: '',
    imageUrl: '',
    successCreateOrder: false
}


export default (state = defaultState, action) => {
    switch (action.type) {
        case 'handleNewNumber':
            return { ...state, number: action.value }
        case 'handleOrderInfo':
            return {
                ...state, name: action.value.name, price: action.value.price,
                productID: action.value._id,
                imageUrl: action.value.productImage
            }
        case 'handleSuccessCreateOrder':
            return { ...state, successCreateOrder: action.value }
        default:
            return state;
    }
}
