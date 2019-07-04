import { connect } from 'react-redux';
import UpdateCoffee from './UpdateCoffee';
import * as actionCreater from '../../../redux/actionCreators/adminActions/updateCoffeeActions';

const mapStateToProps = (state, ownProps) => ({
    coffeeName: state.addNewCoffeeReducer.coffeeName,
    coffeePrice: state.addNewCoffeeReducer.coffeePrice,
    imageUrl: state.addNewCoffeeReducer.imageUrl,
    message: state.addNewCoffeeReducer.message,
    successAddCoffee: state.addNewCoffeeReducer.successAddCoffee
})

const mapDispatchToProps = (dispatch, ownProps) => ({
    handleUploadFile: (e) => {
        const img = e.target.files[0]
        dispatch(actionCreater.storeImg(img))
    },
    handleInputChange: (e) => {
        const name = e.target.name;
        const value = e.target.value;
        dispatch(actionCreater.handleInputvalue(name, value))
    },
    handleCreateNewCoffee: (coffeeName, coffeePrice, imageUrl) => {
        if (coffeeName === '') {
            const message = 'Please Enter Coffee Name';
            dispatch(actionCreater.handleAddCoffeeMessage(message))

        }
        else if (coffeePrice === '') {
            const message = 'Please Enter Coffee Price';
            dispatch(actionCreater.handleAddCoffeeMessage(message))

        }
        else if (imageUrl === '') {
            const message = 'Please Chooce the Coffee Image';
            dispatch(actionCreater.handleAddCoffeeMessage(message))
        }
        else {
            dispatch(actionCreater.createNewCoffee(coffeeName, coffeePrice, imageUrl))
        }
    }
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(UpdateCoffee)
