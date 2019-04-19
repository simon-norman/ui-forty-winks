import React, { Component } from 'react';

class Voucher extends Component {
  render () {
    return (
      <div className='voucher'>
        <div className='vouchercode'>{this.props.voucher.code}</div>
        <div className='voucheramount'>{this.props.voucher.amount}</div>
      </div>
    )
  }
}
export default Voucher;
