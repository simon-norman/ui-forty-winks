import React, { Component } from 'react';
import voucherApi from '../services/voucherApi'
import Voucher from './Voucher'

class Confirmation extends Component {
  constructor(props) {
    super(props)
    this.state = {voucher: null}
  }

  componentDidMount = async () => {
    if (this.props.post === true){
    const response = await voucherApi.postVoucher();
    this.props.history.push("/thank-you?code=" + response.code)}
    else {
      const qs = require('query-string')
      const code = qs.parse(this.props.location.search).code
      const response = await voucherApi.getVoucher(code);
      this.setState({ voucher: response})
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
