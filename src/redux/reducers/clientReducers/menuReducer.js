
const defaultState = {
    product: []
}


export default (state = defaultState, action) => {
    switch (action.type) {
        case 'storeProductDetail':
            return { ...state, product: action.value.product }
        default:
            return state;
    }
}
