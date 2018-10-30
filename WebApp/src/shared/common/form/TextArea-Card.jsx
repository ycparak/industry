import React from 'react';
import { Input } from 'reactstrap';

const TextInputLarge = ({input, rows, placeholder, meta: {touched, error}}) => {
  return (
    <React.Fragment>
      <Input {...input} type="textarea" rows={rows} placeholder={placeholder} className="dash-input dash-form-element--large dash-textarea dash-comp-input" />
      {touched && error && <small className="dash-form-error-label dash-danger-text">{error}</small>}
    </React.Fragment>
  )
}

export default TextInputLarge;
