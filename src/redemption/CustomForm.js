import React, { Component } from 'react';
import CustomInput from '../inputs/CustomInput';
import Button from '@material-ui/core/Button';

class CustomForm extends Component {
  constructor(props) {
		super(props);
    this.state = { formData: {} }
  }

  handleCustomInput = (name) => {
    return ({ event, isValid }) => {
      const formData = this.state.formData
      formData[name] = { value: event.target.value, isValid }
      this.setState({ formData })
    }
  }

  isFormValid = () => {
    for(let field in this.state.formData) {
      if(!field.isValid) {
        return false
      }
    }
    return true
  }

  submitForm = () => {
    if(this.isFormValid) {
      this.props.submit.fn(this.state.formData)
    }
  }

  render() {
    return (
      <div>
        {this.props.fields.map((field) => {
          return <CustomInput             
            className={field.className}
            label={field.label}
            isValidationActive={field.isValidationActive}
            validations={field.validations}
            onChange={this.handleCustomInput(field.name)}
            value={this.state.formData[field.name]}
          />
        })}
        <Button onClick={this.submitForm} className={this.props.submit.className} variant="contained" color="secondary">{this.props.submit.value}</Button>
      </div>
    )
  }
}

export default CustomForm;
