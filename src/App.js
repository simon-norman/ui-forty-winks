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
import createAuth from './services/auth';
import auth0 from 'auth0-js';
import config from './config';
import createVoucherApi from './services/voucherApi';

class App extends Component {
  constructor(props) {
    super(props)
    const auth0Instance = new auth0.WebAuth({
      domain: 'dev-itjmkjwl.eu.auth0.com',
      clientID: 'cQDWo28WaQ6jGjji65l9pLRy8k6q9vSb',
      redirectUri: `${config.fortyWinksUi.url}/login/success`,
      audience:'https://api-forty-winks.herokuapp.com/',
      responseType: 'token',
    });
    const auth = createAuth(auth0Instance)

    const voucherApi = createVoucherApi(auth)

    this.state = { auth, voucherApi }
  }

  requireAuth = () => {
    const authToken = this.state.auth.getAccessToken()
    console.log(authToken)
    if (!authToken) {
      this.state.auth.login()
    }
    return <Redemption voucherApi={this.state.voucherApi} />
  }

  render() {
    return (
      <div className="App">
        <MuiThemeProvider theme={theme}>
          <BrowserRouter>
          <NavBar auth={this.state.auth}/>
            <Switch>
              <div className="main-page">
                <Route exact path='/' component={ShelterList}/>
                <Route path='/shelters' component={ShelterList}/>
                <Route exact path='/vouchers' component={PurchaseForm}/>
                <Route path='/voucher' render={(props) => <Confirmation {...props} post={true} key='1' />}/>
                <Route path='/redemption' render={this.requireAuth}/>
                <Route path='/login/success' render={(props) => <LoginSuccess {...props} auth={this.state.auth} />} />
                <Route path='/voucher/success' render={(props) => <Confirmation {...props} post={false} key='2' />}/>
              </div>
            </Switch>
          </BrowserRouter>
        </MuiThemeProvider>
      </div>
    );
  }
}

export default App;
