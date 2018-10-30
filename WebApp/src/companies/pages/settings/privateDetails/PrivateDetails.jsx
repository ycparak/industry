import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import { Row, Col, Card, CardHeader, CardBody, CardFooter, Form, FormGroup, Label } from 'reactstrap';

import TextInputCard from '../../../../shared/common/form/TextInput-Card';

class PrivateDetails extends Component {
  render() {
    const { handleSubmit, updateCompSettings } = this.props;
    return (
      <React.Fragment>
        <Card className="dash-card dash-card--normal">
          <CardHeader className="dash-card-header dash-card-header-comp dash-card-header--normal">
            <span className="dash-card-header-text dash-card-header-text--normal dash-comp-body-text">Private Details</span>
          </CardHeader>

          <Form onSubmit={handleSubmit(updateCompSettings)}>
            <CardBody className="dash-card-body dash-card-body--normal dash-card-body-comp">
              <div className="padding-top--8 padding-bottom--12">
                <div className="padding-horizontal--20">
                  <Row>
                    <Col xs="12" sm="12" md="8" lg="6">
                      <span className="dash-card-header-text--normal text-display--block dash-comp-body-text padding-top--16">Bank details</span>
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

            <CardFooter className="dash-card-footer dash-card-footer--normal padding-horizontal--20 padding-vertical--12 text-right">
              <button type="submit" className="btn dash-btn dash-btn--normal dash-btn-comp-primary margin-left--4">Save</button>
            </CardFooter>
          </Form>

        </Card>
      </React.Fragment>
    )
  }
}

export default reduxForm({form: 'compPrivateForm', enableReinitialize: true})(PrivateDetails);