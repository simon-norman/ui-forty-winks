import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import voucherApi from '../services/voucherApi';
import auth from '../services/auth';
import TextField from '@material-ui/core/TextField';
import './Redemption.css';

class Redemption extends Component {
  constructor(props) {
		super(props);
    this.state = {voucher: null}
  }

  redeemVoucher = async (event) => {
    event.preventDefault();
    const voucherCodeString = this.state.voucherCode ? parseInt(this.state.voucherCode.substr(2),10) : null
    const voucherDetails = {
      "email": this.state.userEmail,
      "code": voucherCodeString,
      "amount": this.state.deductAmount
    }
    const response = await voucherApi.redeemVoucher(voucherDetails)
    this.setState({voucher: response, deductAmount: ''})
  }

  getVoucherDetails = async (event) => {
    event.preventDefault();
    const voucherCodeString = this.state.voucherCode ? parseInt(this.state.voucherCode.substr(2),10) : null
    const response = await voucherApi.getVoucher(voucherCodeString);
    this.setState({ voucher: response })
  }

  handleInput = (event) => {
    const name = event.target.name
    const value = event.target.value
    this.setState({[name]: value})
  }

  render() {
    if (!this.state.voucher) {
      return (
        <div className='redeem-form-1'>
            <TextField className='voucher-code'
              type='text'
              name='voucherCode'
              label='Voucher to redeem'
              onChange={this.handleInput}/>
            <Button onClick={this.getVoucherDetails} className='get-voucher-details' variant="contained" color="secondary">Submit</Button>
        </div>
      )
    } else {
      return (
          <div className='redeem-form-2'>
            <h2 className='confirmed-voucher-code'>Redeem credit from: FW{this.state.voucher.code}</h2>
            <div className='amount-left'>Credit available: £{this.state.voucher.amount}</div>
              <TextField className='deduct-amount'
                type='text'
                name='deductAmount'
                label='Amount to deduct'
                onChange={this.handleInput}
                value={this.state.deductAmount}/>
              <TextField className='user-email'
                type='text'
                name='userEmail'
                label='email confirmation to'
                onChange={this.handleInput}/>
              <Button onClick={this.redeemVoucher} className='submit-deduction' variant="contained" color="secondary">Submit</Button>
          </div>
      )
    }
  }
}

export default Redemption;
