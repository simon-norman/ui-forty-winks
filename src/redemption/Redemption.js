import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import voucherApi from '../services/voucherApi';
import auth from '../services/auth';

class Redemption extends Component {
  constructor(props) {
		super(props)
    if (/access_token|id_token|error/.test(props.location.hash)) {
      auth.handleAuthentication();
    }
  }

  redeemVoucher = () => {
    voucherApi.redeemVoucher(1)
  }

  render() {
    return (
      <div className='main-page-container'>
        <Button onClick={this.redeemVoucher} className="buy-voucher button" variant="contained" color="secondary">
        </Button>
      </div>
    )
  }
}

export default Redemption;
