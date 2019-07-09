import { connect } from 'react-redux';
import Menu from './Menu';
import * as actionCreater from '../../../redux/actionCreators/clientActions/menuActions';


const mapStateToProps = (state, ownProps) => ({
    product: state.menuReducer.product
})
const mapDispatchToProps = (dispatch, ownProps) => ({
    handleAddToCart: (id) => {
        dispatch(actionCreater.handleOrderData(id))
    }
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Menu)
