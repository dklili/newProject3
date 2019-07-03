import { combineReducers } from 'redux';
import bookingManagementReducer from './reducers/adminReducers/bookingManagementReducer';
import singupReducer from './reducers/clientReducers/singUpReducer';
import loginReducer from './reducers/clientReducers/loginReducer';
import menuReducer from './reducers/clientReducers/menuReducer';


const reducer = combineReducers({
    bookingManagementReducer: bookingManagementReducer,
    singupReducer: singupReducer,
    loginReducer: loginReducer,
    menuReducer: menuReducer

});

export default reducer;