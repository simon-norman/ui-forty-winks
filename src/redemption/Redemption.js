import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import CustomInput from '../inputs/CustomInput';
import './Redemption.css';

class Redemption extends Component {
  constructor(props) {
		super(props);
    this.state = { voucherCode: null, areFieldsValid: [] }
  }

  handleInput = (name) => {
    return (event) => {
      this.setState({[name]: event.target.value})
    }
  }

  handleCustomInput = (name) => {
    return ({ event, isFieldValid }) => {
      this.setState({[name]: event.target.value})
      this.updateFieldsValid({ name, isFieldValid })
    }
  }

  updateFieldsValid = ({ name, isFieldValid }) => {
    const areFieldsValid = this.state.areFieldsValid;
    const indexOfField = areFieldsValid.findIndex((field) => {
      return field.isValid
    })

    if(indexOfField !== -1) {
      areFieldsValid[indexOfField] = { name, isValid: isFieldValid }
    } else {
      areFieldsValid.push({ name, isValid: isFieldValid })
    }
    this.setState({ areFieldsValid })
  }

  isFormValid = () => {
    if(this.state.areFieldsValid.find((field) => {
      return field.isValid === false
    })) {
      return false
    } else {
      return true
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
    if(this.isFormValid()) {
      event.preventDefault();
      const voucherCodeString = this.state.voucherCode ? parseInt(this.state.voucherCode.substr(2),10) : null
      const voucherDetails = {
        "email": this.state.userEmail,
        "code": voucherCodeString,
        "amount": this.state.deductAmount
      }
      const response = await this.props.voucherApi.redeemVoucher(voucherDetails)
      this.setState({ voucher: response, deductAmount: '', isRedeemFormActive: false })
    }
  }

  isAvailableCreditForRedeem = () => {
    if(parseFloat(this.state.deductAmount) <= parseFloat(this.state.voucher.amount)) {
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
