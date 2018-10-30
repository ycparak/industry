import React, { Component } from 'react';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';

import CompUserDetails from './compUserDetails/CompUserDetails';
import { updateCompUserProfile } from './userProfileActions'

const actions = {
  updateCompUserProfile
};

const mapState = (state) => ({
  user: state.firebase.profile
})

class UserProfile extends Component {
  render() {
    const {user, updateCompUserProfile} = this.props;
    return (
      <React.Fragment>
        <CompUserDetails updateCompSettings={updateCompUserProfile} initialValues={user} user={user} />
      </React.Fragment>
    )
  }
}

export default connect(mapState, actions)(firestoreConnect([{collection: 'users'}])(UserProfile));