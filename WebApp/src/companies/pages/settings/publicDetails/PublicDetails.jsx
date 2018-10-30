import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import { Row, Col, Card, CardHeader, CardBody, CardFooter, Form, FormGroup, Label } from 'reactstrap';

import TextInputCard from '../../../../shared/common/form/TextInput-Card';
import SelectInputCard from '../../../../shared/common/form/SelectInput-Card';
import TextAreaCard from '../../../../shared/common/form/TextArea-Card';

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

class PublicDetails extends Component {
  render() {
    const { handleSubmit, updateCompSettings } = this.props;
    return (
      <React.Fragment>
        <Card className="dash-card dash-card--normal">
          <CardHeader className="dash-card-header dash-card-header-comp dash-card-header--normal">
            <span className="dash-card-header-text dash-card-header-text--normal dash-comp-body-text">Public Details</span>
          </CardHeader>

          <Form onSubmit={handleSubmit(updateCompSettings)}>
            <CardBody className="dash-card-body dash-card-body--normal dash-card-body-comp">
              <div className="padding-top--8 padding-bottom--12">
                <div className="padding-horizontal--20">
                  <Row>
                    <Col xs="12" sm="12" md="8" lg="6">
                      <FormGroup className="padding-top--8">
                        <div className="padding-bottom--4"><Label for="country" className="dash-form-label dash-comp-body-text">Country</Label></div>
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
                      <div className="padding-bottom--4"><Label for="businessType" className="dash-form-label dash-comp-body-text">Type of business</Label></div>
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

export default reduxForm({form: 'compPublicForm', enableReinitialize: true})(PublicDetails);