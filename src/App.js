import React, { Component } from 'react';
import './App.css';
import ShelterList from './shelters/ShelterList';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import NavBar from './NavBar';
import PurchaseForm from './voucherPurchase/PurchaseForm.js';
import Confirmation from './voucherPurchase/Confirmation.js'
import { MuiThemeProvider } from '@material-ui/core/styles';
import theme from './themeSetUp';
import Redemption from './redemption/Redemption';
import LoginSuccess from './authorisation/LoginSuccess';
import auth from './services/auth';

class App extends Component {

  requireAuth() {
    const authToken = auth.getAccessToken()
    console.log(authToken)
    if (!authToken) {
      auth.login()
      console.log(authToken)
    }
    console.log(authToken)
    return <Redemption />
  }

  render() {
    return (
      <div className="App">
        <MuiThemeProvider theme={theme}>
          <BrowserRouter>
          <NavBar />
            <Switch>
              <div className="main-page">
                <Route exact path='/' component={ShelterList}/>
                <Route path='/shelters' component={ShelterList}/>
                <Route exact path='/vouchers' component={PurchaseForm}/>
                <Route path='/voucher' render={(props) => <Confirmation {...props} post={true} key='1' />}/>
                <Route path='/thank-you' render={(props) => <Confirmation {...props} post={false} key='2' />}/>
                <Route path='/redemption' render={this.requireAuth}/>
                <Route path='/login/success' component={LoginSuccess} />
              </div>
            </Switch>
          </BrowserRouter>
        </MuiThemeProvider>
      </div>
    );
  }
}

export default App;
