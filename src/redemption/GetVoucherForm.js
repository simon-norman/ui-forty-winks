import React, { Component } from 'react';
import { isFieldPopulated } from '../inputs/inputValidation'
import './Redemption.css';
import CustomForm from './CustomForm'

class GetVoucherForm extends Component {
  constructor(props) {
		super(props);
    this.state = { isFormActive: false }
  }

  getVoucherDetails = async (event) => {
    event.preventDefault();
    const voucherCodeString = this.state.voucherCode ? parseInt(this.state.voucherCode.substr(2),10) : null
    const response = await this.props.voucherApi.getVoucher(voucherCodeString);
    this.setState({ voucher: response })
  }

  render() {
      return (
        <div className='get-voucher-form'>
          <CustomForm 
            className='redeem-voucher-form' 
            submit={{
              fn: this.getVoucherDetails,
              className: 'get-voucher-details',
              value: 'Get voucher'
            }}
            fields={[
              {
                className: 'voucher-code',
                label: 'Voucher to redeem',
                isValidationActive: this.state.isFormActive,
                validations: [isFieldPopulated],
              },
            ]}>
          </CustomForm>
        </div>
      )
  }
}

export default GetVoucherForm;
