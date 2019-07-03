import { connect } from 'react-redux';
import Login from './Login';
import * as actionCreater from '../../../redux/actionCreators/clientActions/loginActions';


const mapStateToProps = (state, ownProps) => ({
    email: state.loginReducer.email,
    password: state.loginReducer.password,
    message: state.loginReducer.message,
    success: state.loginReducer.success
})

const mapDispatchToProps = (dispatch, ownProps) => ({
    handleInputValue: (e) => {
        const value = e.target.value;
        const name = e.target.name;
        dispatch(actionCreater.handleLoginValueChange(value, name));
    },
    handleSubmit: (email, password) => {
        if (email === '') {
            const message = 'Please Enter You Email'
            dispatch(actionCreater.aleartMessage(message));
        }
        else if (password === '') {
            const message = 'Please Enter You Password'
            dispatch(actionCreater.aleartMessage(message));
        }
        else dispatch(actionCreater.handleLogin(email, password))

    }

})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Login)
