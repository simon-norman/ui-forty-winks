import React, { Component } from 'react';
import Button from '@material-ui/core/Button';

class VoucherOption extends Component {
  buyVoucher = () => {
    this.props.buyVoucher(this.props.voucherOption.sku)
  }

  render() {
    return (
      <div className='voucher-option'>
        <Button onClick={this.buyVoucher} className="buy-voucher" variant="contained" color="primary">
            Buy a voucher
        </Button>
      </div>
    )
  }
}

export default VoucherOption;
