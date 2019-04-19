import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import { withRouter } from 'react-router-dom';
import './NavBar.css'

class NavBar extends Component {
  redirectToVouchers = () => {
    this.props.history.push('/vouchers')
  }

  render() {
    return (
      <AppBar className='nav-bar' position='static' color="primary">Forty Winks
      	<Button onClick={this.redirectToVouchers} variant="contained" color="primary" className="load-vouchers-page-button">
					Buy a voucher
				</Button>
      </AppBar>
    )
  }
}

export default withRouter(NavBar);