import React, { Component } from 'react';
import { Modal, Nav, NavItem, NavLink } from 'reactstrap';
import FontAwesome from 'react-fontawesome';

import Login from '../../auth/login/Login';
import Signup from '../../auth/signup/Signup';

class SignedOutMenu extends Component {

  state = {
    loginModal: false,
    signupModal: false
  }

  toggleLoginForm = () => {
    this.setState({
      loginModal: !this.state.loginModal
    });
  }

  toggleSignupForm = () => {
    this.setState({
      signupModal: !this.state.signupModal
    });
  }

  render() {
    return (
      <React.Fragment>
        <Nav className="ml-auto" navbar>
          <NavItem>
            <NavLink className="navlinkitem">Hire Candidates.</NavLink>
          </NavItem>
          <NavItem>
            <NavLink className="navlinkitem" onClick={this.toggleLoginForm}>Login.</NavLink>
          </NavItem>
          <NavItem>
            <NavLink className='btn btn-navbar btn-cand' onClick={this.toggleSignupForm}>Sign Up <FontAwesome className="arrow-margin" name="long-arrow-right"></FontAwesome></NavLink>
          </NavItem>
        </Nav>
    
        <Modal isOpen={this.state.loginModal} toggle={this.toggleLoginForm} className="dash-modal dash-modal--large">
          <Login toggle={this.toggleLoginForm} />
        </Modal>

        <Modal isOpen={this.state.signupModal} toggle={this.toggleSignupForm} className="dash-modal dash-modal--large">
          <Signup toggle={this.toggleSignupForm} />
        </Modal>
      </React.Fragment>
    )
  }
}

export default SignedOutMenu