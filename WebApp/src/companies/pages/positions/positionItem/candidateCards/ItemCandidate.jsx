import React, {Component} from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { removeCandidate } from '../../positionActions'
import { Col } from 'reactstrap';

const actions = {
  removeCandidate,
}

class ItemCandidate extends Component {

  state = {
    removedCandidate: false
  }

  render() {
    const {candidate, remove} = this.props;
    return (
      <Col key={candidate.id} xs="12" sm="6" md="4" lg="3" className="dash-internal-card-col">
        <div className="dash-card-body-profile">
          <div className="display-inline-block dash-card-body-profile-info dash-card-header-profile-image margin-right--12">
            <span onClick={remove(candidate)} className="dash-card-remove-icon dash-compcard-text">x</span>
            <img src={candidate.photoURL} className="profile-icon profile-icon-image" alt="Candidate profile" />
          </div>
          <div className="display-inline-block margin-right--12">
            <span className="wide-button dash-card-body-profile-text font-weight--500 dash-comp-card-text">{candidate.name} {candidate.surname}</span>
            <Link to={`/company/candidate/${candidate.id}`} className="wide-button dash-card-body-profile-text dash-comp-link">View profile</Link>
          </div>
        </div>
      </Col>
    )
  }
}

export default connect(null, actions)(ItemCandidate)
