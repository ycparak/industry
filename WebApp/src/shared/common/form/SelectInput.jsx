import React from 'react';
import { FormGroup, Col, Label } from 'reactstrap';
import { Select } from 'semantic-ui-react';

const SelectInput = ({lblName, input, type, placeholder, multiple, options, meta: {touched, error}}) => {
  return (
    <FormGroup row>
      <Label sm={3} className="dash-form-label dash-comp-body-text">{lblName}</Label>
      <Col sm={9}>
        <Select 
          className="dash-select dash-comp-card-text" 
          value={input.value || null}
          onChange={(e, data) => input.onChange(data.value)}
          placeholder={placeholder}
          options={options}
          multiple={multiple} 
          />
        {touched && error && <small className="dash-form-error-label dash-danger-text">{error}</small>}
      </Col>
    </FormGroup>
  )
}

export default SelectInput;
