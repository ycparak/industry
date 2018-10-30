import React, { Component } from 'react'
import { Col } from 'reactstrap';

export default class ProfileExperience extends Component {
  render() {
    const { candidate } = this.props;
    return (
      <div>
        <Col xs="8">
          <h6 className="dash-p-header dash-comp-body-text">2015 - 2018 | Triplebyte | Technical Team Lead - Product Divsion</h6>
          <p className="padding-bottom--12 dash-comp-card-text">{ candidate.myExperience }</p>
          <h6 className="dash-p-header dash-comp-body-text">2012 - 2015 | Ecom Institute | Software Developer</h6>
          <p className="padding-bottom--12 dash-comp-card-text">{ candidate.myExperience }</p>
          <h6 className="dash-p-header dash-comp-body-text">2010 - 2012 | Spotify | Junior Software Developer</h6>
          <p className="padding-bottom--12 dash-comp-card-text">{ candidate.myExperience }</p>
        </Col>
      </div>
    )
  }
}
