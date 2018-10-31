import React, { Component } from 'react';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
// CSS
import { Card, CardBody } from 'reactstrap';
// COMPONENTS
import RequestItem from './requestItem/RequestItem';
import CardHeaderMedium from '../../../../companies/components/ui/CardHeaderMedium';
import { objectToArray } from '../../../../shared/common/util/helpers';
import { acceptOfferLetter, rejectOfferLetter } from '../../../../shared/common/chatActions/ChatActions';

const mapState = (state) => {
  let interviewRequests = [];
  let interviewPositions = [];
  let positions = state.firestore.ordered.positions;
  let user = state.firebase.auth;
  let me = state.firebase.profile;

  if (positions != null && user != null) {
    if (positions.length > 0) {
      interviewPositions = positions.filter(position => position.candidates && objectToArray(position.candidates).filter(obj => obj.id === user.uid)[0]);
      interviewRequests = positions.map(position => position.candidates && objectToArray(position.candidates).filter(obj => obj.id === user.uid)[0]);
    }
  }

  console.log(interviewRequests)

  return {
    interviewPositions: interviewPositions,
    interviewRequests: interviewRequests,
    user: user,
    me: me
  }
}

const actions = {
  acceptOfferLetter,
  rejectOfferLetter
}

class OfferLetter extends Component {

  render() {
    const {user, interviewPositions, interviewRequests, acceptOfferLetter, rejectOfferLetter, me} = this.props;
    return (
      <Card className="dash-card dash-card--normal">
        <CardHeaderMedium>Offer Letters</CardHeaderMedium> 
        {!me.approved && <div className="dash-card-body dash-card-body-comp dash-card-body--special-warning">
          <span>Complete all 7 sign up steps first</span>
        </div>}

        <CardBody className="dash-card-body dash-card-body--normal dash-card-body-comp">
          <div className="padding-horizontal--20">
            <RequestItem user={user} positions={interviewPositions} requests={interviewRequests} acceptOfferLetter={acceptOfferLetter} rejectOfferLetter={rejectOfferLetter} />
          </div>
        </CardBody>
      </Card>
    )
  }
}

export default connect(mapState, actions)(firestoreConnect([{collection: 'positions'}])(OfferLetter));