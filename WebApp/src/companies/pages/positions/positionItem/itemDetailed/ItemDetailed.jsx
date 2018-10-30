import React from 'react';
import { Row, Col, CardBody } from 'reactstrap';

const ItemDetailed = ({position}) => {
  return (
    <CardBody className="dash-card-body dash-card-body--normal dash-card-body-comp">
      <div className="padding-horizontal--20 padding-top--20 padding-bottom--4">
        <Row className=""> 
          <Col sm="12" md="6" className="dash-internal-card-col">
            <span className="dash-card-details-header color-comp-body-text">Role Information</span>
            <Row className="margin-top--12 margin-bottom--4">
              <Col xs="4">
                <span className="dash-card-details-item color-comp-icon">Role</span>
              </Col>
              <Col xs="8">
                <span className="dash-card-details-item-info color-comp-body-text">{position.role}</span>
              </Col>
            </Row>
            <Row className="margin-bottom--4">
              <Col xs="4">
                <span className="dash-card-details-item color-comp-icon">Seniority</span>
              </Col>
              <Col xs="8">
                <span className="dash-card-details-item-info color-comp-body-text">{position.seniority}</span>
              </Col>
            </Row>
            <Row className="margin-bottom--4">
              <Col xs="4">
                <span className="dash-card-details-item color-comp-icon">Experience</span>
              </Col>
              <Col xs="8">
                <span className="dash-card-details-item-info color-comp-body-text">{position.minExperience} - {position.maxExperience} years</span>
              </Col>
            </Row>
            <Row className="margin-bottom--4">
              <Col xs="4">
                <span className="dash-card-details-item color-comp-icon">Skills</span>
              </Col>
              <Col xs="8">
                <span className="dash-card-details-item-info color-comp-body-text">
                &#8226;
                {
                  position.skills && position.skills.map((skill) => (
                    <span key={skill}> {skill} &#8226; </span>
                  ))
                }
                </span>
              </Col>
            </Row>
            <Row className="margin-bottom--4">
              <Col xs="4">
                <span className="dash-card-details-item color-comp-icon">Salary</span>
              </Col>
              <Col xs="8">
                <span className="dash-card-details-item-info color-comp-body-text">R{position.minSalary} - R{position.maxSalary} mthly.</span>
              </Col>
            </Row>
            <Row className="margin-bottom--4">
              <Col xs="4">
                <span className="dash-card-details-item color-comp-icon">Job spec</span>
              </Col>
              <Col xs="8">
                <span className="dash-card-details-item-info color-comp-body-text">{position.spec}</span>
              </Col>
            </Row>
          </Col>
          <Col sm="12" md="6" className="dash-internal-card-col">
            <span className="dash-card-details-header color-comp-body-text">Position Information</span>
            <Row className="margin-top--12 margin-bottom--4">
              <Col xs="4">
                <span className="dash-card-details-item color-comp-icon">Position title</span>
              </Col>
              <Col xs="8">
                <span className="dash-card-details-item-info color-comp-body-text">{position.title}</span>
              </Col>
            </Row>
            <Row className="margin-bottom--4">
              <Col xs="4">
                <span className="dash-card-details-item color-comp-icon">Team</span>
              </Col>
              <Col xs="8">
                <span className="dash-card-details-item-info color-comp-body-text">{position.team}</span>
              </Col>
            </Row>
            <Row>
              <Col xs="4">
                <span className="dash-card-details-item color-comp-icon">Office address</span>
              </Col>
              <Col xs="8">
                <span className="dash-card-details-item-info color-comp-body-text">{position.address1}</span>
                <span className="dash-card-details-item-info color-comp-body-text">{position.address2}</span>
                <span className="dash-card-details-item-info color-comp-body-text">{position.provence}</span>
                <span className="dash-card-details-item-info color-comp-body-text">{position.zip}</span>
              </Col>
            </Row>
          </Col>
        </Row>
      </div>
    </CardBody>
  )
}

export default ItemDetailed
