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

  handleSignOut = () => {
    this.props.firebase.logout();
    this.props.history.push('/');
  }

  render() {
    const { auth, user } = this.props;
    const activated = user.stage1 && user.stage2 && user.stage3;
    return (
      <React.Fragment>
        <Navbar className="dash-navbar" expand="xs">
          <Nav className="mr-auto" navbar>
            {/* Business name dropdown */}
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav>
                <div className="dash-logo">
                  <span className="dash-logo-icon dash-comp-icon-link"><FontAwesome className="briefcase-icon" name="briefcase"></FontAwesome></span>
                  <span className="dash-logo-text dash-comp-nav-link">{user.companyName}</span>
                  <span className="dash-logo-dropdown-icon dash-comp-icon"><FontAwesome name="chevron-down"></FontAwesome></span>
                </div>
              </DropdownToggle>
              <DropdownMenu left="true">
                <DropdownItem>
                  <NavLink href="/company/profile" className="dash-header-dropdown-text">Company profile</NavLink>
                </DropdownItem>
                <DropdownItem>
                  <NavLink href="/company/settings" className="dash-header-dropdown-text">Company settings</NavLink>
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
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
                  <span><small>administrator</small></span>
                </DropdownItem>
                <DropdownItem divider />
                <DropdownItem>
                  <NavLink href="/company/user-profile" className="dash-header-dropdown-text">Profile</NavLink>
                </DropdownItem>
                <DropdownItem>
                  <NavLink href="/company/user-settings" className="dash-header-dropdown-text">Settings</NavLink>
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
              <NavLink to='/company' className="dash-nav-link dash-comp-nav-link" activeClassName="dash-nav-link-active dash-comp-nav-link-active" tag={RRNavLink} exact>Home</NavLink>
            </NavItem>

            {/* Activate Link */}
            {!activated &&  
            <NavItem className="dash-nav-item">
              <NavLink to='/company/activate' className="dash-nav-link dash-comp-nav-link" activeClassName="dash-nav-link-active dash-comp-nav-link-active" tag={RRNavLink} exact>
                Activate Company
                <span className="activate-circle-notification"></span>
              </NavLink>
            </NavItem>}

            {/* Positions Link */}
            <NavItem className="dash-nav-item">
              <NavLink to='/company/positions' className="dash-nav-link dash-comp-nav-link" activeClassName="dash-nav-link-active dash-comp-nav-link-active" tag={RRNavLink} exact>Positions</NavLink>
            </NavItem>

            {/* Search Link */}
            <NavItem className="dash-nav-item">
              <NavLink to='/company/search' className="dash-nav-link dash-comp-nav-link" activeClassName="dash-nav-link-active dash-comp-nav-link-active" tag={RRNavLink} exact>Search</NavLink>
            </NavItem>

            {/* Chat Link */}
            <NavItem className="dash-nav-item">
              <NavLink to='/company/chat' className="dash-nav-link dash-comp-nav-link" activeClassName="dash-nav-link-active dash-comp-nav-link-active" tag={RRNavLink} exact>Chat</NavLink>
            </NavItem>

          </Nav>
        </Navbar>
      </React.Fragment>
    )
  }
}

export default withRouter(withFirebase((connect(mapState, null)(Header))))