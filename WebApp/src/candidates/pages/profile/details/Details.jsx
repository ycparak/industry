import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { reduxForm, Field } from 'redux-form';
import { Row, Col, Card, CardHeader, CardBody, CardFooter, Form, FormGroup, Label } from 'reactstrap';

import TextInputCard from '../../../../shared/common/form/TextInput-Card';
import SelectInputCard from '../../../../shared/common/form/SelectInput-Card';

const role = [
  { key: "Full-stack developer", text: "Full-stack developer", value: "Full-stack developer", },
  { key: "Front-end developer", text: "Front-end developer", value: "Front-end developer", },
  { key: "Back-end developer", text: "Back-end developer", value: "Back-end developer", },
  { key: "Mobile (Android) developer", text: "Mobile (Android) developer", value: "Mobile (Android) developer", },
  { key: "Mobile (Swift) developer", text: "Mobile (Swift) developer", value: "Mobile (Swift) developer", },
]

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

const educationLevel = [
  { key: "Some highschool", text: "Some highscool", value: "Some highscool", },
  { key: "Highschool graduate", text: "Highschool graduate", value: "Highschool graduate", },
  { key: "Some tertiary education", text: "Some tertiary education", value: "Some tertiary education", },
  { key: "Graduated with diploma", text: "Graduated with diploma", value: "Graduated with diploma", },
  { key: "Graduated with degree", text: "Graduated with degree", value: "Graduated with degree", },
  { key: "Graduated with honours", text: "Graduated with diploma", value: "Graduated with diploma", },
  { key: "Graduated with PhD", text: "Graduated with PhD", value: "Graduated with PhD", },
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
    const { handleSubmit, updateCandSettings, user } = this.props;
    return (
      <React.Fragment>
        <Card className="dash-card dash-card--normal">
          <CardHeader className="dash-card-header dash-card-header-comp dash-card-header--normal">
            <Row className="card-header-row">
              <Col className="card-header-col card-header-col--left">
                <span className="dash-card-header-text dash-card-header-text--large dash-comp-body-text">{user.name} {user.surname}</span>
              </Col>
              <Col className="card-header-col card-header-col--right text-right">
                <Link to="company/profile/view" onClick={this.toggle} className="btn dash-btn dash-btn-comp">View full profile</Link>
              </Col>
            </Row>
          </CardHeader>

          <Form onSubmit={handleSubmit(updateCandSettings)}>
            <CardBody className="dash-card-body dash-card-body--normal dash-card-body-comp">
              <div className="padding-top--8 padding-bottom--12">
                <div className="padding-horizontal--20">
                  <Row>
                    <Col xs="12" sm="12" md="8" lg="6">
                      <FormGroup className="padding-top--8">
                        <Label for="name" className="dash-form-label dash-comp-body-text">Name and Surname</Label>
                        <Field type="text" name="name" placeholder="First name" component={TextInputCard}/>
                        <Field type="text" name="surname" placeholder="Last name" component={TextInputCard}/>
                      </FormGroup>
                      <FormGroup className="padding-top--12">
                        <Label for="name" className="dash-form-label dash-comp-body-text">How old are you?</Label>
                        <Field type="number" name="age" placeholder="35" component={TextInputCard}/>
                      </FormGroup>
                      <FormGroup className="padding-top--12">
                        <Label for="businessURL" className="dash-form-label dash-comp-body-text">Links to learn more about you</Label>
                        <Field type="url" name="personalURL" placeholder="Personal website" component={TextInputCard}/>
                        <Field type="url" name="linkedIn" placeholder="LinkedIn account" component={TextInputCard}/>
                        <Field type="url" name="githubURL" placeholder="Github account" component={TextInputCard}/>
                        <Field type="url" name="twitterURL" placeholder="Twitter account" component={TextInputCard}/>
                        <Field type="url" name="stackOverflowURL" placeholder="Stack Overflow account" component={TextInputCard}/>
                        <Field type="url" name="dribbbleURL" placeholder="Dribble account" component={TextInputCard}/>
                        <Field type="url" name="behanceURL" placeholder="Behance account" component={TextInputCard}/>
                      </FormGroup>
                      <FormGroup className="padding-top--12">
                        <Label className="dash-form-label dash-comp-body-text">Education level</Label><br />
                        <Field type="text" name="educationLevel" component={SelectInputCard} options={educationLevel} placeholder="Select education level" />
                      </FormGroup>
                      <FormGroup className="padding-top--12">
                        <Label for="name" className="dash-form-label dash-comp-body-text">What higher learning institution did you attend?</Label>
                        <Field type="text" name="almaMater" placeholder="Alma mater" component={TextInputCard}/>
                      </FormGroup>
                      <FormGroup className="padding-top--12">
                        <Label className="dash-form-label dash-comp-body-text">What type of developer would you describe yourself as?</Label><br />
                        <Field type="text" name="role" component={SelectInputCard} options={role} placeholder="Select your role" />
                      </FormGroup>
                      <FormGroup className="padding-top--12">
                        <Label className="dash-form-label dash-comp-body-text">Which of the following skills are you competent in?</Label><br />
                        <Field type="text" name="skills" component={SelectInputCard} options={skills} multiple={true} placeholder="Select your skills" />
                      </FormGroup>
                      <FormGroup className="padding-top--12">
                        <Label for="name" className="dash-form-label dash-comp-body-text">How many years of experience do you have working as a developer?</Label>
                        <Field type="number" name="experience" placeholder="Years of experience" component={TextInputCard}/>
                      </FormGroup>
                      <FormGroup className="padding-top--12">
                        <Label for="name" className="dash-form-label dash-comp-body-text">Which city/cities are you looking to work in?</Label>
                        <Field type="text" name="wantsToWorkIn" placeholder="Each city comma seperated" component={TextInputCard}/>
                      </FormGroup>
                      <FormGroup className="padding-top--12">
                        <Label for="name" className="dash-form-label dash-comp-body-text">What salary range are you looking for?</Label>
                        <Field type="number" name="minSalary" placeholder="Min: R30000" component={TextInputCard}/>
                        <Field type="number" name="maxSalary" placeholder="Max: R70000" component={TextInputCard}/>
                      </FormGroup>
                      <FormGroup className="padding-top--12">
                        <Label for="contactNumber" className="dash-form-label dash-comp-body-text">Contact number</Label>
                        <Field type="number" name="contactNumber" placeholder="011 0101 010" component={TextInputCard}/>
                      </FormGroup>
                      <FormGroup className="padding-top--12">
                        <Label className="dash-form-label dash-comp-body-text">Address</Label>
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