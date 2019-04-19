import React, { Component } from 'react';
import './App.css';
import ShelterList from './shelters/ShelterList';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import NavBar from './NavBar';
import PurchaseForm from './voucherPurchase/PurchaseForm.js';
import Confirmation from './voucherPurchase/Confirmation.js'
import { MuiThemeProvider } from '@material-ui/core/styles';
import theme from './themeSetUp';

class App extends Component {
  render() {
    return (
      <div className="App">
        <MuiThemeProvider theme={theme}>
          <BrowserRouter>
          <NavBar />
            <Switch>
              <Route exact path='/' component={ShelterList}/>
              <Route path='/shelters' component={ShelterList}/>
              <Route exact path='/vouchers' component={PurchaseForm}/>
              <Route path='/voucher' render={(props) => <Confirmation {...props} post={true} key='1' />}/>
              <Route path='/thank-you' render={(props) => <Confirmation {...props} post={false} key='2' />}/>
            </Switch>
          </BrowserRouter>
        </MuiThemeProvider>
      </div>
    );
  }
}

export default App;
