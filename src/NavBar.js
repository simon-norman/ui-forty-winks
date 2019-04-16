import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import './NavBar.css'

class NavBar extends Component {
  render() {
    return (
      <AppBar className='nav-bar' position='static'>FortyWinks</AppBar>
    )
  }
}

export default NavBar;