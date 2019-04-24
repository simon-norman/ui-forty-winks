import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import voucherApi from '../services/voucherApi';
import auth from '../services/auth';

class Redemption extends Component {
  constructor(props) {
		super(props);
    this.state = {voucher: null}
    if (/access_token|id_token|error/.test(props.location.hash)) {
      auth.handleAuthentication();
    }
  }

  redeemVoucher = async (event) => {
    event.preventDefault();
    const voucherDetails = {
      "email": this.state.userEmail,
      "code": this.state.code,
      "amount": this.state.deductAmount
    }
    const response = await voucherApi.redeemVoucher(voucherDetails)
    this.setState({voucher: response, deductAmount: ''})
    console.log(response)
    console.log(this.state.voucher)
  }

  getVoucherDetails = async (event) => {
    event.preventDefault();
    const response = await voucherApi.getVoucher(this.state.code);
    this.setState({ voucher: response })
  }

  handleInput = (event) => {
    const name = event.target.name
    const value = event.target.value
    this.setState({[name]: value})
  }

  render() {
    console.log(this.state.voucher)
    if (!this.state.voucher) {
      return (
        <div className='redeem-form-1'>
          <form onSubmit={this.getVoucherDetails}>
            <label>
            Voucher to redeem:
            <input className='voucher-code'
              type='text'
              name='voucherCode'
              onChange={this.handleInput}/>
            </label>
            <input className='get-voucher-details' type='submit' value='submit'/>
          </form>
        </div>
      )
    } else {
      return (
          <div className='redeem-form-2'>
            <h2 className='confirmed-voucher-code'>{this.state.voucher.code}</h2>
            <div className='amount-left'>{this.state.voucher.amount}</div>
            <form onSubmit={this.redeemVoucher}>
              <label>
              Amount to deduct:
              <input className='deduct-amount'
                type='text'
                name='deductAmount'
                onChange={this.handleInput}
                value={this.state.deductAmount}/>
              </label>
              <label>
              email confirmation to:
              <input className='user-email'
                type='text'
                name='userEmail'
                onChange={this.handleInput}/>
              </label>
              <input className='submit-deduction' type='submit' value='submit'/>
            </form>
          </div>
      )
    }
  }
}

export default Redemption;
