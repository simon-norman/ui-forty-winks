import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';
import './Voucher.css';

class Voucher extends Component {
  render () {
    return (
      <Card className='voucher'>
        <Card.Body className='voucher-body'>
          <Card.Title className='vouchercode'>FW{this.props.voucher.code}</Card.Title>
          <Card.Subtitle className='voucheramount'>Credit:  £{this.props.voucher.amount}</Card.Subtitle>
        </Card.Body>
      </Card>
    )
  }
}
export default Voucher;
