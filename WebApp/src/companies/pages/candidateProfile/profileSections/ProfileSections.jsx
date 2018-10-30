import React, { Component } from 'react'
import { Row, Col, Card, CardHeader, NavItem, NavLink, TabContent, TabPane } from 'reactstrap'
import classnames from 'classnames';
import CardBodyMedium from '../../../components/ui/CardBodyMedium';
import ProfileAbout from './profileAbout/ProfileAbout';
import ProfileReport from './profileReport/ProfileReport';
import ProfileExperience from './profileExperience/ProfileExperience';

class ProfileSections extends Component {

  state = {
    activeTab: '1'
  }

  toggle = (tab) => () => {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab
      });
    }
  }

  candidateSkills = (candidate) => {
    console.log(candidate)
  }

  render() {
    const { candidate } = this.props;
    return (
      <Card className="dash-card-tabs dash-card--normal">
        <CardHeader className="dash-card-header dash-card-header-comp dash-card-header-tabs">
          <div className="dash-card-header--normal">
            <span className="dash-card-header-text dash-card-header-text--normal dash-comp-body-text">More info</span>
          </div>
          <Row className="tabs-row">
            <Col md="4" className="tabs-col">
              <NavItem className="tabs-item">
                <div className={classnames({ active: this.state.activeTab === '1' })}><NavLink onClick={this.toggle('1')}><span className="tab-link">About</span></NavLink></div>
              </NavItem>
            </Col>
            <Col md="4" className="tabs-col">
              <NavItem className="tabs-item">
                <div className={classnames({ active: this.state.activeTab === '2' })}><NavLink onClick={this.toggle('2')}><span className="tab-link">Statistical report</span></NavLink></div>
              </NavItem>
            </Col>
            <Col md="4" className="tabs-col">
              <NavItem className="tabs-item">
                <div className={classnames({ active: this.state.activeTab === '3' })}><NavLink onClick={this.toggle('3')}><span className="tab-link">Experience</span></NavLink></div>
              </NavItem>
            </Col>
          </Row>
        </CardHeader>

        <CardBodyMedium>
          <TabContent activeTab={this.state.activeTab} className="padding-bottom--20">
            <TabPane tabId="1">
              <Row>
                <ProfileAbout candidate={candidate} />
              </Row>
            </TabPane>
            <TabPane tabId="2">
              <Row>
                <ProfileReport candidate={candidate} />
              </Row>
            </TabPane>
            <TabPane tabId="3">
              <Row>
                <ProfileExperience candidate={candidate} />
              </Row>
            </TabPane>
          </TabContent>
        </CardBodyMedium>
      </Card>
    )
  }
}

export default ProfileSections;
