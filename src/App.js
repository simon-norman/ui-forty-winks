import React, { Component } from 'react';
import './App.css';
import ShelterList from './ShelterList';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Switch>
            <Route exact path='/' component={ShelterList}/>
            <Route path='/shelters' component={ShelterList}/>
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
