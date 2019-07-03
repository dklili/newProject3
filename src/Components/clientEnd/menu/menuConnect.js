import { connect } from 'react-redux';
import Menu from './Menu';


const mapStateToProps = (state, ownProps) => ({
    product: state.menuReducer.product
})

export default connect(
    mapStateToProps
)(Menu)
