import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { combineValidators, isRequired } from 'revalidate';
import { connect } from 'react-redux';
import TextInputLarge from '../../../../shared/common/form/TextInput';
import { Form, Label, ModalBody, ModalFooter} from 'reactstrap';

import { registerCompany } from '../authActions';

const actions = {
  registerCompany,
}

const validate = combineValidators({
  name: isRequired('name'),
  surname: isRequired('surname'),
  email: isRequired('email'),
  password: isRequired('password'),
  companyName: isRequired('companyName'),
  companyPassword: isRequired('companyPassword'),
})

class CompanySignup extends Component {
  render() {
    const {handleSubmit, registerCompany, error, invalid, submitting} = this.props;
    return (
      <Form onSubmit={handleSubmit(registerCompany)}>
        <ModalBody className="dash-modal-body dash-comp-modal-body padding-horizontal--20 padding-top--20 dash-card-divider-white">
          <Field lblName="First name" type="text" name="name" placeholder="First name" component={TextInputLarge}/>
          <Field lblName="Last name" type="text" name="surname" placeholder="Last name" component={TextInputLarge}/>
          <Field lblName="Email" type="email" name="email" placeholder="my.name@gmail.com" component={TextInputLarge}/>
          <Field lblName="Password" type="password" name="password" placeholder="Password" component={TextInputLarge}/>
          <Field lblName="Company" type="text" name="companyName" placeholder="Company name" component={TextInputLarge}/>
          <Field lblName="Phone Number" type="number" name="companyNumber" placeholder="Telephone number" component={TextInputLarge}/>
          {error && <Label className="dash-form-error-label dash-danger-text">{error}</Label>}          
        </ModalBody>
        <ModalFooter className="dash-modal-footer dash-comp-modal-footer">
          <button disabled={invalid || submitting} type="submit" className="btn dash-btn dash-btn-comp-primary">Sign up</button>          
        </ModalFooter>
      </Form>
    )
  }
}

export default connect(null, actions)(reduxForm({form: 'companySignup', validate})(CompanySignup));
