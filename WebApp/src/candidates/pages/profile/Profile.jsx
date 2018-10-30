import React, { Component } from 'react';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';

import CompDetails from './details/Details';
import CompSummary from './summary/Summary';
// import CompPhotos from './photos/Photos';
import { updateCandProfile } from './profileActions'

const actions = {
  updateCandProfile,
};

const mapState = (state) => ({
  auth: state.firebase.auth,
  user: state.firebase.profile
})

class Profile extends Component {

  render() {
    const {user, updateCandProfile} = this.props;
    return (
      <React.Fragment>
        <CompDetails updateCandSettings={updateCandProfile} initialValues={user} user={user} />
        {/*<CompPhotos />*/}
        <CompSummary updateCandSettings={updateCandProfile} initialValues={user} user={user} />
      </React.Fragment>
    )
  }
}

export default connect(mapState, actions)(firestoreConnect([{collection: 'users'}])(Profile));