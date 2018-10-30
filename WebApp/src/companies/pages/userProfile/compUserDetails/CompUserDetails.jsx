import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import { Row, Col, Card, CardHeader, CardBody, CardFooter, Form, FormGroup, Label } from 'reactstrap';

import TextInputCard from '../../../../shared/common/form/TextInput-Card';
import TextAreaCard from '../../../../shared/common/form/TextArea-Card';

class CompUserDetails extends Component {
  render() {
    const { handleSubmit, updateCompSettings, user } = this.props;
    return (
      <React.Fragment>
        <Card className="dash-card dash-card--normal">
          <CardHeader className="dash-card-header dash-card-header-comp dash-card-header--normal">
            <span className="dash-card-header-text dash-card-header-text--normal dash-comp-body-text">{user.name} {user.surname}</span>
          </CardHeader>

          <Form onSubmit={handleSubmit(updateCompSettings)}>
            <CardBody className="dash-card-body dash-card-body--normal dash-card-body-comp">
              <div className="padding-top--8 padding-bottom--12">
                <div className="padding-horizontal--20">
                  <Row>
                    <Col xs="12" sm="12" md="8" lg="6">
                      <FormGroup className="padding-top--8">
                        <Label for="companyName" className="dash-form-label dash-comp-body-text">First name(s)</Label>
                        <Field type="text" name="name" placeholder="First name(s)" component={TextInputCard}/>
                      </FormGroup>
                      <FormGroup className="padding-top--12">
                        <Label for="businessURL" className="dash-form-label dash-comp-body-text">Last name(s)</Label>
                        <Field type="text" name="surname" placeholder="Last name(s)" component={TextInputCard}/>
                      </FormGroup>
                      <FormGroup className="padding-top--12">
                        <Label for="role" className="dash-form-label dash-comp-body-text">Job title</Label>
                        <Field type="text" name="role" placeholder="CEO" component={TextInputCard}/>
                      </FormGroup>
                      <FormGroup className="padding-top--12">
                        <Label for="aboutUser" className="dash-form-label dash-comp-body-text">About</Label>
                        <Field type="textarea" rows="5" name="aboutUser" placeholder="Describe who you are so candidates know who they're commmunicating with." component={TextAreaCard}/>
                      </FormGroup>
                    </Col>
                  </Row>
                </div>
              </div>
            </CardBody>

            <CardFooter className="dash-card-footer dash-card-footer--normal padding-horizontal--20 padding-vertical--12 text-right">
              <button type="submit" className="btn dash-btn dash-btn--normal dash-btn-comp-primary margin-left--4">Save</button>
            </CardFooter>
          </Form>

        </Card>
      </React.Fragment>
    )
  }
}

export default reduxForm({form: 'compUserDetailsForm', enableReinitialize: true})(CompUserDetails);