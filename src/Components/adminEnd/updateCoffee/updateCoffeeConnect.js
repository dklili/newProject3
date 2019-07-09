import { connect } from 'react-redux';
import UpdateCoffee from './UpdateCoffee';
import * as actionCreater from '../../../redux/actionCreators/adminActions/updateCoffeeActions';

const mapStateToProps = (state, ownProps) => ({
    coffeeName: state.updateCoffeeReducer.coffeeName,
    coffeePrice: state.updateCoffeeReducer.coffeePrice,
    imageUrl: state.updateCoffeeReducer.imageUrl,
    message: state.updateCoffeeReducer.message,
    id: state.updateCoffeeReducer.id,
    successUpdate: state.updateCoffeeReducer.successUpdate
})

const mapDispatchToProps = (dispatch, ownProps) => ({
    handleValueChange: (e) => {
        const name = e.target.name;
        const value = e.target.value;
        dispatch(actionCreater.valueChange(name, value))
    },
    handleUploadFile: (e) => {
        const img = e.target.files[0]
        dispatch(actionCreater.updateImg(img))
    },
    handleUpdateCoffee: (coffeeName, coffeePrice, imageUrl, id) => {
        if (coffeeName === '') {
            const message = 'Please Enter Coffee Name';
            dispatch(actionCreater.handleUpdateCoffeeMessage(message))

        }
        else if (coffeePrice === '') {
            const message = 'Please Enter Coffee Price';
            dispatch(actionCreater.handleUpdateCoffeeMessage(message))

        }
        else if (imageUrl === '') {
            const message = 'Please Chooce the Coffee Image';
            dispatch(actionCreater.handleUpdateCoffeeMessage(message))
        }
        else {
            dispatch(actionCreater.upDateCoffee(coffeeName, coffeePrice, imageUrl, id))
        }
    }

})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(UpdateCoffee)
