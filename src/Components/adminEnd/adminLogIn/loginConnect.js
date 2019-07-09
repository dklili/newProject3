import { connect } from 'react-redux';
import LoginPage from './Login';
import * as actionCreater from '../../../redux/actionCreators/adminActions/adminLoginActions';


const mapStateToProps = (state, ownProps) => ({
    password: state.adminLoginReducer.password,
    username: state.adminLoginReducer.username,
    message: state.adminLoginReducer.message,
    loginStatus: state.adminLoginReducer.loginStatus
})
const mapDispatchToProps = (dispatch, ownProps) => ({
    handleInputChange: (e) => {
        const name = e.target.name;
        const value = e.target.value;
        dispatch(actionCreater.storeInputValue(name, value));

    },
    handleLoginVlidation: (username, password) => {
        if (username === '') {
            const message = 'Plese Enter Your Username';
            dispatch(actionCreater.handleLoginMessage(message))
        }
        else if (password === '') {
            const message = 'Plese Enter Your Password';
            dispatch(actionCreater.handleLoginMessage(message))
        }
        else if (username !== 'admin' || password !== 'admin') {
            const message = 'Invalid Username Or Password';
            dispatch(actionCreater.handleLoginMessage(message))
        }
        else {
            const loginStatus = true;
            const loginToken = 'loginTokenTrue'
            sessionStorage.setItem('admin', loginToken);
            dispatch(actionCreater.handleLoginStatus(loginStatus));
        }
    }
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(LoginPage)
