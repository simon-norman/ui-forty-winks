import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import FormHelperText from '@material-ui/core/FormHelperText';
import './Redemption.css';

class Redemption extends Component {
  constructor(props) {
		super(props);
    this.state = { voucherCode: null }
  }

  handleInput = (name) => {
    return (event) => {
      this.setState({[name]: event.target.value})
    }
  }

  getVoucherDetails = async (event) => {
    event.preventDefault();
    const voucherCodeString = this.state.voucherCode ? parseInt(this.state.voucherCode.substr(2),10) : null
    const response = await this.props.voucherApi.getVoucher(voucherCodeString);
    this.setState({ voucher: response })
  }

  redeemVoucher = async (event) => {
    this.setState({ isRedeemFormActive: true })
    if(this.isRedeemValid()) {
      event.preventDefault();
      const voucherCodeString = this.state.voucherCode ? parseInt(this.state.voucherCode.substr(2),10) : null
      const voucherDetails = {
        "email": this.state.userEmail,
        "code": voucherCodeString,
        "amount": this.state.deductAmount
      }
      const response = await this.props.voucherApi.redeemVoucher(voucherDetails)
      this.setState({ voucher: response, deductAmount: '', isRedeemFormActive: false })
    } else {

    }
  }

  isRedeemValid = () => {
    return parseFloat(this.state.deductAmount) <= parseFloat(this.state.voucher.amount)
  }

  deductAmountError = () => {
    if(!this.isRedeemValid() && this.state.isRedeemFormActive) {
      return 'This is more than the available credit';
    }
  }

  render() {
    let redeemVoucherForm = ''
    
    if (this.state.voucher) {
      redeemVoucherForm =  
        <div className='redeem-voucher-form'>
          <div className='confirmed-voucher-code'>Redeem credit from: FW{this.state.voucher.code}</div>
          <div className='amount-left'>Credit available: £{this.state.voucher.amount}</div>
          <TextField className='deduct-amount'
            type='text'
            label='Amount to deduct'
            onChange={this.handleInput('deductAmount')}
            value={this.state.deductAmount}/>
          <div className='deduct-amount-error'>{this.deductAmountError()}</div>
          <TextField className='user-email'
            type='text'
            label='Paypal email'
            onChange={this.handleInput('userEmail')}/>
          <Button onClick={this.redeemVoucher} className='submit-deduction' variant="contained" color="secondary">Redeem voucher</Button>
        </div>
    }
      return (
        <div className='redemption-page'>
          <div className='get-voucher-form'>
              <TextField className='voucher-code'
                type='text'
                label='Voucher to redeem'
                onChange={this.handleInput('voucherCode')}/>
              <Button onClick={this.getVoucherDetails} className='get-voucher-details' variant="contained" color="secondary">Get voucher</Button>
          </div>
          {redeemVoucherForm}
        </div>
      )
  }
}

export default Redemption;
