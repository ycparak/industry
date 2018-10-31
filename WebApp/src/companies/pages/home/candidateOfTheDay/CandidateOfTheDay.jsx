import React, { Component } from 'react';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { Radar } from 'react-chartjs-2'; 
import { Link } from 'react-router-dom';
import { Row, Col, Card, CardHeader, CardBody } from 'reactstrap';
import AddToPosition from '../../../components/addToPosition/AddToPosition';
import FontAwesome from 'react-fontawesome';

const mapState = (state, ownProps) => {
  let users = state.firestore.ordered.users;
  let user = state.firebase.profile;
  let auth = state.firebase.auth;
  let positions = state.firestore.ordered.positions;
  let candidate = {};
  let userPositions = [];

  if (users != null) {
    candidate = users.filter(user => user.id === 'jnZhtHDe7GMHVLtmnl5YomJgOgV2')
  }

  if (positions != null && user != null) {
    if (positions.length > 0) {
      userPositions = positions.filter(position => position.userId === auth.uid);
      console.log(userPositions);
    }
  }

  return {
    candidate: candidate[0],
    user: user,
    positions: userPositions,
    loading: state.async.loading
  }
}

class CandidateOfTheDay extends Component {

  getRandomizedDigits = (min, max, skills) => {
    let arry = [];
    for (var i = 0; i < skills; i++) {
      arry.push(Math.floor(Math.random() * (max - min + 1)) + min);
    }
    return arry;
  }

  render() {
    const {candidate, positions, user} = this.props;
    return (
      <React.Fragment>
        { candidate && <Card className="dash-card dash-card--normal">
        <CardHeader className="dash-card-header dash-card-header-comp dash-card-header--normal">
          <Row>
            <Col>
              <span className="dash-card-header-profile-image margin-right--12">
                <img src={candidate.photoURL} className="profile-icon profile-icon-image" alt="Candidate profile" />
              </span>
              <span className="dash-card-header-text dash-card-header-text--normal header-next-to-image dash-comp-body-text">{ user.approved ? <span>{candidate.name} {candidate.surname}</span> : <span>Anonomous</span>}</span>
            </Col>
            <Col className="text-right">
              <AddToPosition positions={positions} candidate={candidate} user={user} />
              <Link to={`/company/candidate/${candidate.id}`} className="btn dash-btn dash-btn-comp margin-left--4">View full profile</Link>
            </Col>
          </Row>
        </CardHeader>

        <div className="dash-card-body dash-card-body-comp dash-card-body--special">
          <span>Candidate of the day</span>
        </div>

        <CardBody className="dash-card-body dash-card-body--normal dash-card-body-comp">
          <div className="padding-horizontal--20 padding-top--20 padding-bottom--4">
            <Row className=""> 
              <Col lg="4" className="dash-internal-card-col">
                <Radar
                  height = {200}
                  data={{
                    labels: candidate.skills,
                    datasets: [
                      {
                        label: candidate.name && candidate.surname,
                        data: this.getRandomizedDigits(3, 10, candidate.skills.length),
                        fill: true,
                        backgroundColor: 'rgba(112, 102, 255, 0.5)',
                        borderColor: '#7066FF',
                        pointHitRadius: 50,
                      },
                      {
                        label: "Average",
                        data: this.getRandomizedDigits(1, 10, candidate.skills.length),
                        fill: true,
                        backgroundColor: 'rgba(102, 183, 255, 0.5)',
                        borderColor: '#66B7FF',
                        pointHitRadius: 50,
                        hoverBackgroundColor: "rgba(232,105,90,0.8)",
                        hoverBorderColor: "orange",
                      }
                    ],
                  }}
                  options={{
                    legend: {
                      display: false,
                    },
                    gridLines: {
                      display: false
                    },
                    scale: {
                      ticks: {
                          maxTicksLimit: 1,
                          display: false,
                      }
                    }
                  }}
                />
              </Col>
              <Col lg="8" className="dash-internal-card-col">
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
      </Card> }
      </React.Fragment>
    )
  }
}

export default connect(mapState, null)(firestoreConnect([{collection: 'users'}])(CandidateOfTheDay));