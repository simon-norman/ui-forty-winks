import React, { Component } from 'react';
import voucherApi from './services/voucherApi'
import Voucher from './Voucher'

class Confirmation extends Component {
  constructor(props) {
    super(props)
    this.state = {voucher: null}
  }

  componentDidMount = async () => {
    if (localStorage.getItem('voucher') == null){
    const response = await voucherApi.getVoucher();
    this.setState({ voucher: response})
    localStorage.setItem('voucher', this.state.voucher.code)
    }
  }

  render() {
    return(
      <div>
        <div><h1>thank you!</h1></div>
        {this.state.voucher ?
          <Voucher voucher = {this.state.voucher} />
          : null }
      </div>

    )

  }
}

export default Confirmation;
