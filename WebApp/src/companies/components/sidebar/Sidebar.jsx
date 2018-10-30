import React, { Component } from 'react';
import { connect } from 'react-redux';
import { NavLink as RRNavLink } from 'react-router-dom';
import { withRouter } from 'react-router-dom';
import { withFirebase, isLoaded, isEmpty } from 'react-redux-firebase';
import LoadingComponent from '../../../shared/layout/LoadingComponent';

// STYLING
import { NavLink } from 'reactstrap';
import FontAwesome from 'react-fontawesome';

const mapState = (state) => ({
  user: state.firebase.profile
})

class Sidebar extends Component {

  render() {
    const { user } = this.props;
    const activated = user.stage1 && user.stage2 && user.stage3;
    if (!isLoaded(user) || isEmpty(user)) return <LoadingComponent inverted={true} />
    
    return (
      <div className="dash-sidebar">
        <div className="dash-sidebar-content">
  
          <div className="dash-sidebar-content-box">
            <ul className="dash-sidebar-list">
              <li className="dash-sidebar-list-item">
                <div className="dash-sidebar-item">
                  <NavLink to='/company' className="dash-sidebar-link dash-comp-sidebar-link" activeClassName="dash-sidebar-link-active dash-comp-sidebar-link-active" tag={RRNavLink} exact>
                    <span className="dash-sidebar-nav-icon dash-comp-sidebar-nav-icon"><FontAwesome name="home"></FontAwesome></span>
                    <span className="dash-sidebar-nav-text dash-comp-sidebar-text">Home</span>
                  </NavLink>
                </div>
              </li>
              {!activated && <li className="dash-sidebar-list-item">
                <div className="dash-sidebar-item">
                  <NavLink to='/company/activate' className="dash-sidebar-link dash-comp-sidebar-link" activeClassName="dash-sidebar-link-active dash-comp-sidebar-link-active" tag={RRNavLink}>
                    <span className="dash-sidebar-nav-icon dash-comp-sidebar-nav-icon"><FontAwesome name="check"></FontAwesome></span>
                    <span className="dash-sidebar-nav-text dash-comp-sidebar-text">Activate company</span>
                    <span className="activate-circle-notification"></span>
                  </NavLink>
                </div>
              </li> }
            </ul>
          </div>
  
          <div className="dash-sidebar-content-box padding-vertical--16">
            <ul className="dash-sidebar-list">
              <li>
                <div className="dash-sidebar-item">
                  <NavLink to='/company/positions' className="dash-sidebar-link dash-comp-sidebar-link" activeClassName="dash-sidebar-link-active dash-comp-sidebar-link-active" tag={RRNavLink} exact>
                    <span className="dash-sidebar-nav-icon dash-comp-sidebar-nav-icon"><FontAwesome name="folder-open"></FontAwesome></span>
                    <span className="dash-sidebar-nav-text dash-comp-sidebar-text">Positions</span>
                  </NavLink>
                </div>
              </li>
              <li>
                <div className="dash-sidebar-item">
                  <NavLink to='/company/search' className="dash-sidebar-link dash-comp-sidebar-link" activeClassName="dash-sidebar-link-active dash-comp-sidebar-link-active" tag={RRNavLink}>
                    <span className="dash-sidebar-nav-icon dash-comp-sidebar-nav-icon"><FontAwesome name="search"></FontAwesome></span>
                    <span className="dash-sidebar-nav-text dash-comp-sidebar-text">Candidate search</span>
                  </NavLink>
                </div>
              </li>
            </ul>
          </div>
  
          <div className="dash-sidebar-content-box">
            <ul className="dash-sidebar-list">
              <li>
                <div className="dash-sidebar-item">
                  <NavLink to='/company/profile' className="dash-sidebar-link dash-comp-sidebar-link" activeClassName="dash-sidebar-link-active dash-comp-sidebar-link-active" tag={RRNavLink}>
                    <span className="dash-sidebar-nav-icon dash-comp-sidebar-nav-icon"><FontAwesome name="briefcase"></FontAwesome></span>
                    <span className="dash-sidebar-nav-text dash-comp-sidebar-text">Company profile</span>
                    {!user.stage2 && <span className="activate-circle-notification"></span>}
                  </NavLink>
                </div>
              </li>
              <li>
                <div className="dash-sidebar-item">
                  <NavLink to='/company/settings' className="dash-sidebar-link dash-comp-sidebar-link" activeClassName="dash-sidebar-link-active dash-comp-sidebar-link-active" tag={RRNavLink}>
                    <span className="dash-sidebar-nav-icon dash-comp-sidebar-nav-icon"><FontAwesome name="cog"></FontAwesome></span>
                    <span className="dash-sidebar-nav-text dash-comp-sidebar-text">Company settings</span>
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