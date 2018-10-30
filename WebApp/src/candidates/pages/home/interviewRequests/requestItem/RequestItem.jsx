import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'
import { firestoreConnect } from 'react-redux-firebase';
import { Row, Col } from 'reactstrap';
import FontAwesome from 'react-fontawesome';

const mapState = (state, ownProps) => {
  let companies = [];
  let positions = ownProps.positions;
  let users = state.firestore.ordered.users;
  let me = state.firebase.profile;

  if (positions.length > 0 && users != null) {
    positions.map(position => (
      users.map(user => {
        if (position.userId === user.id) companies.push(user)
      })
    ))
  }

  return {
    companies,
    me
  }
}

class RequestItem extends Component {

  handleAcceptRequest = (positionID, candidateID, candidate, interview, message) => () => {
    this.props.acceptInterviewRequest(positionID, candidateID, candidate, interview, message);
  }

  handleRejectRequest = (positionID, candidateID, candidate, interview, message) => () => {
    this.props.rejectInterviewRequest(positionID, candidateID, candidate, interview, message);
  }

  render() {
    const {positions, requests, companies, user, me} = this.props;
    return (
      <React.Fragment>
        { requests && requests.map((request, index) => 
          request && request.status === 'pending' && request.stage === 'interviewExtended' &&
          <Row key={index} className="dash-card-request-row padding-top--16 padding-bottom--8 dash-card-divider-white">
            { companies[index] && 
              <React.Fragment>
                <Col md="3">
                  <div>
                    <div className="dash-card-body-profile">
                      <div className="display-inline-block dash-card-body-profile-info dash-card-header-profile-image margin-right--12">
                        <span className="profile-icon profile-icon-image dash-logo-icon dash-comp-icon-link text-center"><FontAwesome className="briefcase-icon" name="briefcase"></FontAwesome></span>                
                      </div>
                      <div className="display-inline-block margin-right--12">
                        <span className="wide-button dash-card-body-profile-text font-weight--500 dash-comp-card-text">{companies[index].companyName}</span>
                        <Link to={`/`} className="wide-button dash-card-body-profile-text dash-comp-link">View profile</Link>
                      </div>
                    </div>
                  </div>
                </Col>

                <Col md="3">
                  <div className="text-left">
                    <button className="btn dash-btn dash-btn-comp margin-horizontal--4">View more info</button>                                        
                  </div>
                </Col>
                
                <Col md="6">
                  <div className="text-right">
                    <button className="btn dash-btn dash-btn-success-fill margin-right--4" onClick={this.handleAcceptRequest(positions[index].id, user.uid, me, request.interviewDate, request.message)}>Accept</button>                    
                    <button className="btn dash-btn dash-btn-danger-fill margin-left--4" onClick={this.handleRejectRequest(positions[index].id, user.uid, me, request.interviewDate, request.message)}>Reject</button>                    
                  </div>
                </Col>
              </React.Fragment>
            }
          </Row>
        )}
      </React.Fragment>
    )
  }
}

export default connect(mapState, null)(firestoreConnect([{collection: 'users'}])(RequestItem));
