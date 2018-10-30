import React, { Component } from 'react';
import { connect } from 'react-redux';
import { reduxForm, Field } from 'redux-form';
import { composeValidators, combineValidators, isRequired, hasLengthGreaterThan, hasLengthLessThan, isNumeric } from 'revalidate';
import { Form, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import TextInputLarge from '../../../shared/common/form/TextInput'
import TextArea from '../../../shared/common/form/TextArea'
import SelectInput from '../../../shared/common/form/SelectInput'

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

const seniority = [
  { key: "Intern", text: "Intern", value: "Intern", },
  { key: "Junior", text: "Junior", value: "Junior", },
  { key: "Mid-level", text: "Mid-level", value: "Mid-level", },
  { key: "Senior", text: "Senior", value: "Senior", },
  { key: "Team lead", text: "Team lead", value: "Team lead", },
  { key: "Director", text: "Director", value: "Director", },
  { key: "Senior Director", text: "Senior Director", value: "Senior Director", },
  { key: "VP", text: "VP", value: "VP", },
  { key: "Senior VP", text: "Senior VP", value: "Senior VP", },
  { key: "CTO", text: "CTO", value: "CTO", },
]

const role = [
  { key: "Full-stack developer", text: "Full-stack developer", value: "Full-stack developer", },
  { key: "Front-end developer", text: "Front-end developer", value: "Front-end developer", },
  { key: "Back-end developer", text: "Back-end developer", value: "Back-end developer", },
  { key: "Mobile (Android) developer", text: "Mobile (Android) developer", value: "Mobile (Android) developer", },
  { key: "Mobile (Swift) developer", text: "Mobile (Swift) developer", value: "Mobile (Swift) developer", },
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

const mapState = (state, ownProps) => {
  let position = {};
  let user = state.firebase.auth;
  if (!ownProps.newPosition) {
    const positionid = ownProps.position.id;
    if (positionid && state.firestore.ordered.positions.length > 0) {
      position = state.firestore.ordered.positions.filter(p => p.id === positionid)[0];
    }
  }
  return {
    initialValues: position,
    user: user
  }
}

const validate = combineValidators({
  title: composeValidators(
    isRequired({message: 'The position name is required'}),
    hasLengthGreaterThan(5)({message: 'Please enter a name greater than 5 characters'}),
    hasLengthLessThan(25)({message: 'Please enter a name smaller than 25 characters'})
  )(),
  seniority: isRequired({message: 'Seniority is required'}),
  role: isRequired({message: 'Role is required'}),
  skills: isRequired({message: 'Skills are required'}),
  minExperience: composeValidators(
    isRequired({message: 'Min experience is required'}),
    isNumeric({message: 'Must be numeric'}),
  )(),
  maxExperience: composeValidators(
    isRequired({message: 'Max experience is required'}),
    isNumeric({message: 'Must be numeric'}),
  )(),
  minSalary: composeValidators(
    isRequired({message: 'Min salary is required'}),
    isNumeric({message: 'Must be numeric'}),
  )(),
  maxSalary: composeValidators(
    isRequired({message: 'Max salary is Required'}),
    isNumeric({message: 'Must be numeric'})
  )(),
  address1: isRequired({message: 'Address line 1 is required'}),
  address2: isRequired({message: 'Address line 2 is required'}),
  provence: isRequired({message: 'Provence is required'}),
  zip: composeValidators(
    isRequired({message: 'Zip is required'}),
    isNumeric({message: 'Must be numeric'})
  )(),
  spec: isRequired({message: 'A brief job spec is required'}),
})

class PositionsModal extends Component {

  state = {
    updated: false,
  }

  onFormSubmit = values => {
    if (this.props.newPosition) {
      this.props.handleCreatePosition(values);
    }
    else {
      this.props.handleUpdatePosition(values);
      this.setState({
        updated: !this.state.updated
      })
    }
  }

  render() {
    const {newPosition, invalid, submitting, pristine} = this.props;
    return (
      <React.Fragment>
        <ModalHeader className="dash-modal-header padding-horizontal--20 padding-vertical--16">
          <span className="dash-modal-header-text--small dash-comp-body-text">
            {newPosition ? 'Create new position' : 'Edit position'}
          </span>
        </ModalHeader>

        <Form onSubmit={this.props.handleSubmit(this.onFormSubmit)}>
          <ModalBody className="dash-modal-body dash-comp-modal-body padding-horizontal--20 padding-top--20 dash-card-divider-white">
            <Field lblName="Position name" type="text" name="title" placeholder="Give your position a name" component={TextInputLarge}/>
            <Field lblName="Team name" type="text" name="team" placeholder="Hiring for a specific team? Enter the team name here" component={TextInputLarge}/>
            <Field lblName="Seniority" type="text" name="seniority" component={SelectInput} options={seniority} placeholder="Select seniority"  />
            <Field lblName="Role" type="text" name="role" component={SelectInput} options={role} placeholder="Select role" />
            <Field lblName="Skills" type="text" name="skills" component={SelectInput} multiple={true} options={skills} placeholder="Choose skills" />
            <Field lblName="Min experience" type="number" name="minExperience" placeholder="0 years" component={TextInputLarge}/>
            <Field lblName="Max experience" type="number" name="maxExperience" placeholder="40 years" component={TextInputLarge}/>
            <Field lblName="Min salary" type="number" name="minSalary" placeholder="R20,000" component={TextInputLarge}/>
            <Field lblName="Max salary" type="number" name="maxSalary" placeholder="R30,000" component={TextInputLarge}/>
            <br/>
            <Field lblName="Address line 1" type="text" name="address1" placeholder="Address line 1" component={TextInputLarge}/>
            <Field lblName="Address line 2" type="text" name="address2" placeholder="Address line 2" component={TextInputLarge}/>
            <Field lblName="Provence" name="provence" type="text" component={SelectInput} options={provence} placeholder="Choose provence"  />
            <Field lblName="ZIP" type="number" name="zip" placeholder="ZIP" component={TextInputLarge}/>
            <br/>
            <Field lblName="Job spec" rows="5" name="spec" placeholder="Write a brief description of what this job entails." component={TextArea}/>
          </ModalBody>

          <ModalFooter className="dash-modal-footer dash-comp-modal-footer">
            <button disabled={invalid || submitting || pristine} type="submit" className="btn dash-btn dash-btn-comp-primary">
              {newPosition ? 'Create position' : 'Edit position'}
            </button>
          </ModalFooter>
        </Form>
      </React.Fragment>
    )
  }
}

export default connect(mapState)(reduxForm({form: 'positionForm', enableReinitialize: true, validate})(PositionsModal));
