import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';
import auth from '../services/auth';

class LoginSuccess extends Component {
  async componentDidMount() {
    try {
      await auth.handleAuthentication();
      this.props.history.replace('/redemption');
    } catch(error) {
      console.log(error)
    }
  }

  render() {
    return(
      ''
    )
  }
}

export default withRouter(LoginSuccess);
