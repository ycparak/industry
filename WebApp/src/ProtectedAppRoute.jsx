import React, { Component } from 'react'
import { Route, Redirect, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { withFirebase } from 'react-redux-firebase';

const mapState = (state) => ({
  auth: state.firebase.auth,
  user: state.firebase.profile
})

class ProtectedAppRoute extends Component {

  state = {
    authenticated: true
  }

  render() {
    const {user, auth, layout, component, ...rest} = this.props;
    const { authenticated } = this.state;
    return (
      <Route 
        {...rest} render={(props) => (
          authenticated
          ?  React.createElement(layout, props, React.createElement(component, props))
          :  <Redirect to='/' />
        )
      }/>
    )
  }
}

export default withRouter(withFirebase((connect(mapState, null)(ProtectedAppRoute)))); 