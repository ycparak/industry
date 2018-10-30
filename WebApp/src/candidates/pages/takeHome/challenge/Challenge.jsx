import React, { Component } from 'react'
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { startTakeHomeChallenge, finishTakeHomeChallenge } from '../takeHomeActions';
import { Card, CardHeader, CardBody, Row, Col, Form } from 'reactstrap';
import { Link } from 'react-router-dom'

const mapState = (state) => {
  return {
    user: state.firebase.profile,
    me: state.firebase.auth
  }
}

const actions = {
  startTakeHomeChallenge,
  finishTakeHomeChallenge
}

class Challenge extends Component {

  state = {
    value: '',
  }

  challengeEngine = (me, user) => {
    if (user.isLoaded) {
      if (user.takeHomeStarted) {
        return
      }
      else {
        this.props.startTakeHomeChallenge(me, user);
      }
    }
  }

  complete = (evt) => {
    this.state = {
      value: evt.target.value
    }
  }

  completeTask = (evt) => {
    evt.preventDefault();
    if (this.state.value !== undefined)
    {
      this.props.finishTakeHomeChallenge(this.props.me, this.props.user, this.state.value);
    }
  }

  render() {
    const { me, user } = this.props;
    this.challengeEngine(me, user);
    let proj = user.project;
    if (user.takeHomeFinished) return (
      <div>
        <Card className="dash-card dash-card--normal">
          <CardHeader className="dash-card-header dash-card-header-comp dash-card-header--normal">
            <span className="dash-card-header-text dash-card-header-text--large dash-comp-body-text">Take home challenge: { user && proj && proj.title }</span>
          </CardHeader>

          {
            user.stage5 && <div className="dash-card-body dash-card-body-comp dash-card-body--special-warning">
              <span>Your submission has been registered</span>
            </div>
          }

          <CardBody className="dash-card-body dash-card-body--normal dash-card-body-comp">
            <div className="padding-horizontal--20">
              <Row>
                { 
                  user.stage5 &&
                  <div className="padding-bottom--12 padding-horizontal--12 dash-card-body-comp dash-card-divider-white">
                    <div className="">
                      <Link to="/candidate/activate" className="btn dash-btn dash-btn-comp-primary margin-right--4 margin-top--8">Activate your account &rarr;</Link>
                    </div>
                  </div>
                }
              </Row>
            </div>
          </CardBody>

        </Card>
      </div>
    )

    return (
      <Card className="dash-card dash-card--normal">
        <CardHeader className="dash-card-header dash-card-header-comp dash-card-header--normal">
          <span className="dash-card-header-text dash-card-header-text--large dash-comp-body-text">Take home challenge: { user && proj && proj.title }</span>
        </CardHeader>

        <Form onSubmit={this.completeTask}>
          <CardBody className="dash-card-body dash-card-body--normal dash-card-body-comp">
            <div className="padding-vertical--12 padding-horizontal--20">
              <Row>
                <Col xs="8">
                  <h6 className="dash-comp-body-text">About</h6>
                  <p className="dash-comp-card-text">
                    This is a take home challenge. You will complete the following challenge at home using your own computer. 
                    When you're done, submit the link in the textbox below and click the submit button. You will be judged on your code quality,
                    the languages you used and programming concepts (use of: design patters, algorithms, data structures, databases, user experience,
                    etc.)
                  </p>
                  <h6 className="dash-comp-body-text">Objective</h6>
                  <p className="dash-comp-card-text" style={{marginBottom: '0'}}>{ user && proj && proj.objective }</p>
                  <ul style={{margin: '0 0 16px 16px', padding: '0'}}>
                    <li className="dash-comp-card-text" style={{margin: '0', padding: '0'}}>User story 1: { user && proj && proj.userStory1 }</li>
                    <li className="dash-comp-card-text" style={{margin: '0', padding: '0'}}>User story 2: { user && proj && proj.userStory2 }</li>
                    <li className="dash-comp-card-text" style={{margin: '0', padding: '0'}}>User story 3: { user && proj && proj.userStory3 }</li>
                  </ul>
                  <h6 className="dash-comp-body-text" style={{marginBottom: '0'}}>Submission</h6>
                  <input type="url" onChange={this.complete} placeholder="URL link to github repository" className="dash-form-element dash-input dash-form-element--normal dash-comp-input margin-right--8" />
                  <button className="btn dash-btn dash-btn-comp-primary margin-left--8" type="submit" value="click me">Submit</button>
                </Col>
              </Row>
            </div>
          </CardBody>
        </Form>

      </Card>
    )
  }
}

export default connect(mapState, actions)(firestoreConnect([{collection: 'users'}])(Challenge));