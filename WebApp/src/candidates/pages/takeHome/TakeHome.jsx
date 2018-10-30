import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Card, CardHeader, CardBody, CardFooter, Row } from 'reactstrap';

import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';

const mapState = (state) => {
  return {
    user: state.firebase.profile,
  }
}

class TakeHome extends Component {
  render() {
    const { user } = this.props;
    if (user.takeHomeFinished) return (
      <div>
        <Card className="dash-card dash-card--normal">
          <CardHeader className="dash-card-header dash-card-header-comp dash-card-header--normal">
            <span className="dash-card-header-text dash-card-header-text--large dash-comp-body-text">Take home challenge</span>
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
      <React.Fragment>
        <Card className="dash-card dash-card--normal">
          <CardHeader className="dash-card-header dash-card-header-comp dash-card-header--normal">
            <span className="dash-card-header-text dash-card-header-text--large dash-comp-body-text">Take home challenge</span>
          </CardHeader>

          <CardBody className="dash-card-body dash-card-body--normal dash-card-body-comp">
            <div className="padding-vertical--12 padding-horizontal--20">
              <span className="dash-form-small-text dash-comp-card-text">
                Welcome to the third challenge. A take home challenge.
                This quiz will test you on your knowledge of your skills so we can get an assesment of what your top competencies are.
                You do not need to study/prepare for this quiz. 
                You will be given 3 days (72 hours) to complete the quiz. Click the button to start the challenge and you can come back at any time between now and the next 72 hours to submit.
                If for some reason you are unable to complete the quiz you will be given only one more opportunity to do so.
                Goodluck. <a target="_blank" className="dash-link dash-comp-link font-weight--500" href="/guides/company">Learn more about this quiz &rarr;</a>
              </span>
            </div>
          </CardBody>

          <CardFooter className="dash-card-footer dash-card-footer--normal padding-horizontal--20 padding-vertical--12">
            <Link className="btn dash-btn dash-btn-comp-primary margin-right--4" to='/candidate/take-home/challenge'>Start the challenge &rarr;</Link>
          </CardFooter>

        </Card>
      </React.Fragment>
    )
  }
}

export default connect(mapState, null)(firestoreConnect([{collection: 'users'}])(TakeHome));
