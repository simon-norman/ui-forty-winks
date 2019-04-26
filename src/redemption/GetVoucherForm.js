import React, { Component } from 'react';
import { isFieldPopulated } from '../inputs/inputValidation'
import './Redemption.css';
import CustomForm from './CustomForm'

class GetVoucherForm extends Component {
  getVoucherDetails = async (voucher) => {
    const voucherCodeString = voucher.voucherCode.value ? parseInt(voucher.voucherCode.value.substr(2),10) : null
    const response = await this.props.voucherApi.getVoucher(voucherCodeString);
    this.props.setVoucher(response)
  }

  render() {
      return (
        <div className='get-voucher-form'>
          <CustomForm 
            className='get-voucher-form' 
            submit={{
              fn: this.getVoucherDetails,
              className: 'get-voucher-details',
              value: 'Get voucher'
            }}
            fields={[
              {
                className: 'voucher-code',
                name: 'voucherCode',
                label: 'Voucher to redeem',
                validations: [isFieldPopulated],
              },
            ]}>
          </CustomForm>
        </div>
      )
  }
}

export default GetVoucherForm;
