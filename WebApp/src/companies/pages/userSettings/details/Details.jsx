import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import { combineValidators, matchesField, isRequired, composeValidators } from 'revalidate';
import { Row, Col, Card, CardHeader, CardBody, CardFooter, Form, FormGroup, Label } from 'reactstrap';

import TextInputCard from '../../../../shared/common/form/TextInput-Card';

const validate = combineValidators({
  newPassword1: isRequired({message: "Please enter a password"}),
  newPassword2: composeValidators(
    isRequired({message: "Please confirm your new password"}),
    matchesField('newPassword1')({message: 'Passwords do not match'})
  )()
})

class CompUserSettingsDetails extends Component {
  render() {
    const { handleSubmit, updateCompSettings, invalid, submitting} = this.props;
    return (
      <React.Fragment>
        <Card className="dash-card dash-card--normal">
          <CardHeader className="dash-card-header dash-card-header-comp dash-card-header--normal">
            <span className="dash-card-header-text dash-card-header-text--normal dash-comp-body-text">Settings</span>
          </CardHeader>

          <Form onSubmit={handleSubmit(updateCompSettings)}>
            <CardBody className="dash-card-body dash-card-body--normal dash-card-body-comp">
              <div className="padding-top--8 padding-bottom--12">
                <div className="padding-horizontal--20">
                  <Row>
                    <Col xs="12" sm="12" md="8" lg="6">
                      <FormGroup className="padding-top--12">
                        <Label className="dash-form-label dash-comp-body-text">New password</Label>
                        <Field type="password" name="newPassword1" placeholder="New password" component={TextInputCard}/>
                        <Field type="password" name="newPassword2" placeholder="Re-enter new password" component={TextInputCard}/>
                      </FormGroup>
                    </Col>
                  </Row>
                </div>
              </div>
            </CardBody>

            <CardFooter className="dash-card-footer dash-card-footer--normal padding-horizontal--20 padding-vertical--12 text-right">
              <button disabled={invalid || submitting} type="submit" className="btn dash-btn dash-btn--normal dash-btn-comp-primary margin-left--4">Save</button>
            </CardFooter>
          </Form>

        </Card>
      </React.Fragment>
    )
  }
}

export default reduxForm({form: 'compUserSettingsDetailsForm', enableReinitialize: true, validate})(CompUserSettingsDetails);