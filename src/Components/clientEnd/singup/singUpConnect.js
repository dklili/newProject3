import { connect } from 'react-redux';
import Singup from './Singup';
import * as actionCreater from '../../../redux/actionCreators/clientActions/singUpActions';


const mapStateToProps = (state, ownProps) => ({
    email: state.singupReducer.email,
    password: state.singupReducer.password,
    passwordValid: state.singupReducer.passwordValid,
    message: state.singupReducer.message,
    success: state.singupReducer.success
})

const mapDispatchToProps = (dispatch, ownProps) => ({
    handleInputValue: (e) => {
        const value = e.target.value;
        const name = e.target.name;
        dispatch(actionCreater.handleValueChange(value, name));
    },
    handleCreateNewUser: (email, password, passwordValid) => {
        if (email === '') {
            const message = 'Please Enter your Email Address'
            dispatch(actionCreater.aleartMessage(message))
        }
        else if (password === '') {
            const message = 'Please Enter your Password'
            dispatch(actionCreater.aleartMessage(message))
        }
        else if (password !== passwordValid) {
            const message = 'Please Enter the Same Password'
            dispatch(actionCreater.aleartMessage(message))
        }
        else if (password.length < 6) {
            const message = 'Password No Less Than 6 Characters'
            dispatch(actionCreater.aleartMessage(message))
        }
        else {
            dispatch(actionCreater.createNewUser(email, password, passwordValid))
        }

    }

})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Singup)
