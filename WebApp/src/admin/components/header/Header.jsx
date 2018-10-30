import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { NavLink as RRNavLink } from 'react-router-dom';
import { withFirebase } from 'react-redux-firebase';

// STYLING
import { Navbar, Nav, NavItem, NavLink, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import FontAwesome from 'react-fontawesome';

const mapState = (state) => ({
  auth: state.firebase.auth,
  user: state.firebase.profile
})


class Header extends Component {

  state = {
    activated: false
  }

  handleSignOut = () => {
    this.props.firebase.logout();
    this.props.history.push('/');
  }

  render() {
    const { auth, user } = this.props;
    return (
      <React.Fragment>
        <Navbar className="dash-navbar" expand="xs">
          <Nav className="mr-auto" navbar>
            {/* name */}
            <NavLink to="/admin" className="dash-logo cursor-pointer">
              <span className="dash-logo-icon dash-comp-icon-link"><FontAwesome className="" name="user"></FontAwesome></span>
              <span className="dash-logo-text dash-comp-nav-link">{user.name} {user.surname}</span>
            </NavLink>
          </Nav>
        
          <Nav className="ml-auto" navbar>
            {/* Guides Dropdown */}
            <UncontrolledDropdown nav inNavbar className="dash-dropdown-icon">
              <DropdownToggle nav>
                <div className="dash-nav-icon icon-dropdown dash-comp-icon-link text-center">
                  <FontAwesome className="" name="book"></FontAwesome>
                </div>
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem className="dash-dropdown-header-header">
                  <span className="dash-header-dropdown-header-text">Guides</span><br />
                </DropdownItem>
                <DropdownItem divider />
                <DropdownItem>
                  <NavLink href="/guides/company" className="dash-header-dropdown-text">Guide 1</NavLink>
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>

            {/* Notifications Dropdown */}
            <UncontrolledDropdown nav inNavbar className="dash-dropdown-icon">
              <DropdownToggle nav>
                <div className="dash-nav-icon icon-dropdown dash-comp-icon-link text-center">
                  <FontAwesome className="" name="bell"></FontAwesome>
                </div>
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem className="dash-dropdown-header-header">
                  <span className="dash-header-dropdown-header-text">Notifications</span><br />
                </DropdownItem>
                <DropdownItem divider />
                <DropdownItem>
                  <NavLink href="/admin/profile" className="dash-header-dropdown-text"></NavLink>
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>

            {/* Profile Dropdown */}
            <UncontrolledDropdown nav inNavbar className="dash-dropdown-icon">
              <DropdownToggle nav>
                <div className="dash-nav-icon icon-dropdown profile-icon--link profile-icon--small dash-comp-icon-link text-center">
                  <FontAwesome className="" name="user"></FontAwesome>
                </div>
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem className="dash-dropdown-header-header">
                  <span className="dash-header-dropdown-header-text">{auth.email}</span><br />
                </DropdownItem>
                <DropdownItem divider />
                <DropdownItem>
                  <NavLink href="/candidate/profile" className="dash-header-dropdown-text">Profile</NavLink>
                </DropdownItem>
                <DropdownItem>
                  <NavLink href="/candidate/settings" className="dash-header-dropdown-text">Settings</NavLink>
                </DropdownItem>
                <DropdownItem>
                  <NavLink onClick={this.handleSignOut} href="#" className="dash-header-dropdown-text">Sign out</NavLink>
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
        </Navbar>

        <Navbar className="dash-navbar dash-navbar--small-screen" expand="xs">
          <Nav className="mr-auto" navbar>
            {/* Home Link */}
            <NavItem className="dash-nav-item">
              <NavLink to='/candidate' className="dash-nav-link dash-comp-nav-link" activeClassName="dash-nav-link-active dash-comp-nav-link-active" tag={RRNavLink} exact>Home</NavLink>
            </NavItem>

            {/* Chat Link */}
            <NavItem className="dash-nav-item">
              <NavLink to='/candidate/chat' className="dash-nav-link dash-comp-nav-link" activeClassName="dash-nav-link-active dash-comp-nav-link-active" tag={RRNavLink} exact>Chat</NavLink>
            </NavItem>

          </Nav>
        </Navbar>
      </React.Fragment>
    )
  }
}

export default withRouter(withFirebase((connect(mapState, null)(Header))))