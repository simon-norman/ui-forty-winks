import React, { Component } from 'react';
import './Redemption.css';
import CustomForm from './CustomForm'
import { isEmailValid, isFieldPopulated } from '../inputs/inputValidation'

class RedeemVoucherForm extends Component {
  constructor(props) {
		super(props);
    this.state = { voucherCode: null, isFormActive: false }
  }

  redeemVoucher = async (event) => {
    this.setState({ isRedeemFormActive: true })
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

  isAvailableCreditForRedeem = (deductAmount) => {
    if(parseFloat(deductAmount) <= parseFloat(this.state.voucher.amount)) {
      return { isValid: true }
    }
    return { isValid: false, message: 'This is more than the available credit' }
  }

  render() {
      return (
        <div>
          <div className='confirmed-voucher-code'>Redeem credit from: FW{this.state.voucher.code}</div>
          <div className='amount-left'>Credit available: £{this.state.voucher.amount}</div>
            <CustomForm 
              className='redeem-voucher-form' 
              onSubmit={{
                fn: this.redeemVoucher,
                className: 'submit-deduction',
                value: 'Redeem voucher'
              }}
              fields={[
                {
                  className: 'deduct-amount',
                  label: 'Amount to deduct',
                  isValidationActive: this.state.isRedeemFormActive,
                  validations: [this.isAvailableCreditForRedeem],
                },
                {
                  className: 'user-email',
                  label: 'Paypal email',
                  isValidationActive: this.state.isRedeemFormActive,
                  validations: [isEmailValid, isFieldPopulated],
                }
              ]}/>
        </div>
      )
  }
}

export default RedeemVoucherForm;
