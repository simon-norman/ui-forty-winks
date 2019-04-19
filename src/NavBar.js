import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import { withRouter } from 'react-router-dom';
import './NavBar.css'
import Toolbar from '@material-ui/core/Toolbar';

class NavBar extends Component {
  redirectTo = (route) => {
    return () => { this.props.history.push(route) }
  }

  render() {
    return (
      <AppBar className='nav-bar' position='static' color="primary">
        <Toolbar>
          <span>Forty Winks</span>
          <Button onClick={this.redirectTo('/vouchers')} color="inherit" className="nav-bar__item load-vouchers-page-button">
            Buy Voucher
          </Button>
        </Toolbar>
      </AppBar>
    )
  }
}

export default withRouter(NavBar);