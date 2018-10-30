import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import { Form, ModalHeader, ModalBody, Label } from 'reactstrap';
import TextInputLarge from '../../../../shared/common/form/TextInput';
import { login } from '../authActions'

const actions = {
  login
}

class Login extends Component {

  render() {
    const {login, handleSubmit, error} = this.props;
    return (
      <React.Fragment>
        <ModalHeader className="dash-modal-header padding-horizontal--20 padding-vertical--16">
          <span className="dash-modal-header-text--small dash-comp-body-text">Log in to continue</span>
        </ModalHeader>
  
        <Form onSubmit={handleSubmit(login)}>
          <ModalBody className="dash-modal-body dash-comp-modal-body padding-horizontal--20 padding-top--20 dash-card-divider-white">
            <Field lblName="Email" type="email" name="email" placeholder="my.name@gmail.com" component={TextInputLarge}/>
            <Field lblName="Password" type="password" name="password" component={TextInputLarge}/>
            {error && <Label className="dash-form-error-label dash-danger-text">{error}</Label>}
            <div className="text-right">
              <button type="submit" className="btn dash-btn dash-btn-comp-primary">Log in</button>
            </div>
          </ModalBody>
  
        </Form>
      </React.Fragment>
    )
  }
}


export default connect(null, actions)(reduxForm({form: 'loginForm'})(Login));
