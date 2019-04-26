import React, { Component } from 'react';
import './Redemption.css';
import { isFieldPopulated } from '../inputs/inputValidation'
import CustomForm from './CustomForm'
import RedeemVoucherForm from './RedeemVoucherForm'

class Redemption extends Component {
  constructor(props) {
		super(props);
    this.state = { voucher: {} }
  }

  getVoucherDetails = async (voucher) => {
    const voucherCodeString = voucher.voucherCode.value ? parseInt(voucher.voucherCode.value.substr(2),10) : null
    const response = await this.props.voucherApi.getVoucher(voucherCodeString);
    this.setState({ voucher: response })
  }

  render() {
    return (
      <div className='redemption-page'>
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
        <RedeemVoucherForm voucherApi={this.props.voucherApi} voucher={this.state.voucher} setVoucher={this.setVoucher} />
      </div>
    )
  }
}

export default Redemption;
