import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import { withRouter } from 'react-router-dom';
import './NavBar.css'
import Toolbar from '@material-ui/core/Toolbar';
import login from './services/auth';

class NavBar extends Component {
  redirectTo = (route) => {
    return () => { this.props.history.push(route) }
  }

  render() {
    return (
      <AppBar className='nav-bar' position='fixed' color="primary">
        <Toolbar>
          <span>Forty Winks</span>
          <Button onClick={this.redirectTo('/shelters')} color="inherit" className="nav-bar__item load-shelters-page-button">
            Shelters
          </Button>
          <Button onClick={this.redirectTo('/vouchers')} color="inherit" className="nav-bar__item load-vouchers-page-button">
            Buy Voucher
          </Button>
          <Button onClick={login} color="inherit" className="nav-bar__item load-vouchers-page-button">
            Shelters login
          </Button>
        </Toolbar>
      </AppBar>
    )
  }
}

export default withRouter(NavBar);