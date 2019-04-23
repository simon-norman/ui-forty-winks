import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';
class Voucher extends Component {
  render () {
    return (
      <Card className='voucher'>
        <div className='vouchercode'>Voucher:  FW{this.props.voucher.code}</div>
        <div className='voucheramount'>Amount:  £{this.props.voucher.amount}</div>
      </Card>
    )
  }
}
export default Voucher;
