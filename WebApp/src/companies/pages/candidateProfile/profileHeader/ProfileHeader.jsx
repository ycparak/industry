import React from 'react';
import InterviewRequest from '../interviewRequest/InterviewRequest';
import OfferLetter from '../offerLetter/OfferLetter';
import { CardHeader, Row, Col, CardBody } from 'reactstrap';
import FontAwesome from 'react-fontawesome';


const ProfileHeader = ({candidate, user}) => {
  return (
    <React.Fragment>
      <CardHeader className="dash-card-header dash-card-header-comp dash-card-header--normal">
        <Row className="card-header-row">
          <Col md="4" className="card-header-col card-header-col--left">
            <span className="dash-card-header-text dash-card-header-text--large dash-card-header-text--large-bold dash-comp-body-text">{ user.approved ? <span>{candidate.name} {candidate.surname}</span> : <span>Anonomous</span>}</span>
          </Col>
          <Col md="8" className="card-header-col card-header-col--right text-right">
            <InterviewRequest candidate={candidate} />
            <OfferLetter candidate={candidate} />
          </Col>
        </Row>
      </CardHeader>

      { !user.approved && <div className="dash-card-body dash-card-body-comp dash-card-body--special-warning">
          <span>Anonymised user data</span>
        </div>
      }

      <CardBody className="dash-card-body dash-card-body--normal dash-card-body-comp">
        <div className="padding-horizontal--20 padding-top--20 padding-bottom--4">
          <Row className=""> 
            <Col lg="3" className="dash-internal-card-col">
              <img className="full-width-profile" src={candidate.photoURL} alt="profile" />
            </Col>
            <Col lg="9" className="dash-internal-card-col">
              <Row className="margin-bottom--16">
                <Col xs="12">
                  <a className="dash-card-details-item-link color-comp-body-text margin-right--12" href={candidate.personalURL} target="_blank" ><FontAwesome name="user" /></a>
                  <a className="dash-card-details-item-link color-comp-body-text margin-right--12" href={candidate.githubURL} target="_blank" ><FontAwesome name="github" /></a>
                  <a className="dash-card-details-item-link color-comp-body-text margin-right--12" href={candidate.twitterURL} target="_blank"><FontAwesome name="twitter" /></a>
                  <a className="dash-card-details-item-link color-comp-body-text margin-right--12" href={candidate.linkedInURL} target="_blank"><FontAwesome name="linkedin" /></a>
                  <a className="dash-card-details-item-link color-comp-body-text margin-right--12" href={candidate.stackOverflowURL} target="_blank"><FontAwesome name="stack-overflow" /></a>
                  <a className="dash-card-details-item-link color-comp-body-text margin-right--12" href={candidate.dribbbleURL} target="_blank"><FontAwesome name="dribbble" /></a>
                  <a className="dash-card-details-item-link color-comp-body-text margin-right--12" href={candidate.behanceURL} target="_blank"><FontAwesome name="behance" /></a>
                </Col>
              </Row>
              <Row className="margin-bottom--4">
                <Col xs="4">
                  <span className="dash-card-details-item color-comp-icon">Based in</span>
                </Col>
                <Col xs="8">
                  <span className="dash-card-details-item-info color-comp-body-text">{candidate.city}</span>
                </Col>
              </Row>
              <Row className="margin-bottom--4">
                <Col xs="4">
                  <span className="dash-card-details-item color-comp-icon">Wants to work in</span>
                </Col>
                <Col xs="8">
                  <span className="dash-card-details-item-info color-comp-body-text">{candidate.wantsToWorkIn}</span>
                </Col>
              </Row>
              <Row className="margin-bottom--4">
                <Col xs="4">
                  <span className="dash-card-details-item color-comp-icon">Wants to work as a</span>
                </Col>
                <Col xs="8">
                  <span className="dash-card-details-item-info color-comp-body-text">{candidate.role}</span>
                </Col>
              </Row>
              <Row className="margin-bottom--4">
                <Col xs="4">
                  <span className="dash-card-details-item color-comp-icon">Overall experience</span>
                </Col>
                <Col xs="8">
                  <span className="dash-card-details-item-info color-comp-body-text">{candidate.experience} years</span>
                </Col>
              </Row>
              <Row className="margin-bottom--4">
                <Col xs="4">
                  <span className="dash-card-details-item color-comp-icon">Expected salary</span>
                </Col>
                <Col xs="8">
                  <span className="dash-card-details-item-info color-comp-body-text">R{candidate.minSalary} - R{ candidate.maxSalary }</span>
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
                    candidate.skills && candidate.skills.map((skill) => (
                      <span key={skill}> {skill} &#8226; </span>
                    ))
                  }
                  </span>
                </Col>
              </Row>
              <Row className="margin-bottom--4">
                <Col xs="4">
                  <span className="dash-card-details-item color-comp-icon">Description</span>
                </Col>
                <Col xs="8">
                  <span className="dash-card-details-item-info color-comp-body-text">{candidate.description}</span>
                </Col>
              </Row>
            </Col>
          </Row>
        </div>
      </CardBody>
      
    </React.Fragment>
  )
}

export default ProfileHeader;
