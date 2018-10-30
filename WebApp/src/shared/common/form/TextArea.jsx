import React from 'react';
import { FormGroup, Col, Input, Label } from 'reactstrap';

const TextInputLarge = ({lblName, input, rows, placeholder, meta: {touched, error}}) => {
  return (
    <FormGroup row>
      <Label sm={3} className="dash-form-label dash-comp-body-text">{lblName}</Label>
      <Col sm={9}>
        <Input {...input} type="textarea" rows={rows} placeholder={placeholder} className="dash-input dash-form-element--large dash-textarea dash-comp-input" />
        {touched && error && <small className="dash-form-error-label dash-danger-text">{error}</small>}
      </Col>
    </FormGroup>
  )
}

export default TextInputLarge;
