import React, { Component } from 'react';
import CustomInput from './CustomInput';
import Button from '@material-ui/core/Button';
import './CustomForm.css'

class CustomForm extends Component {
  constructor(props) {
    super(props);
    this.state = { formData: this.getBlankForm() }
  }

  getBlankForm = () => {
    const formData = {}
    for(let field of this.props.fields) {
      formData[field.name] = { value: '', isValid: false }
    }
    return formData
  }

  handleCustomInput = (name) => {
    return ({ value, isValid }) => {
      const formData = this.state.formData
      formData[name] = { value, isValid }
      this.setState({ formData })
    }
  }

  isFormValid = () => {
    for(let field in this.state.formData) {
      if(!this.state.formData[field].isValid) {
        return false
      }
    }
    return true
  }

  extractDataFromForm = () => {
    const formData = {}
    for(let field in this.state.formData) {
      formData[field] = this.state.formData[field].value
    }
    return formData
  }

  submitForm = async () => {
    this.setState({ isFormActive: true })
    if(this.isFormValid()) {
      await this.props.submit.fn(this.extractDataFromForm())
      this.setState({ isFormActive: false })
    }
    this.setState({ formData: this.getBlankForm() })
  }

  render() {
    return (
      <div className='custom-form'>
        {this.props.fields.map((field) => {
          return <CustomInput             
            className={field.className}
            label={field.label}
            isValidationActive={this.state.isFormActive}
            validations={field.validations}
            onChange={this.handleCustomInput(field.name)}
            value={this.state.formData[field.name].value}
          />
        })}
        <Button onClick={this.submitForm} className={this.props.submit.className} variant="contained" color="secondary">{this.props.submit.value}</Button>
      </div>
    )
  }
}

export default CustomForm;
