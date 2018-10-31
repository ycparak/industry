import React, { Component } from 'react';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { Card, CardHeader, CardBody, Row } from 'reactstrap';
import ActivateForm from './activateForm.jsx/ActivateForm';
import { activateAccount } from './activateActions';
import { Link } from 'react-router-dom';

const actions = {
  activateAccount
};

const mapState = (state) => ({
  user: state.firebase.profile,
})

class Activate extends Component {
  render() {
    const {user, activateAccount} = this.props;
    if (user.stage6) return (
      <div>
        <Card className="dash-card dash-card--normal">
          <CardHeader className="dash-card-header dash-card-header-comp dash-card-header--normal">
            <span className="dash-card-header-text dash-card-header-text--large text-display--block dash-comp-body-text">Activate your account</span>
            <span className="dash-card-header-text--paragraph dash-comp-card-text">
            We need to learn more about you before you can use Industry14. Untill you activate your account, no companies will be able to contact you. <a target="_blank" className="dash-link dash-comp-link font-weight--500" href="/">Learn more &rarr;</a> 
            </span>
          </CardHeader>

          {
            user.stage6 && <div className="dash-card-body dash-card-body-comp dash-card-body--special-warning">
              <span>Your submission has been registered</span>
            </div>
          }

          <CardBody className="dash-card-body dash-card-body--normal dash-card-body-comp">
            <div className="padding-horizontal--20">
              <Row>
                { 
                  user.stage6 &&
                  <div className="padding-bottom--12 padding-horizontal--12 dash-card-body-comp dash-card-divider-white">
                    <div className="">
                      <Link to="/candidate" className="btn dash-btn dash-btn-comp-primary margin-right--4 margin-top--8">Back to home &rarr;</Link>
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
            <span className="dash-card-header-text dash-card-header-text--large text-display--block dash-comp-body-text">Activate your account</span>
            <span className="dash-card-header-text--paragraph dash-comp-card-text">
            We need to learn more about you before you can use Industry14. Untill you activate your account, no companies will be able to contact you. <a target="_blank" className="dash-link dash-comp-link font-weight--500" href="/">Learn more &rarr;</a> 
            </span>
          </CardHeader>
          {
            !user.stage5 && <div className="dash-card-body dash-card-body-comp dash-card-body--special-warning">
              <span>Complete all preceding sign up steps first</span>
            </div>
          }

          { 
            user.stage2 && user.stage4 && user.stage5
              ? <ActivateForm activateAccount={activateAccount} initialValues={user} user={user} />
              : <div className="padding-bottom--12 dash-card-body-comp dash-card-divider-white">
                  <div className="padding-horizontal--20">
                    <Link to="/candidate/profile" className="btn dash-btn dash-btn-comp-primary margin-right--4 margin-top--8">Complete profile &rarr;</Link>
                  </div>
                </div>
          }

        </Card>
      </React.Fragment>
    )
  }
}

export default connect(mapState, actions)(firestoreConnect([{collection: 'users'}])(Activate));