import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import { Row, Col, Card, CardHeader, CardBody, CardFooter, Form, FormGroup, Label } from 'reactstrap';

import TextAreaCard from '../../../../shared/common/form/TextArea-Card';
import SelectInputCard from '../../../../shared/common/form/SelectInput-Card';

const skills = [
  { key: ".Net Core 2.0", text: ".Net Core 2.0", value: ".Net Core 2.0" },
  { key: "Amazon EC2", text: "Amazon EC2", value: "Amazon EC2" },
  { key: "Amazon S3", text: "Amazon S3", value: "Amazon S3" },
  { key: "Amazon VPC", text: "Amazon VPC", value: "Amazon VPC" },
  { key: "AngularJS", text: "AngularJS", value: "AngularJS" },
  { key: "Angular", text: "Angular", value: "Angular" },
  { key: "Apache Cordova", text: "Apache Cordova", value: "Apache Cordova" },
  { key: "Aurelia", text: "Aurelia", value: "Aurelia" },
  { key: "BackboneJS", text: "BackboneJS", value: "BackboneJS" },
  { key: "Bootstrap", text: "Bootstrap", value: "Bootstrap" },
  { key: "C", text: "C", value: "C" },
  { key: "C#", text: "C#", value: "C#" },
  { key: "C++", text: "C++", value: "C++" },
  { key: "CasperJS", text: "CasperJS", value: "CasperJS" },
  { key: "Cassandra", text: "Cassandra", value: "Cassandra" },
  { key: "Clojure", text: "Clojure", value: "Clojure" },
  { key: "CouchDB", text: "CouchDB", value: "CouchDB" },
  { key: "CSS", text: "CSS", value: "CSS" },
  { key: "Django", text: "Django", value: "Django" },
  { key: "Firebase", text: "Firebase", value: "Firebase" },
  { key: "Elixir", text: "Elixir", value: "Elixir" },
  { key: "EmberJS", text: "EmberJS", value: "EmberJS" },
  { key: "Erlang", text: "Erlang", value: "Erlang" },
  { key: "ExtJS", text: "ExtJS", value: "ExtJS" },
  { key: "Go", text: "Go", value: "Go" },
  { key: "Google App Engine", text: "Google App Engine", value: "Google App Engine" },
  { key: "HTML", text: "HTML", value: "HTML" },
  { key: "Heroku", text: "Heroku", value: "Heroku" },
  { key: "Ionic", text: "Ionic", value: "Ionic" },
  { key: "Jasmine", text: "Jasmine", value: "Jasmine" },
  { key: "Java (mobile dev)", text: "Java (mobile dev)", value: "Java (mobile dev)" },
  { key: "Java (web dev)", text: "Java (web dev)", value: "Java (web dev)" },
  { key: "Javascript", text: "Javascript", value: "Javascript" },
  { key: "JQuery", text: "JQuery", value: "JQuery" },
  { key: "Kotlin", text: "Kotlin", value: "Kotlin" },
  { key: "Laravel", text: "Laravel", value: "Laravel" },
  { key: "Less", text: "Less", value: "Less" },
  { key: "MATLAB", text: "MATLAB", value: "MATLAB" },
  { key: "MS SQL", text: "MS SQL", value: "MS SQL" },
  { key: "Meteor", text: "Meteor", value: "Meteor" },
  { key: "Microsoft Azure", text: "Microsoft Azure", value: "Microsoft Azure" },
  { key: "MongoDB", text: "MongoDB", value: "MongoDB" },
  { key: "MySQL", text: "MySQL", value: "MySQL" },
  { key: "NodeJS", text: "NodeJS", value: "NodeJS" },
  { key: "Nginx", text: "nginx", value: "nginx" },
  { key: "Objective-C", text: "Objective-C", value: "Objective-C" },
  { key: "Oracle", text: "Oracle", value: "Oracle" },
  { key: "PHP", text: "PHP", value: "PHP" },
  { key: "Perl", text: "Perl", value: "Perl" },
  { key: "PostgreSQL", text: "PostgreSQL", value: "PostgreSQL" },
  { key: "Python", text: "Python", value: "Python" },
  { key: "R", text: "R", value: "R" },
  { key: "ReactJS", text: "ReactJS", value: "ReactJS" },
  { key: "React Native", text: "React Native", value: "React Native" },
  { key: "Rails", text: "Rails", value: "Rails" },
  { key: "Redis", text: "Redis", value: "Redis" },
  { key: "Ruby", text: "Ruby", value: "Ruby" },
  { key: "Sass", text: "Sass", value: "Sass" },
  { key: "Scala", text: "Scala", value: "Scala" },
  { key: "Sidekiq", text: "Sidekiq", value: "Sidekiq" },
  { key: "Solidity", text: "Solidity", value: "Solidity" },
  { key: "Spring Framework", text: "Spring Framework", value: "Spring Framework" },
  { key: "Swift", text: "Swift", value: "Swift" },
  { key: "TensorFlow", text: "TensorFlow", value: "TensorFlow" },
  { key: "Typescript", text: "Typescript", value: "Typescript" },
  { key: "Unitiy", text: "Unitiy", value: "Unitiy" },
  { key: "VueJS", text: "VueJS", value: "VueJS" },
  { key: "Unity", text: "Unity", value: "Unity" },
]

