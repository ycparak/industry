import React from 'react';
import { Select } from 'semantic-ui-react';

const SelectInputCard = ({input, type, placeholder, multiple, options, meta: {touched, error}}) => {
  return (
    <React.Fragment>
      <Select 
        className="dash-select dash-comp-card-text" 
        value={input.value || null}
        onChange={(e, data) => input.onChange(data.value)}
        placeholder={placeholder}
        options={options}
        multiple={multiple} 
        />
      {touched && error && <small className="dash-form-error-label dash-danger-text">{error}</small>}
    </React.Fragment>
  )
}

export default SelectInputCard;
