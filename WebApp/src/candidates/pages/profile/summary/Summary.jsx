import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import { Row, Col, Card, CardHeader, CardBody, CardFooter, Form, FormGroup, Label } from 'reactstrap';

import TextAreaCard from '../../../../shared/common/form/TextArea-Card';

class CompSummary extends Component {
  render() {
    const { handleSubmit, updateCandSettings } = this.props;
    return (
      <React.Fragment>
        <Card className="dash-card dash-card--normal">
          <CardHeader className="dash-card-header dash-card-header-comp dash-card-header--normal">
            <span className="dash-card-header-text dash-card-header-text--normal dash-comp-body-text">In-depth profile</span>
          </CardHeader>

          <Form onSubmit={handleSubmit(updateCandSettings)}>
            <CardBody className="dash-card-body dash-card-body--normal dash-card-body-comp">
              <div className="padding-top--8 padding-bottom--12">
                <div className="padding-horizontal--20">
                  <Row>
                    <Col xs="12" sm="12" md="8" lg="6">
                      <FormGroup className="padding-top--12">
                        <Label for="description" className="dash-form-label dash-comp-body-text">Description</Label>
                        <Field type="textarea" rows="5" name="description" placeholder="Briefly, describe yourself and what you're looking for. Software developer with 2 years experience and a Bsc Comp Sci from UCT. Currently working with React, interested in front-end dev. Looking for work in Cape Town or Johannesburg." component={TextAreaCard}/>
                      </FormGroup>
                      <FormGroup className="padding-top--12">
                        <Label for="about" className="dash-form-label dash-comp-body-text">About me</Label>
                        <Field type="textarea" rows="5" name="about" placeholder="Describe yourself, your back story, you strengths and weaknesses, what makes you tick." component={TextAreaCard}/>
                      </FormGroup>
                      <FormGroup className="padding-top--12">
                        <Label for="skillsSharp" className="dash-form-label dash-comp-body-text">How I keep my skills sharp</Label>
                        <Field type="textarea" rows="5" name="skillsSharp" placeholder="Describe yourself, your back story, you strengths and weaknesses, what makes you tick." component={TextAreaCard}/>
                      </FormGroup>
                      <FormGroup className="padding-top--12">
                        <Label for="doNext" className="dash-form-label dash-comp-body-text">What I want to do next</Label>
                        <Field type="textarea" rows="5" name="doNext" placeholder="Describe the types of projects you want to work on, your role in the project, etc." component={TextAreaCard}/>
                      </FormGroup>
                      <FormGroup className="padding-top--12">
                        <Label for="companyTypeNext" className="dash-form-label dash-comp-body-text">What type of company I want to work for next</Label>
                        <Field type="textarea" rows="5" name="companyTypeNext" placeholder="Describe the type of company, it's culture, the type of managers, etc. that you would like to work for next." component={TextAreaCard}/>
                      </FormGroup>
                      <FormGroup className="padding-top--12">
                        <Label for="experience" className="dash-form-label dash-comp-body-text">Experience</Label>
                        <Field type="textarea" rows="5" name="myExperience" placeholder="Describe your experience and previous jobs?" component={TextAreaCard}/>
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

export default reduxForm({form: 'compSummaryForm', enableReinitialize: true})(CompSummary);