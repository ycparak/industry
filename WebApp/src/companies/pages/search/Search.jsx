import React, { Component } from 'react';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { addToPosition } from '../../actions/positions/positionCandActions';

// COMPONENTS
import FilterCandidates from './filterCandidates/FilterCandidates';
import CandidateList from './candidateList/CandidateList';

const mapState = (state) => {
  let userPositions = [];
  let positions = state.firestore.ordered.positions;
  let user = state.firebase.profile;
  let auth = state.firebase.auth;
  if (positions != null && user != null) {
    if (positions.length > 0) {
      userPositions = positions.filter(position => position.userId === auth.uid);

    }
  }
  return {
    positions: userPositions,
    user: user,
    loading: state.async.loading
  }
}

const actions = {
  addToPosition
}

class Search extends Component {

  render() {
    const {positions, user, addToPosition} = this.props;
    return (
      <React.Fragment>
        <FilterCandidates />
        <div className="candidate-list">
          <CandidateList positions={positions} user={user} addToPosition={addToPosition} />
        </div>
      </React.Fragment>
    )
  }
}

export default connect(mapState, actions)(firestoreConnect([{collection: 'positions'}])(Search));