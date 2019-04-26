import React, { Component } from 'react';
import './Redemption.css';
import { isFieldPopulated } from '../inputs/inputValidation'
import CustomForm from '../inputs/CustomForm'
import RedeemVoucherForm from './RedeemVoucherForm'

class Redemption extends Component {
  constructor(props) {
    super(props);
    this.state = { voucher: {} }
  }

  getVoucherDetails = async (voucher) => {
    const voucherCodeString = voucher.voucherCode ? parseInt(voucher.voucherCode.substr(2),10) : null
    const response = await this.props.voucherApi.getVoucher(voucherCodeString);
    this.setState({ voucher: response })
  }

  setVoucher = (voucher) => {
    this.setState({ voucher })
  }

  render() {
    return (
      <div className='redemption-page'>
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
        {this.state.voucher.code && <RedeemVoucherForm 
          voucherApi={this.props.voucherApi} 
          voucher={this.state.voucher} 
          setVoucher={this.setVoucher} 
        />}
      </div>
    )
  }
}

export default Redemption;
