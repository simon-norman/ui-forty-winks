import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import './CustomInput.css'

class CustomInput extends Component {
  constructor(props) {
		super(props);
    this.state = { value: '' }
  }

  handleInput = (event) => {
    const value = event.target.value
    this.setState({ value })
    this.props.onChange({ value, isValid: this.fieldValidStatus(value).isValid })
  }

  fieldValidStatus = (value) => {
    for(let validation of this.props.validations) {
      const { isValid, message } = validation(value)
      if(!isValid) {
        return { isValid, message }
      }
    }

    return { isValid: true }
  } 

  validationError = () => {
    const { isValid, message } = this.fieldValidStatus(this.state.value)
    if(!isValid && this.props.isValidationActive) {
      return message;
    }
  }

  render() {
      return (
        <div className={`${this.props.className}-custom-input`}>
          <TextField 
            className={this.props.className}
            type='text'
            label={this.props.label}
            onChange={this.handleInput}
            value={this.props.value}
            />
          <div className='validation-error'>{this.validationError()}</div>
        </div>
      )
  }
}

export default CustomInput;
