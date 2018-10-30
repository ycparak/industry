import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { withFirebase } from 'react-redux-firebase';
import { firestoreConnect } from 'react-redux-firebase';

// COMPONENTS
import SignedOutMenu from './menus/SignedOutMenu';
import SignedInMenu from './menus/SignedInMenu';
import LoadingComponent from '../../../shared/layout/LoadingComponent';

// STYLING
import { Navbar, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';
import FontAwesome from 'react-fontawesome';

const mapState = (state) => {

  let auth = state.firebase.auth;
  let users = state.firestore.ordered.users;
  let user = {};

  if (users != null) {
    if (auth.isLoaded && !auth.isEmpty && users.length > 0) {
      user = users.filter(u => u.id === auth.uid)[0];
    }
  }

  return {
    auth: auth,
    user: user,
    loading: state.async.loading
  }
}

class Header extends Component {

  handleSignIn = () => {
    this.props.history.push('/' + this.props.user.userType);
  }


  render() {
    const { auth, loading, user } = this.props;
    const authenticated = auth.isLoaded && !auth.isEmpty;

    if (loading) return <LoadingComponent inverted={false} />
    return (
      <div className="container-fluid">
        <Navbar expand="md" className="nav-visitors">
          <NavbarBrand href="/"><span>industry</span>14</NavbarBrand>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink href="https://github.com/reactstrap/reactstrap">For Candidates <FontAwesome className="down-chev" name="chevron-down"></FontAwesome></NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="https://github.com/reactstrap/reactstrap">For Companies <FontAwesome className="down-chev" name="chevron-down"></FontAwesome></NavLink>
            </NavItem>
          </Nav>
          {authenticated ? <SignedInMenu auth={auth} user={user} /> : <SignedOutMenu signIn={this.handleSignIn} />}
        </Navbar>
      </div>
    );
  }
}

export default withRouter(withFirebase(connect(mapState, null)(firestoreConnect([{collection: 'users'}])(Header))));