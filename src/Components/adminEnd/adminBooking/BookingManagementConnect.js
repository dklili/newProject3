import { connect } from 'react-redux';
import BookingManagement from './BookingManagement';
import * as actionCreater from '../../../redux/actionCreators/adminActions/bookingManagementActions';

const mapStateToProps = (state, ownProps) => ({
    data: state.bookingManagementReducer.data
})

const mapDispatchToProps = (dispatch, ownProps) => ({
    handleStatusChange: (id) => {
        const status = 'Finish';
        const itemId = id
        dispatch(actionCreater.statusChange(status, itemId))
    },
    handleBookingStatusChange: (status, id) => {
        if (status === 'Pending') {
            const state = 'Ready';
            dispatch(actionCreater.bookingStatusChange(state, id));
        }
        else if (status === 'Ready') {
            const state = 'Collected';
            dispatch(actionCreater.bookingStatusChange(state, id));
        }
        else if (status === 'Collected') {
            const r = window.confirm("Are You Sure You Want To Delete This Booking");
            if (r === true) {
                dispatch(actionCreater.deleteOrder(id));
            }
        }
    }
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(BookingManagement)
