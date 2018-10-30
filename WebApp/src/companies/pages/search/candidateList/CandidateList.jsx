import React, { Component } from 'react';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
// COMPONENTS
import CandidateListItem from './CandidateListItem';

const mapState = (state) => {
  let users = state.firestore.ordered.users;
  let candidates = [];
  if (users != null && users.length > 0) {
    candidates = users.filter(user => user.userType === 'candidate');
  }
  return {
    candidates: candidates
  }
}

class CandidateList extends Component {
  render() {
    const {candidates, positions, user, addToPosition} = this.props;
    return (
      <React.Fragment>
        {candidates.map((candidate) => (
          candidate.stage1 && candidate.stage2 && candidate.stage3 && <CandidateListItem key={candidate.id} candidate={candidate} positions={positions} user={user} addToPosition={addToPosition}></CandidateListItem>
        ))}
      </React.Fragment>
    )
  }
}

export default connect(mapState, null)(firestoreConnect([{collection: 'users'}])(CandidateList));
