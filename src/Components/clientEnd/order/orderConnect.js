import { connect } from 'react-redux';
import Order from './Order';
import * as actionCreater from '../../../redux/actionCreators/clientActions/orderActions';


const mapStateToProps = (state, ownProps) => ({
    number: state.orderReducer.number,
    name: state.orderReducer.name,
    price: state.orderReducer.price,
    imageUrl: state.orderReducer.imageUrl
})

const mapDispatchToProps = (dispatch, ownProps) => ({
    handleOrderIncrease: (currentNumber) => {
        const newNumber = currentNumber + 1;
        dispatch(actionCreater.handleNewNumber(newNumber));
    },
    handleOrderDecrease: (currentNumber) => {
        if (currentNumber === 1) {
            const newNumber = currentNumber;
            dispatch(actionCreater.handleNewNumber(newNumber));
        }
        else {
            const newNumber = currentNumber - 1;
            dispatch(actionCreater.handleNewNumber(newNumber));
        }

    }
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Order)
