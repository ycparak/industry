import React from 'react';
import { FormGroup, Col, Input, Label } from 'reactstrap';

const TextInputLarge = ({lblName, input, type, placeholder, meta: {touched, error}}) => {
  return (
    <FormGroup row>
      <Label sm={3} className="dash-form-label dash-comp-body-text">{lblName}</Label>
      <Col sm={9}>
        <Input {...input} type={type} placeholder={placeholder} className="dash-form-element dash-input dash-comp-input" />
        {touched && error && <small className="dash-form-error-label dash-danger-text">{error}</small>}
      </Col>
    </FormGroup>
  )
}

export default TextInputLarge;
