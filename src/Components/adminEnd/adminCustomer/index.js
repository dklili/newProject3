import React, { Component } from 'react';
import { connect } from 'react-redux';
import CustomerManagement from './CustomerManagement';
import store from '../../../redux/index';
import * as actionCreators from '../../../redux/actionCreators/adminActions/adminCustomerActions';

class AdminCustomerManagement extends Component {
    componentDidMount() {
        store.dispatch(actionCreators.getUser())
    }
    render() {
        return (
            <CustomerManagement user={this.props.user}
                handleDeleteUser={this.props.handleDeleteUser}
            ></CustomerManagement>
        )
    }
}

const mapStateToProps = (state, ownProps) => ({
    user: state.adminCustomerReducer.user
})
const mapDispatchToProps = (dispatch, ownProps) => ({
    handleDeleteUser: (id) => {
        const r = window.confirm("Are You Sure You Want To Delete This Customer");
        if (r === true) {
            dispatch(actionCreators.deleteUser(id))
        }
    }
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(AdminCustomerManagement);