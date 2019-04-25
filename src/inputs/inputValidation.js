
export const isFieldPopulated = (value) => {
  if(value && value.length > 0) {
    return { isValid: true }
  }
  return { isValid: false, message: 'This field is required' }
}

export const isEmailValid = (email) => {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  if(re.test(email.toLowerCase())) {
    return { isValid: true }
  }
  return { isValid: false, message: 'This is not a valid email' }
}