import React, { Component } from 'react'
import { reduxForm, Field } from 'redux-form';
import { Row, Col, CardBody, CardFooter, Form, FormGroup, Label } from 'reactstrap';

import TextInputCard from '../../../../shared/common/form/TextInput-Card';
import SelectInputCard from '../../../../shared/common/form/SelectInput-Card';
import TextAreaCard from '../../../../shared/common/form/TextArea-Card';

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
const businessType = [
  { key: "Sole proprietorship", text: "Sole proprietorship", value: "Sole proprietorship", },
  { key: "Business trust", text: "Business trust", value: "Business trust", },
  { key: "Partnership", text: "Partnership", value: "Partnership", },
  { key: "Personal Liability Company Inc", text: "Personal Liability Company Inc", value: "Personal Liability Company Inc", },
  { key: "Private Company (PTY) Ltd", text: "Private Company (PTY) Ltd", value: "Private Company (PTY) Ltd", },
  { key: "Public Company (Ltd.)", text: "Public Company (Ltd.)", value: "Public Company (Ltd.)", },
  { key: "Non Profit Organization", text: "Non Profit Organization", value: "Non Profit Organization", },
  { key: "External (Foreign) Company", text: "External (Foreign) Company", value: "External (Foreign) Company", },
]

class ActivateForm extends Component {
  render() {
    const { handleSubmit, activateAccount } = this.props;
    return (
      <Form onSubmit={handleSubmit(activateAccount)}>
        <CardBody className="dash-card-body dash-card-body--normal dash-card-body-comp">
          <div className="padding-top--8 padding-bottom--12 dash-card-divider-white">
            <div className="padding-horizontal--20">
              <span className="dash-card-header-text--normal text-display--block dash-comp-body-text padding-vertical--16">Business details</span>
              <Row>
                <Col xs="12" sm="12" md="8" lg="6">
                  <FormGroup className="padding-top--8">
                    <div className="margin-bottom--4"><Label for="country" className="dash-form-label dash-comp-body-text">Country</Label></div>
                    <Field type="text" name="country" component={SelectInputCard} options={country} placeholder="Select country" />
                    <div className="margin-top--8"><span className="dash-form-small-text dash-comp-card-text">If you don't see your country, <a target="_blank" className="dash-link dash-comp-link" href="/">let us know you're interested</a>.</span></div>
                  </FormGroup>
                  <FormGroup className="padding-top--12">
                    <Label for="companyName" className="dash-form-label dash-comp-body-text">Business name</Label>
                    <Field type="text" name="companyName" placeholder="Business Name" component={TextInputCard}/>
                  </FormGroup>
                  <FormGroup className="padding-top--12">
                    <Label className="dash-form-label dash-comp-body-text">Business Address</Label>
                    <Field type="text" name="addressLine1" placeholder="Address Line 1" component={TextInputCard} />
                    <Field type="text" name="addressLine2" placeholder="Address Line 2" component={TextInputCard}/>
                    <Field type="text" name="city" placeholder="City" component={TextInputCard}/>
                    <Field type="text" name="provence" component={SelectInputCard} options={provence} placeholder="Select provence" />
                    <Field type="number" name="zip" placeholder="ZIP" component={TextInputCard}/>
                  </FormGroup>
                  <FormGroup className="padding-top--12">
                    <div className="margin-bottom--4"><Label for="businessType" className="dash-form-label dash-comp-body-text">Type of business</Label></div>
                    <Field type="text" name="businessType" component={SelectInputCard} options={businessType} placeholder="Select business type" />
                  </FormGroup>
                  <FormGroup className="padding-top--12">
                    <Label for="businessURL" className="dash-form-label dash-comp-body-text">Business website</Label>
                    <Field type="url" name="businessURL" placeholder="example.com" component={TextInputCard}/>
                  </FormGroup>
                  <FormGroup className="padding-top--12">
                    <Label for="businessNumber" className="dash-form-label dash-comp-body-text">Business phone number</Label>
                    <Field type="number" name="businessNumber" placeholder="011 0101 010" component={TextInputCard}/>
                  </FormGroup>
                  <FormGroup className="padding-top--12">
                    <Label for="businessDescription" className="dash-form-label dash-comp-body-text">Business description</Label>
                    <Field type="textarea" rows="5" name="businessDescription" placeholder="Describe your industry, what you sell and whom you sell to." component={TextAreaCard}/>
                  </FormGroup>
                </Col>
              </Row>
            </div>
          </div>

          <div className="padding-top--8 padding-bottom--12 dash-card-divider-white">
            <div className="padding-horizontal--20">
              <Row>
                <Col xs="12" sm="12" md="8" lg="6">
                  <span className="dash-card-header-text--normal text-display--block dash-comp-body-text padding-top--16">You, the individual or sole proprietor</span>
                  <span className="dash-form-small-text dash-comp-card-text text-display--block padding-bottom--16">
                    An individual or sole proprietor must activate their own account. If you’re trying to activate this account on behalf of someone else,
                    please <a className="dash-comp-link" href="/company/settings/users">invite them to become the account owner</a> and complete the activation themselves.
                  </span>
                  <FormGroup className="padding-top--8">
                    <Label className="dash-form-label dash-comp-body-text">Legal name</Label>
                    <Field type="text" name="ownerName" placeholder="First name" component={TextInputCard}/>
                    <Field type="text" name="ownerSurname" placeholder="Last name" component={TextInputCard}/>
                  </FormGroup>
                  <FormGroup className="padding-top--12">
                    <Label for="ownerTitle" className="dash-form-label dash-comp-body-text">Job title</Label>
                    <Field type="text" name="ownerTitle" placeholder="CEO" component={TextInputCard}/>
                  </FormGroup>
                  <FormGroup className="padding-top--12">
                    <Label for="ownerNumber" className="dash-form-label dash-comp-body-text">Contact numbers</Label>
                    <Field type="number" name="ownerNumber1" placeholder="Cell number" component={TextInputCard}/>
                    <Field type="number" name="ownerNumber2" placeholder="Home/work number" component={TextInputCard}/>
                  </FormGroup>
                </Col>
              </Row>
            </div>
          </div>

          <div className="padding-top--8 padding-bottom--12">
            <div className="padding-horizontal--20">
              <Row>
                <Col xs="12" sm="12" md="8" lg="6">
                  <span className="dash-card-header-text--normal text-display--block dash-comp-body-text padding-top--16">Bank details</span>
                  <span className="dash-form-small-text dash-comp-card-text text-display--block padding-bottom--16">
                    By providing your bank details you agree to be billed either automatically or manually upon hiring someone discovered using the Industry14 website or any of Industry14's related services.
                  </span>
                  <FormGroup className="padding-top--8">
                    <Label className="dash-form-label dash-comp-body-text">Bank account name</Label>
                    <Field type="text" name="accountName" placeholder="Bank account name" component={TextInputCard}/>
                    <Field type="text" name="tradingName" placeholder="Business trading name" component={TextInputCard}/>
                  </FormGroup>
                  <FormGroup className="padding-top--12">
                    <Label for="accountNumber" className="dash-form-label dash-comp-body-text">Bank account number</Label>
                    <Field type="number" name="accountNumber" placeholder="Bank account number" component={TextInputCard}/>
                  </FormGroup>
                  <FormGroup className="padding-top--12">
                    <Label for="branchcode" maxLength="12" className="dash-form-label dash-comp-body-text">Bank branch code</Label>
                    <Field type="number" name="branchCode" placeholder="Bank branch code" component={TextInputCard}/>
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