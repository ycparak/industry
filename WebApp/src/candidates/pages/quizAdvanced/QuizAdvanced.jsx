import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Card, CardHeader, CardBody, CardFooter } from 'reactstrap';

class QuizAdvanced extends Component {
  render() {
    return (
      <React.Fragment>
        <Card className="dash-card dash-card--normal">
          <CardHeader className="dash-card-header dash-card-header-comp dash-card-header--normal">
            <span className="dash-card-header-text dash-card-header-text--large dash-comp-body-text">Advanced Quiz challenge</span>
          </CardHeader>

          <CardBody className="dash-card-body dash-card-body--normal dash-card-body-comp">
            <div className="padding-vertical--12 padding-horizontal--20">
              <span className="dash-form-small-text dash-comp-card-text">
                Welcome to the second challenge. A multiple choice based quiz.
                This quiz will test you on your knowledge of your skills so we can get an assesment of what your top competencies are.
                You do not need to study/prepare for this quiz. 
                You will be given 30 minutes to complete the quiz, so make sure you have a stable internet connection and have no other commitments for the next 30 minutes.
                If for some reason you are unable to complete the quiz you will be given only one more opportunity to do so.
                Goodluck. <a target="_blank" className="dash-link dash-comp-link font-weight--500" href="/guides/company">Learn more about this quiz &rarr;</a>
              </span>
            </div>
          </CardBody>

          <CardFooter className="dash-card-footer dash-card-footer--normal padding-horizontal--20 padding-vertical--12">
            <Link className="btn dash-btn dash-btn-comp-primary margin-right--4" to='/candidate/quiz-challenge/challenge'>Start the quiz &rarr;</Link>
          </CardFooter>

        </Card>
      </React.Fragment>
    )
  }
}

export default QuizAdvanced;
