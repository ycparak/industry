import React, { Component } from 'react';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';

import Details from './details/Details';
import { updateCompUserSettings } from './userSettingsActions'

const actions = {
  updateCompUserSettings
};

const mapState = (state) => ({
  user: state.firebase.auth
})

class UserSettings extends Component {
  render() {
    const {user, updateCompUserSettings} = this.props;
    return (
      <React.Fragment>
        <Details updateCompSettings={updateCompUserSettings} initialValues={user} user={user} />
      </React.Fragment>
    )
  }
}

export default connect(mapState, actions)(firestoreConnect([{collection: 'users'}])(UserSettings));