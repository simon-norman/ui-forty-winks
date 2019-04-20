import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import './VoucherOption.css';

class VoucherOption extends Component {
  buyVoucher = () => {
    this.props.buyVoucher(this.props.voucherOption)
  }

  render() {
    return (
      <div className='voucher-option'>
        <Button onClick={this.buyVoucher} className="buy-voucher button" variant="contained" color="secondary">
            { `£${this.props.voucherOption.price}` }
        </Button>
      </div>
    )
  }
}

export default VoucherOption;
