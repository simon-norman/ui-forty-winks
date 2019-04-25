import React, { Component } from 'react';
import './Redemption.css';
import GetVoucherForm from './GetVoucherForm'
import RedeemVoucherForm from './GetVoucherForm'

class Redemption extends Component {
  render() {
    return (
      <div className='redemption-page'>
        <div className='get-voucher-form'>
          <GetVoucherForm />
        </div>
        <RedeemVoucherForm />
      </div>
    )
  }
}

export default Redemption;
