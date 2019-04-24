import React, { Component } from 'react';
import messageApi from '.././services/messageApi.js'

class MessageForm extends Component {

  constructor(props) {
    super(props);
    this.state = {code: this.props.voucher.code, amount: this.props.voucher.amount, message: false}
  }

  handleNumberChange = (event) => {
    const name = event.target.name
    const value = event.target.value
    this.setState({[name]: value})
  }

  sendSMS = (event) => {
    event.preventDefault();
    const message = {
      "number": "+44" + this.state.number,
      "code": this.state.code,
      "amount": this.state.amount
    }
    messageApi.postMessage(message, this.updateMessageState)
  }

  updateMessageState = (message) => {
    this.setState({message: true})
  }

  render() {
      if (this.state.message === false) {
        return (
        <form onSubmit={this.sendSMS}>
          <label>
            Send voucher code to: +44
            <input className='sms-number'
              type='text'
              name='number'
              value={this.state.number}
              onChange={this.handleNumberChange}/>
          </label>
          <input className='sms-submit' type='submit' value='submit'/>
        </form>
      )
    } else {
      return (<div className='text-sent-confirmation'>Voucher sent to 0{this.state.number}!</div>)
    }
  }
}

export default MessageForm;
