import { combineReducers } from 'redux';

// import admin reducer
import bookingManagementReducer from './reducers/adminReducers/bookingManagementReducer';
import adminLoginReducer from './reducers/adminReducers/adminLoginReducer';
import coffeeManagementReducer from './reducers/adminReducers/coffeeManagementReducer';
import addNewCoffeeReducer from './reducers/adminReducers/addNewCoffeeReducer';
import updateCoffeeReducer from './reducers/adminReducers/updateCoffeeReducer';
import adminCustomerReducer from './reducers/adminReducers/adminCustomerReducer';

// import customer reducer
import singupReducer from './reducers/clientReducers/singUpReducer';
import loginReducer from './reducers/clientReducers/loginReducer';
import menuReducer from './reducers/clientReducers/menuReducer';
import orderReducer from './reducers/clientReducers/orderReducer';
import cartReducer from './reducers/clientReducers/cartReducer';


const reducer = combineReducers({
    bookingManagementReducer: bookingManagementReducer,
    singupReducer: singupReducer,
    loginReducer: loginReducer,
    menuReducer: menuReducer,
    orderReducer: orderReducer,
    adminLoginReducer: adminLoginReducer,
    coffeeManagementReducer: coffeeManagementReducer,
    addNewCoffeeReducer: addNewCoffeeReducer,
    updateCoffeeReducer: updateCoffeeReducer,
    cartReducer: cartReducer,
    adminCustomerReducer: adminCustomerReducer

});

export default reducer;