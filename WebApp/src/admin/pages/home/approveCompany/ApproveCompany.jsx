import React, { Component } from 'react';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
// CSS
import { Card, CardBody } from 'reactstrap';
// COMPONENTS
import RequestItem from './requestItem/RequestItem';
import CardHeaderMedium from '../../../../companies/components/ui/CardHeaderMedium';
import { acceptUser, rejectUser } from '../approveActions';

const mapState = (state) => {
  let companies = [];
  let users = [];
  let unorderdUsers = state.firestore.ordered.users;

  if (unorderdUsers != null && unorderdUsers.length > 0) {
    companies = unorderdUsers.filter(company => company.userType === 'company');
    users = companies.filter(user => user.approvalStatus === 'pending' && user.stage3 === true);
  }

  return {
    users,
  }
}

const actions = {
  acceptUser,
  rejectUser
}

class ApproveCompany extends Component {

  render() {
    const {users, acceptUser, rejectUser} = this.props;
    return (
      <Card className="dash-card dash-card--normal">
        <CardHeaderMedium>Activate companies</CardHeaderMedium> 
        <CardBody className="dash-card-body dash-card-body--normal dash-card-body-comp">
          <div className="padding-horizontal--20">
            {
              users.length !== 0 ? <RequestItem users={users} acceptUser={acceptUser} rejectUser={rejectUser} /> : <div className="padding-vertical--16 dash-color-comp-card">No new companies to activate at this time</div> 
            }
          </div>
        </CardBody>
      </Card>
    )
  }
}

export default connect(mapState, actions)(firestoreConnect([{collection: 'users'}])(ApproveCompany));
