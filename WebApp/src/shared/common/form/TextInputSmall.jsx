import React from 'react';
import { Col, Input, Label } from 'reactstrap';

const TextInputLarge = ({lblName, input, type, placeholder, meta: {touched, error}}) => {
  return (
    <React.Fragment>
      <Label sm={1} className="dash-form-label dash-comp-body-text">{lblName}</Label>
      <Col sm={3}>
        <Input {...input} type={type} placeholder={placeholder} className="dash-form-element dash-input dash-comp-input"></Input>
        {touched && error && <small className="dash-form-error-label dash-danger-text">{error}</small>}
      </Col>
    </React.Fragment>
  )
}

export default TextInputLarge;
