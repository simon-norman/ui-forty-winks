import React, { Component } from 'react';
import Voucher from './Voucher'
import MessageForm from './MessageForm'
import './Confirmation.css'

class Confirmation extends Component {
  constructor(props) {
    super(props)
    this.state = {voucher: null}
  }

  componentDidMount = () => {
    if (this.props.post === true){
      this.createVoucher()
    } else {
      this.getVoucher()
    }
  }

  createVoucher = async () => {
    const qs = require('query-string')
    const amount = qs.parse(this.props.location.search).amount

    const voucher = await this.props.voucherApi.postVoucher(amount);

    this.props.history.push("/voucher/success?code=" + voucher.code)
  }

  getVoucher = async () => {
    const qs = require('query-string')
    const code = qs.parse(this.props.location.search).code
    const response = await this.props.voucherApi.getVoucher(code);
    this.setState({ voucher: response})
  }


  render() {
    return(
        <div className='voucher-container'>
          {this.state.voucher ?
            <div><h1>Thank you!</h1>
              <div>
                <Voucher voucher = {this.state.voucher} />
              </div>
              <div className='sms-form'>
                <MessageForm voucher = {this.state.voucher} />
              </div>
            </div>
          : null }
        </div>
    )
  }
}

export default Confirmation;
