import React, { Component } from 'react';
import { connect } from 'react-redux';
import { firestoreConnect, isLoaded, isEmpty } from 'react-redux-firebase';
import {Card, CardHeader} from 'reactstrap';
import ActivateForm from './activateForm.jsx/ActivateForm';
import { activateAccount } from './activateActions';
import LoadingComponent from '../../../shared/layout/LoadingComponent';
import { Link } from 'react-router-dom';

const actions = {
  activateAccount
};

const mapState = (state) => ({
  user: state.firebase.profile
})

class Activate extends Component {
  render() {
    const {user, activateAccount} = this.props;
    if (!isLoaded(user) || isEmpty(user)) return <LoadingComponent inverted={true} />
    return (
      <React.Fragment>
        <Card className="dash-card dash-card--normal">
          <CardHeader className="dash-card-header dash-card-header-comp dash-card-header--normal">
            <span className="dash-card-header-text dash-card-header-text--large text-display--block dash-comp-body-text">Activate your account</span>
            <span className="dash-card-header-text--paragraph dash-comp-card-text">
              We need to learn more about you and your business before you can hire candidates on Industry14. Untill you activate your account, all data is anonymised.
              The information you provide will only be visible to the account owner and administrators. <a target="_blank" className="dash-link dash-comp-link font-weight--500" href="/">Learn more &rarr;</a> 
            </span>
          </CardHeader>
          { 
            user.stage2 
              ? <ActivateForm activateAccount={activateAccount} initialValues={user} user={user} />
              : <div className="padding-top--8 padding-bottom--12 dash-card-divider-white">
                  <div className="padding-horizontal--20">
                    <span className="dash-card-header-text--paragraph dash-comp-card-text">
                      Before you can activate your account you need to fill out your profile. <br />
                      <Link to="/company/profile" className="btn dash-btn dash-btn-comp-primary margin-right--4 margin-top--8">Complete profile &rarr;</Link>
                    </span>
                  </div>
                </div>
          }
        </Card>
      </React.Fragment>
    )
  }
}

export default connect(mapState, actions)(firestoreConnect([{collection: 'users'}])(Activate));