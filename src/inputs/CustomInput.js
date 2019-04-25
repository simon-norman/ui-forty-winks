import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';

class CustomInput extends Component {
  constructor(props) {
		super(props);
    this.state = { value: '' }
  }

  handleInput = (event) => {
    this.setState({ value: event.target.value })
    this.props.onChange({ event, isFieldValid: this.fieldValidStatus().isValid })
  }

  fieldValidStatus = () => {
    for(let validation of this.props.validations) {
      const { isValid, message } = validation(this.state.value)
      if(!isValid) {
        return { isValid, message }
      }
    }

    return { isValid: true }
  }

  validationError = () => {
    const { isValid, message } = this.fieldValidStatus()
    if(!isValid && this.props.isValidationActive) {
      return message;
    }
  }

  render() {
      return (
        <div className='custom-input'>
          <TextField 
            className={this.props.className}
            type='text'
            label={this.props.label}
            onChange={this.handleInput}
            value={this.props.value}/>
          <div className='validation-error'>{this.validationError()}</div>
        </div>
      )
  }
}

export default CustomInput;
