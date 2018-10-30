import React, {Component} from 'react';
import classnames from 'classnames';
import { ModalHeader, TabContent, TabPane, Nav, NavItem, NavLink } from 'reactstrap';

import CandidateSignup from './CandidateSignup';
import CompanySignup from './CompanySignup';

class Signup extends Component {

  state = {
    activeTab: '2'
  }

  toggleTab = (tab) => {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab
      });
    }
  }

  render() {
    return (
      <React.Fragment>
        <ModalHeader className="dash-modal-header padding-horizontal--20 padding-vertical--16">
          <Nav tabs>
            <NavItem>
              <NavLink className={classnames({ active: this.state.activeTab === '1' })} onClick={() => { this.toggleTab('1'); }}>
                <span className="dash-modal-header-text--small dash-comp-body-text">For candidates</span>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink className={classnames({ active: this.state.activeTab === '2' })} onClick={() => { this.toggleTab('2'); }}>
                <span className="dash-modal-header-text--small dash-comp-body-text">For companies</span>
              </NavLink>
            </NavItem>
          </Nav>
        </ModalHeader>

        <TabContent activeTab={this.state.activeTab}>
          <TabPane tabId="1">
            <CandidateSignup />
          </TabPane>

          <TabPane tabId="2">
            <CompanySignup />
          </TabPane>
        </TabContent>

      </React.Fragment>
    )
  }
}

export default Signup;
