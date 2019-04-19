import React, { Component } from 'react';

class Voucher extends Component {
  render () {
    return (
      <div className='voucher'>
        <div className='vouchercode'>{this.props.voucher.vouchercode}</div>
        <div className='voucheramount'>{this.props.voucher.voucheramount}</div>
      </div>
    )
  }
}
export default Voucher;
