import { connect } from 'react-redux';
import CoffeeManagement from './CoffeeManagement';
import * as actionCreater from '../../../redux/actionCreators/adminActions/coffeeManagementActions';


const mapStateToProps = (state, ownProps) => ({
    data: state.coffeeManagementReducer.data
})
const mapDispatchToProps = (dispatch, ownProps) => ({
    handleDeleteCoffee: (id, name) => {
        const myFunction = () => {
            const person = prompt("Are You Sure You Want To Delete This Item?", `Please Enter The Item Name To confrime Delete`);
            if (person === name) {
                dispatch(actionCreater.delectCoffeed(id));
            }
        }
        myFunction();
    },
    handleUpdateCoffee: (id) => {
        dispatch(actionCreater.updateCoffee(id))
    }
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CoffeeManagement)
