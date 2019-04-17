import React, { Component } from 'react';
import './App.css';
import ShelterList from './ShelterList';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import NavBar from './NavBar';
import PurchaseForm from './PurchaseForm.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <BrowserRouter>
          <Switch>
            <Route exact path='/' component={ShelterList}/>
            <Route path='/shelters' component={ShelterList}/>
            <Route exact path='/vouchers' component={PurchaseForm}/>
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
