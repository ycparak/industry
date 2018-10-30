import React, { Component } from 'react';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';


import CompDetails from './compDetails/CompDetails';
import CompSummary from './compSummary/CompSummary';
import { updateCompProfile } from './profileActions'

const actions = {
  updateCompProfile
};

const mapState = (state) => ({
  user: state.firebase.profile
})

class Profile extends Component {
  render() {
    const {user, updateCompProfile} = this.props;

    return (
      <React.Fragment>
        <CompDetails updateCompSettings={updateCompProfile} initialValues={user} user={user} />
        <CompSummary updateCompSettings={updateCompProfile} initialValues={user} user={user} />
      </React.Fragment>
    )
  }
}

export default connect(mapState, actions)(firestoreConnect([{collection: 'users'}])(Profile));