class CompSummary extends Component {
  render() {
    const { handleSubmit, updateCompSettings } = this.props;
    return (
      <React.Fragment>
        <Card className="dash-card dash-card--normal">
          <CardHeader className="dash-card-header dash-card-header-comp dash-card-header--normal">
            <span className="dash-card-header-text dash-card-header-text--normal dash-comp-body-text">In-depth profile</span>
          </CardHeader>

          <Form onSubmit={handleSubmit(updateCompSettings)}>
            <CardBody className="dash-card-body dash-card-body--normal dash-card-body-comp">
              <div className="padding-top--8 padding-bottom--12">
                <div className="padding-horizontal--20">
                  <Row>
                    <Col xs="12" sm="12" md="8" lg="6">
                      <FormGroup className="padding-top--8">
                        <div className="padding-bottom--4"><Label for="country" className="dash-form-label dash-comp-body-text">Tech stack</Label></div>
                        <Field type="text" name="techStack" component={SelectInputCard} options={skills} multiple={true} placeholder="Choose tech stack" />
                      </FormGroup>
                      <FormGroup className="padding-top--12">
                        <Label for="businessDescription" className="dash-form-label dash-comp-body-text">Business description</Label>
                        <Field type="textarea" rows="5" name="businessDescription" placeholder="Describe your industry, what you sell and whom you sell to." component={TextAreaCard}/>
                      </FormGroup>
                      <FormGroup className="padding-top--12">
                        <Label for="businessWhat" className="dash-form-label dash-comp-body-text">What we do</Label>
                        <Field type="textarea" rows="5" name="businessWhat" placeholder='Answer the question: "what is it that you guys do?"' component={TextAreaCard}/>
                      </FormGroup>
                      <FormGroup className="padding-top--12">
                        <Label for="businessWhy" className="dash-form-label dash-comp-body-text">Why work for us</Label>
                        <Field type="textarea" rows="5" name="businessWhy" placeholder='Answer the question: "why should I work for you?"' component={TextAreaCard}/>
                      </FormGroup>
                      <FormGroup className="padding-top--12">
                        <Label for="businessCulture" className="dash-form-label dash-comp-body-text">Our culture</Label>
                        <Field type="textarea" rows="5" name="businessCulture" placeholder='Answer the question: "what makes you proud to work at this company?"' component={TextAreaCard}/>
                      </FormGroup>
                      <FormGroup className="padding-top--12">
                        <Label for="businessEngineering" className="dash-form-label dash-comp-body-text">Our engineering process</Label>
                        <Field type="textarea" rows="5" name="businessEngineering" placeholder='Answer the questions: "what engineering process do you utilize?"' component={TextAreaCard}/>
                      </FormGroup>
                      <FormGroup className="padding-top--12">
                        <Label for="businessHiring" className="dash-form-label dash-comp-body-text">Our hiring process</Label>
                        <Field type="textarea" rows="5" name="businessHiring" placeholder='Answer the questions: "what hiring process do you utilize?"' component={TextAreaCard}/>
                      </FormGroup>
                      <FormGroup className="padding-top--12">
                        <Label for="perks" className="dash-form-label dash-comp-body-text">Perks</Label>
                        <Field type="textarea" rows="5" name="perks" placeholder="List the perks of working for your company." component={TextAreaCard}/>
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