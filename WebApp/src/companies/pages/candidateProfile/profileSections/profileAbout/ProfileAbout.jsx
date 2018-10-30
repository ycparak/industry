import React, { Component } from 'react'
import { Col } from 'reactstrap'; 

class ProfileAbout extends Component {
  render() {
    const { candidate } = this.props;
    return (
      <Col xs="8">
        <h6 className="dash-p-header dash-comp-body-text">About</h6>
        <p className="padding-bottom--12 dash-comp-card-text">{ candidate.about }</p>
        <h6 className="dash-p-header dash-comp-body-text">How I keep my skills sharp</h6>
        <p className="padding-bottom--12 dash-comp-card-text">{ candidate.skillsSharp }</p>
        <h6 className="dash-p-header dash-comp-body-text">What I'd like to do next</h6>
        <p className="padding-bottom--12 dash-comp-card-text">{ candidate.doNext }</p>
        <h6 className="dash-p-header dash-comp-body-text">What type of company I'd like to work at next</h6>
        <p className="padding-bottom--12 dash-comp-card-text">{ candidate.companyTypeNext }</p>
      </Col>
    )
  }
}

export default ProfileAbout;