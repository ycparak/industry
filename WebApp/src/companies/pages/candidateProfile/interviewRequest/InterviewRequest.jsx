import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { firestoreConnect } from 'react-redux-firebase'
import { Modal, ModalHeader, ModalBody } from 'reactstrap';

import Form from './form/Form';
import { sendInterviewRequests } from '../../../../shared/common/chatActions/ChatActions';
import { objectToArray } from '../../../../shared/common/util/helpers';

const actions = {
  sendInterviewRequests
}

const mapState = (state, ownProps) => {
  let userPositions = [];
  let interviewRequest = {};
  let interviewPosition = {};
  let positions = state.firestore.ordered.positions;
  let user = state.firebase.auth;

  if (positions != null && user != null && ownProps.candidate != null) {
    if (positions.length > 0) {
      userPositions = positions.filter(position => position.userId === user.uid);
      if (userPositions.length > 0) {
        interviewPosition = userPositions.filter(position => position.candidates && objectToArray(position.candidates).filter(obj => obj.id === ownProps.candidate.id)[0])[0];
        interviewRequest = userPositions.map(position => position.candidates && objectToArray(position.candidates).filter(obj => obj.id === ownProps.candidate.id)[0])[0];
      }
    }
  }

  return {
    positions: userPositions,
    interviewPosition: interviewPosition,
    interviewRequest: interviewRequest
  }
}

class InterviewRequest extends Component {

  state = {
    chat: false
  }

  toggleChat = () => {
    this.setState({
      chat: !this.state.chat
    });
  }

  render() {
    const { candidate, positions, sendInterviewRequests, interviewPosition, interviewRequest } = this.props;
    return (
      <React.Fragment>
        {/* If interview request sent, then change the name of the button */}
        { candidate && <button type="button" onClick={this.toggleChat} className="btn dash-btn dash-btn-comp-primary margin-right--4">Request interview</button> }

        <Modal isOpen={this.state.chat} toggle={this.toggleChat}>
          <ModalHeader className="dash-modal-header padding-horizontal--20">
            <div className="dash-card-body-profile">
              <div className="display-inline-block dash-card-body-profile-info dash-card-header-profile-image margin-right--12">
                { candidate && <img src={candidate.photoURL} className="profile-icon profile-icon-image" alt="Candidate profile" />}
              </div>
              <div className="display-inline-block margin-right--12">
                { candidate && <span className="wide-button dash-card-body-profile-text font-weight--500 dash-comp-body-text">{candidate.name} {candidate.surname}</span>}
                { candidate && <span className="wide-button dash-card-body-profile-text dash-card-body-profile-text--small">{ candidate.role }</span>}
              </div>
            </div>
          </ModalHeader>

          { interviewRequest && <ModalBody className="dash-modal-body dash-comp-modal-body padding-horizontal--20 padding-top--20 dash-card-divider-white">
            <span>{interviewRequest.message}</span>
            <Link to={`/company/positions/${interviewPosition.id}`}>View position infomation</Link>
            {/* Display all the information regarding the interview request */}
          </ModalBody> }

          {/* If interview request sent, then hide th form */}
          <Form candidate={candidate} positions={positions} sendInterviewRequests={sendInterviewRequests} />

        </Modal>

      </React.Fragment>
    )
  }
}

export default connect(mapState, actions)(firestoreConnect([{collection: 'positions'}])(InterviewRequest));