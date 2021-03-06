import React, { Component } from 'react';
import { Route, BrowserRouter as Router, Switch, Redirect } from "react-router-dom";
import { connect } from 'react-redux';

// Admin router component import part
import AdminLogin from './Components/adminEnd/adminLogIn/index';
import AdminHomePage from './Components/adminEnd/adminHomePage/index';
import AdminBookingManagement from './Components/adminEnd/adminBooking/index';
import AdminCustomerManagement from './Components/adminEnd/adminCustomer/index';
import AdminAddNewCoffee from './Components/adminEnd/adminAddNewCoffee/index';
import AdminCoffeeManagement from './Components/adminEnd/adminCoffeeManagement/index';
import AdminUpdateCoffee from './Components/adminEnd/updateCoffee/index';

// Client Router Component Import Part
import ClientHomePage from './Components/clientEnd/home/index';
import ClientMenu from './Components/clientEnd/menu/index';
import ClentAboutUs from './Components/clientEnd/about/index';
import ClientContact from './Components/clientEnd/contact/index';
import ClientLogin from './Components/clientEnd/logIn/index';
import ClientCart from './Components/clientEnd/cart/index';
import ClientSingup from './Components/clientEnd/singup/index';
import ClientOrder from './Components/clientEnd/order/index';

class HandAppRouter extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path='/admin/login' component={AdminLogin}></Route>
          <Route
            path='/admin'
            render={() => {
              if (sessionStorage.getItem('admin') === null) {
                return (
                  <Redirect to='/admin/login' />
                )
              }
              else {
                return (
                  <div>
                    <Route path='/admin' exact component={AdminHomePage} />
                    <Route path='/admin/booking' component={AdminBookingManagement} />
                    <Route path='/admin/customer' component={AdminCustomerManagement} />
                    <Route path='/admin/coffee' exact component={AdminCoffeeManagement} />
                    <Route path='/admin/coffee/addCoffee' component={AdminAddNewCoffee} />
                    <Route path='/admin/coffee/updateCoffee' component={AdminUpdateCoffee} />
                  </div>
                )
              }
            }
            }
          />
          <Route
            path='/'
            render={() => (
              <div>
                <Route path='/' exact component={ClientHomePage} />
                <Route path='/menu' component={ClientMenu} />
                <Route path='/aboutus' component={ClentAboutUs} />
                <Route path='/contact' component={ClientContact} />
                <Route path='/login' component={ClientLogin} />
                <Route path='/cart' component={ClientCart} />
                <Route path='/signup' component={ClientSingup} />
                <Route path='/order' component={ClientOrder} />
              </div>
            )}
          />
        </Switch>
      </Router>

    )
  }
}
const mapStateToProps = (state, ownProps) => ({
  loginStatus: state.adminLoginReducer.loginStatus
})

const HandApp = connect(
  mapStateToProps
)(HandAppRouter)


export default HandApp;
