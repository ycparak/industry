import React, { Component } from 'react';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';

import PublicDetails from './publicDetails/PublicDetails';
import PrivateDetails from './privateDetails/PrivateDetails';
import { updateCompSettings } from './settingsActions'

const actions = {
  updateCompSettings
};

const mapState = (state) => ({
  user: state.firebase.profile
})

class Settings extends Component {
  render() {
    const {user, updateCompSettings} = this.props;
    return (
      <React.Fragment>
        <PublicDetails updateCompSettings={updateCompSettings} initialValues={user} />
        <PrivateDetails updateCompSettings={updateCompSettings} initialValues={user} />
      </React.Fragment>
    )
  }
}

export default connect(mapState, actions)(firestoreConnect([{collection: 'users'}])(Settings));