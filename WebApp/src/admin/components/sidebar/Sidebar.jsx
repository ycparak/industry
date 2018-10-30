import React, { Component } from 'react';
import { connect } from 'react-redux';
import { NavLink as RRNavLink } from 'react-router-dom';
import { withRouter } from 'react-router-dom';
import { withFirebase } from 'react-redux-firebase';

// STYLING
import { NavLink } from 'reactstrap';
import FontAwesome from 'react-fontawesome';

const mapState = (state) => ({
  user: state.firebase.profile
})


class Sidebar extends Component {
  render() {
    return (
      <div className="dash-sidebar">
        <div className="dash-sidebar-content">

          <div className="dash-sidebar-content-box">
            <ul className="dash-sidebar-list">
              <li className="dash-sidebar-list-item">
                <div className="dash-sidebar-item">
                  <NavLink to='/admin' className="dash-sidebar-link dash-comp-sidebar-link" activeClassName="dash-sidebar-link-active dash-comp-sidebar-link-active" tag={RRNavLink} exact>
                    <span className="dash-sidebar-nav-icon dash-comp-sidebar-nav-icon"><FontAwesome name="home"></FontAwesome></span>
                    <span className="dash-sidebar-nav-text dash-comp-sidebar-text">Home</span>
                  </NavLink>
                </div>
              </li>
            </ul>
          </div>

          <div className="dash-sidebar-content-box padding-vertical--16">
            <ul className="dash-sidebar-list">
              <li>
                <div className="dash-sidebar-item">
                  <NavLink to='/admin/analytics' className="dash-sidebar-link dash-comp-sidebar-link" activeClassName="dash-sidebar-link-active dash-comp-sidebar-link-active" tag={RRNavLink} exact>
                    <span className="dash-sidebar-nav-icon dash-comp-sidebar-nav-icon"><FontAwesome name="bar-chart"></FontAwesome></span>
                    <span className="dash-sidebar-nav-text dash-comp-sidebar-text">Analytics and KPI's</span>
                  </NavLink>
                </div>
              </li>
            </ul>
          </div>

          <div className="dash-sidebar-content-box">
            <ul className="dash-sidebar-list">
              <li>
                <div className="dash-sidebar-item">
                  <NavLink to='/candidate/profile' className="dash-sidebar-link dash-comp-sidebar-link" activeClassName="dash-sidebar-link-active dash-comp-sidebar-link-active" tag={RRNavLink}>
                    <span className="dash-sidebar-nav-icon dash-comp-sidebar-nav-icon"><FontAwesome name="briefcase"></FontAwesome></span>
                    <span className="dash-sidebar-nav-text dash-comp-sidebar-text">My profile</span>
                  </NavLink>
                </div>
              </li>
              <li>
                <div className="dash-sidebar-item">
                  <NavLink to='/candidate/settings' className="dash-sidebar-link dash-comp-sidebar-link" activeClassName="dash-sidebar-link-active dash-comp-sidebar-link-active" tag={RRNavLink}>
                    <span className="dash-sidebar-nav-icon dash-comp-sidebar-nav-icon"><FontAwesome name="cog"></FontAwesome></span>
                    <span className="dash-sidebar-nav-text dash-comp-sidebar-text">My settings</span>
                  </NavLink>
                </div>
              </li>
            </ul>
          </div>

        </div>
      </div>
    )
  }
}

export default withRouter(withFirebase((connect(mapState, null)(Sidebar))));