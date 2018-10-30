import React from 'react';
import { Input } from 'reactstrap';

const TextInputLarge = ({input, type, placeholder, meta: {touched, error}}) => {
  return (
    <React.Fragment>
      <Input {...input} type={type} placeholder={placeholder} className="dash-form-element dash-input dash-form-element--normal dash-comp-input" />
      {touched && error && <small className="dash-form-error-label dash-danger-text">{error}</small>}
    </React.Fragment>
  )
}

export default TextInputLarge;
