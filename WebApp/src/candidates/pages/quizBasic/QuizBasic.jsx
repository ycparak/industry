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

class QuizBasic extends Component {
  render() {
    const { user } = this.props;
    if (user.stage3) return (
      <div>
        <Card className="dash-card dash-card--normal">
          <CardHeader className="dash-card-header dash-card-header-comp dash-card-header--normal">
            <span className="dash-card-header-text dash-card-header-text--large dash-comp-body-text">Quiz challenge</span>
          </CardHeader>

          {
            user.stage3 && <div className="dash-card-body dash-card-body-comp dash-card-body--special-warning">
              <span>Your submission has been registered</span>
            </div>
          }

          <CardBody className="dash-card-body dash-card-body--normal dash-card-body-comp">
            <div className="padding-horizontal--20">
              <Row>
                { 
                  user.stage3 &&
                  <div className="padding-bottom--12 padding-horizontal--12 dash-card-body-comp dash-card-divider-white">
                    <div className="">
                      <Link to="/candidate/take-home" className="btn dash-btn dash-btn-comp-primary margin-right--4 margin-top--8">Complete the take home challenge &rarr;</Link>
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
            <span className="dash-card-header-text dash-card-header-text--large dash-comp-body-text">Quiz challenge</span>
          </CardHeader>

          <CardBody className="dash-card-body dash-card-body--normal dash-card-body-comp">
            <div className="padding-vertical--12 padding-horizontal--20">
              <span className="dash-form-small-text dash-comp-card-text">
                Welcome to the first challenge. A multiple choice based quiz.
                This quiz will test you on your knowledge of your skills so we can get an assesment of what your top competencies are.
                You do not need to study/prepare for this quiz. 
                You will be given 30 minutes to complete the quiz, so make sure you have a stable internet connection and have no other commitments for the next 30 minutes.
                If for some reason you are unable to complete the quiz you will be given only one more opportunity to do so.
                Goodluck. <a target="_blank" className="dash-link dash-comp-link font-weight--500" href="/guides/company">Learn more about this quiz &rarr;</a>
              </span>
            </div>
          </CardBody>

          <CardFooter className="dash-card-footer dash-card-footer--normal padding-horizontal--20 padding-vertical--12">
            <Link className="btn dash-btn dash-btn-comp-primary margin-right--4" to='/candidate/quiz-basic/challenge'>Start the quiz &rarr;</Link>
          </CardFooter>

        </Card>
      </React.Fragment>
    )
  }
}

export default connect(mapState, null)(firestoreConnect([{collection: 'users'}])(QuizBasic));
