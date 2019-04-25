import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import CustomInput from '../inputs/CustomInput';
import './Redemption.css';

class Redemption extends Component {
  constructor(props) {
		super(props);
    this.state = { voucherCode: null, redemptionForm: {} }
  }

  handleCustomInput = (name) => {
    return ({ event, isValid }) => {
      const redemptionForm = this.state.redemptionForm
      redemptionForm[name] = { value: event.target.value, isValid }
      this.setState({ redemptionForm })
    }
  }

  isFormValid = () => {
    for(let redemptionField in this.state.redemptionForm) {
      if(!redemptionField.isValid) {
        return false
      }
    }
    return true
  }

  getVoucherDetails = async (event) => {
    event.preventDefault();
    const voucherCodeString = this.state.voucherCode ? parseInt(this.state.voucherCode.substr(2),10) : null
    const response = await this.props.voucherApi.getVoucher(voucherCodeString);
    this.setState({ voucher: response })
  }

  redeemVoucher = async (event) => {
    this.setState({ isRedeemFormActive: true })
    if(this.isFormValid()) {
      event.preventDefault();
      const voucherCodeString = this.state.voucherCode ? parseInt(this.state.voucherCode.substr(2),10) : null
      const voucherDetails = {
        "email": this.state.userEmail,
        "code": voucherCodeString,
        "amount": this.state.redemptionForm.deductAmount
      }
      const response = await this.props.voucherApi.redeemVoucher(voucherDetails)
      const redemptionForm = this.state.redemptionForm
      redemptionForm.deductAmount = ''
      this.setState({ voucher: response, redemptionForm, isRedeemFormActive: false })
    }
  }

  isAvailableCreditForRedeem = (deductAmount) => {
    if(parseFloat(deductAmount) <= parseFloat(this.state.voucher.amount)) {
      return { isValid: true }
    }
    return { isValid: false, message: 'This is more than the available credit' }
  }

  render() {
    let redeemVoucherForm = ''
    
    if (this.state.voucher) {
      redeemVoucherForm =  
        <div className='redeem-voucher-form'>
          <div className='confirmed-voucher-code'>Redeem credit from: FW{this.state.voucher.code}</div>
          <div className='amount-left'>Credit available: £{this.state.voucher.amount}</div>
          <CustomInput
            className='deduct-amount'
            label='Amount to deduct'
            isValidationActive={this.state.isRedeemFormActive}
            validations={[this.isAvailableCreditForRedeem]}
            onChange={this.handleCustomInput('deductAmount')}
            value={this.state.deductAmount}>
          </CustomInput>
          <CustomInput
            className='user-email'
            label='Paypal email'
            isValidationActive={this.state.isRedeemFormActive}
            validations={[]}
            onChange={this.handleCustomInput('userEmail')}
            value={this.state.userEmail}>
          </CustomInput>
          <Button onClick={this.redeemVoucher} className='submit-deduction' variant="contained" color="secondary">Redeem voucher</Button>
        </div>
    }
      return (
        <div className='redemption-page'>
          <div className='get-voucher-form'>
            <CustomInput
              className='voucher-code'
              label='Voucher to redeem'
              isValidationActive={this.state.isRedeemFormActive}
              validations={[]}
              onChange={this.handleCustomInput('voucherCode')}
              value={this.state.voucherCode}>
            </CustomInput>
            <Button onClick={this.getVoucherDetails} className='get-voucher-details' variant="contained" color="secondary">Get voucher</Button>
          </div>
          {redeemVoucherForm}
        </div>
      )
  }
}

export default Redemption;
