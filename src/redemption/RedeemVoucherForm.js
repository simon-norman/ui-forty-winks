import React, { Component } from 'react';
import CustomForm from '../inputs/CustomForm'
import { isEmailValid, isFieldPopulated } from '../inputs/inputValidation'

class RedeemVoucherForm extends Component {
  redeemVoucher = async (redemption) => {
    const voucherDetails = {
      "email": redemption.userEmail,
      "code": this.props.voucher.code,
      "amount": redemption.deductAmount
    }
    const response = await this.props.voucherApi.redeemVoucher(voucherDetails)
    this.props.setVoucher(response)
  }

  isAvailableCreditForRedeem = (deductAmount) => {
    if(parseFloat(deductAmount) <= parseFloat(this.props.voucher.amount)) {
      return { isValid: true }
    }
    return { isValid: false, message: 'This is more than the available credit' }
  }

  render() {
      return (
        <div className='redeem-voucher-form' >
            <div className='confirmed-voucher-code'>Redeem credit from: FW{this.props.voucher.code}</div>
            <div className='amount-left'>Credit available: £{this.props.voucher.amount}</div>
            <CustomForm 
              submit={{
                fn: this.redeemVoucher,
                className: 'submit-deduction',
                value: 'Redeem voucher'
              }}
              fields={[
                {
                  className: 'deduct-amount',
                  label: 'Amount to deduct',
                  name: 'deductAmount',
                  validations: [isFieldPopulated, this.isAvailableCreditForRedeem],
                },
                {
                  className: 'user-email',
                  name: 'userEmail',
                  label: 'Paypal email',
                  validations: [isFieldPopulated, isEmailValid],
                }
              ]}/>
        </div>
      )
  }
}

export default RedeemVoucherForm;
