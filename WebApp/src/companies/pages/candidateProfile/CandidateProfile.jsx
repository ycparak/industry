import React, { Component } from 'react';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { Card } from 'reactstrap'

// COMPONENTS
import ProfileHeader from './profileHeader/ProfileHeader';
import ProfileSections from './profileSections/ProfileSections';


const mapState = (state, ownProps) => {
  let users = state.firestore.ordered.users;
  let user = state.firebase.profile;
  let candidate = {};

  if (users != null) {
    candidate = users.filter(user => user.id === ownProps.match.params.id)
  }

  return {
    candidate: candidate[0],
    user: user,
    loading: state.async.loading
  }
}

class CandidateProfile extends Component {

  render() {
    const { candidate, user } = this.props;
    return (
      <React.Fragment>
        { candidate && 
          <React.Fragment>
            <Card className="dash-card dash-card--normal dash-card--activity">
              <ProfileHeader candidate={candidate} user={user} />
            </Card>
            <ProfileSections candidate={candidate} />
          </React.Fragment>
        }
      </React.Fragment>
    )
  }
}

export default connect(mapState, null)(firestoreConnect([{collection: 'users'}])(CandidateProfile));