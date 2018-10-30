import React, { Component } from 'react'
import { reduxForm, Field } from 'redux-form';
import { Row, Col, CardBody, CardFooter, Form, FormGroup, Label } from 'reactstrap';

import TextInputCard from '../../../../shared/common/form/TextInput-Card';
import SelectInputCard from '../../../../shared/common/form/SelectInput-Card';

const country = [
  { key: "South Africa", text: "South Africa", value: "South Africa", }
]
const provence = [
  { key: "Gauteng", text: "Gauteng", value: "Gauteng", },
  { key: "Western Cape", text: "Western Cape", value: "Western Cape", },
  { key: "Limpopo", text: "Limpopo", value: "Limpopo", },
  { key: "Eastern Cape", text: "Eastern Cape", value: "Eastern Cape", },
  { key: "Mpumalanga", text: "Mpumalanga", value: "Mpumalanga", },
  { key: "Northern Cape", text: "Northern Cape", value: "Northern Cape", },
  { key: "Free State", text: "Free State", value: "Free State", },
  { key: "KwaZulu-Natal", text: "KwaZulu-Natal", value: "KwaZulu-Natal", },
]

class ActivateForm extends Component {
  render() {
    const { handleSubmit, activateAccount } = this.props;
    return (
      <Form onSubmit={handleSubmit(activateAccount)}>
        <CardBody className="dash-card-body dash-card-body--normal dash-card-body-comp">
          <div className="padding-top--8 padding-bottom--12 dash-card-divider-white">
            <div className="padding-horizontal--20">
              <span className="dash-card-header-text--normal text-display--block dash-comp-body-text padding-vertical--16">Important details</span>
              <Row>
                <Col xs="12" sm="12" md="8" lg="6">
                  <FormGroup className="padding-top--8">
                    <div className="margin-bottom--4"><Label for="country" className="dash-form-label dash-comp-body-text">Country</Label></div>
                    <Field type="text" name="country" component={SelectInputCard} options={country} placeholder="Select country" />
                    <div className="margin-top--8"><span className="dash-form-small-text dash-comp-card-text">If you don't see your country, <a target="_blank" className="dash-link dash-comp-link" href="/">let us know you're interested</a>.</span></div>
                  </FormGroup>
                  <FormGroup className="padding-top--12">
                    <Label className="dash-form-label dash-comp-body-text">Address</Label>
                    <Field type="text" name="addressLine1" placeholder="Address Line 1" component={TextInputCard} />
                    <Field type="text" name="addressLine2" placeholder="Address Line 2" component={TextInputCard}/>
                    <Field type="text" name="city" placeholder="City" component={TextInputCard}/>
                    <Field type="text" name="provence" component={SelectInputCard} options={provence} placeholder="Select provence" />
                    <Field type="number" name="zip" placeholder="ZIP" component={TextInputCard}/>
                  </FormGroup>
                  <FormGroup className="padding-top--12">
                    <Label for="businessNumber" className="dash-form-label dash-comp-body-text">Phone number</Label>
                    <Field type="number" name="contactNumber" placeholder="011 0101 010" component={TextInputCard}/>
                  </FormGroup>
                </Col>
              </Row>
            </div>
          </div>
        </CardBody>

        <CardFooter className="dash-card-footer dash-card-footer--normal padding-horizontal--20 padding-vertical--16">
          <button type="submit" className="btn dash-btn dash-btn--large dash-btn-comp-primary margin-right--4">Submit application</button>
          <button className="btn dash-btn dash-btn--large dash-btn-comp margin-left--4">Save for later</button>
          <span className="dash-form-small-text dash-comp-card-text text-display--block padding-top--12">
            By submitting your application, you agree to our <a href="/terms" className="dash-comp-link">Services Agreement</a> and certify that the information you have provided is complete and correct.
          </span>
        </CardFooter>
      </Form>
    )
  }
}

export default (reduxForm({form: 'activateForm', enableReinitialize: true})(ActivateForm));