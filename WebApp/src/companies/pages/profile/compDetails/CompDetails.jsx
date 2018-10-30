import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { reduxForm, Field } from 'redux-form';
import { Row, Col, Card, CardHeader, CardBody, CardFooter, Form, FormGroup, Label } from 'reactstrap';

import TextInputCard from '../../../../shared/common/form/TextInput-Card';
import SelectInputCard from '../../../../shared/common/form/SelectInput-Card';

const numEmployees = [
  { key: "0 - 10", text: "0 - 10", value: "0 - 10", },
  { key: "10 - 20", text: "10 - 20", value: "10 - 20", },
  { key: "20 - 50", text: "20 - 50", value: "20 - 50", },
  { key: "50 - 75", text: "50 - 75", value: "50 - 75", },
  { key: "75 - 100", text: "75 - 100", value: "75 - 100", },
  { key: "100 - 150", text: "100 - 150", value: "100 - 150", },
  { key: "150 - 250", text: "150 - 250", value: "150 - 250", },
  { key: "250 - 500", text: "250 - 500", value: "250 - 500", },
  { key: "500 - 1000", text: "500 - 1000", value: "500 - 1000", },
  { key: "1000+", text: "1000+", value: "1000+", },
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

class CompDetails extends Component {
  render() {
    const { handleSubmit, updateCompSettings, user } = this.props;
    return (
      <React.Fragment>
        <Card className="dash-card dash-card--normal">
          <CardHeader className="dash-card-header dash-card-header-comp dash-card-header--normal">
            <Row className="card-header-row">
              <Col className="card-header-col card-header-col--left">
                <span className="dash-card-header-text dash-card-header-text--large dash-comp-body-text">{user.companyName}</span>
              </Col>
              <Col className="card-header-col card-header-col--right text-right">
                <Link to="company/profile/view" onClick={this.toggle} className="btn dash-btn dash-btn-comp">View full profile</Link>
              </Col>
            </Row>
          </CardHeader>

          <Form onSubmit={handleSubmit(updateCompSettings)}>
            <CardBody className="dash-card-body dash-card-body--normal dash-card-body-comp">
              <div className="padding-top--8 padding-bottom--12">
                <div className="padding-horizontal--20">
                  <Row>
                    <Col xs="12" sm="12" md="8" lg="6">
                      <FormGroup className="padding-top--12">
                        <Label for="companyName" className="dash-form-label dash-comp-body-text">Business name</Label>
                        <Field type="text" name="companyName" placeholder="Business Name" component={TextInputCard}/>
                      </FormGroup>
                      <FormGroup className="padding-top--12">
                        <Label for="businessURL" className="dash-form-label dash-comp-body-text">Business website</Label>
                        <Field type="url" name="businessURL" placeholder="example.com" component={TextInputCard}/>
                      </FormGroup>
                      <FormGroup className="padding-top--12">
                        <div className="padding-bottom--4"><Label for="country" className="dash-form-label dash-comp-body-text">Number of employees</Label></div>
                        <Field type="text" name="numEmployees" component={SelectInputCard} options={numEmployees} placeholder="Number of employees" />
                      </FormGroup>
                      <FormGroup className="padding-top--12">
                        <Label for="businessNumber" className="dash-form-label dash-comp-body-text">Business phone number</Label>
                        <Field type="number" name="businessNumber" placeholder="011 0101 010" component={TextInputCard}/>
                      </FormGroup>
                      <FormGroup className="padding-top--12">
                        <Label className="dash-form-label dash-comp-body-text">Business Address</Label>
                        <Field type="text" name="addressLine1" placeholder="Address Line 1" component={TextInputCard} />
                        <Field type="text" name="addressLine2" placeholder="Address Line 2" component={TextInputCard}/>
                        <Field type="text" name="city" placeholder="City" component={TextInputCard}/>
                        <Field type="text" name="provence" component={SelectInputCard} options={provence} placeholder="Select provence" />
                        <Field type="number" name="zip" placeholder="ZIP" component={TextInputCard}/>
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

export default reduxForm({form: 'compDetailsForm', enableReinitialize: true})(CompDetails);