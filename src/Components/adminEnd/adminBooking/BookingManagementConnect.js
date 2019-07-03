import { connect } from 'react-redux';
import BookingManagement from './BookingManagement';
import * as actionCreater from '../../../redux/actionCreators/adminActions/bookingManagementActions';

const mapStateToProps = (state, ownProps) => ({
    booking: state.bookingManagementReducer.booking,
    test: state.bookingManagementReducer.test
})

const mapDispatchToProps = (dispatch, ownProps) => ({
    handleStatusChange: (id) => {
        const status = 'Finish';
        const itemId = id
        dispatch(actionCreater.statusChange(status, itemId))
    }
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(BookingManagement)
