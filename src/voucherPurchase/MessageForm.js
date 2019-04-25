import React, { Component } from 'react';
import messageApi from '.././services/messageApi.js';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import './MessageForm.css';
import { spacing } from '@material-ui/system';

class MessageForm extends Component {

  constructor(props) {
    super(props);
    this.state = {code: this.props.voucher.code, amount: this.props.voucher.amount, message: false}
  }

  handleNumberChange = (event) => {
    const name = event.target.name
    const value = event.target.value
    this.setState({[name]: value})
    console.log(this.state)
  }

  sendSMS = (event) => {
    event.preventDefault();
    const message = {
      "number": "+44" + this.state.number,
      "code": this.state.code,
      "amount": this.state.amount
    }
    console.log(message)
    messageApi.postMessage(message, this.updateMessageState)
    console.log(this.state.number)
    this.updateMessageState()
  }

  updateMessageState = (message) => {
    this.setState({message: true})
  }

  render() {
      if (this.state.message === false) {
        return (
        <div className='sms-form'>
        <TextField className='sms-number'
          type='text'
          label='Text voucher code to: +44'
          name='number'
          onChange={this.handleNumberChange}/>
        <Button onClick={this.sendSMS} className='send-sms' variant="contained" color="secondary">Send</Button>
        </div>
      )
    } else {
      return (<h5 className='text-sent-confirmation'>The voucher has been sent to +44{this.state.number}</h5>)
    }
  }
}

export default MessageForm;
