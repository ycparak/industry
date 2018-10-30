import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { Row, Col } from 'reactstrap';
import FontAwesome from 'react-fontawesome';

class RequestItem extends Component {

  handleAcceptRequest = (ID) => () => {
    this.props.acceptUser(ID);
  }

  handleRejectRequest = (ID) => () => {
    console.log(ID)
    this.props.rejectUser(ID);
  }

  render() {
    const {users} = this.props;
    return (
      <React.Fragment>
        { users && users.map((user, index) => 
          <Row key={index} className="dash-card-request-row padding-top--16 padding-bottom--8 dash-card-divider-white">
            { user && 
              <React.Fragment>
                <Col md="3">
                  <div>
                    <div className="dash-card-body-profile">
                      <div className="display-inline-block dash-card-body-profile-info dash-card-header-profile-image margin-right--12">
                        <span className="profile-icon profile-icon-image dash-logo-icon dash-comp-icon-link text-center"><FontAwesome className="briefcase-icon" name="briefcase"></FontAwesome></span>                
                      </div>
                      <div className="display-inline-block margin-right--12">
                        <span className="wide-button dash-card-body-profile-text font-weight--500 dash-comp-card-text">{user.companyName}</span>
                        <Link to={`/`} className="wide-button dash-card-body-profile-text dash-comp-link">View profile</Link>
                      </div>
                    </div>
                  </div>
                </Col>

                <Col md="3">
                  <div className="text-left">
                    <button className="btn dash-btn dash-btn-comp margin-horizontal--4">View more info</button>                                        
                  </div>
                </Col>

                <Col md="6">
                  <div className="text-right">
                    <button className="btn dash-btn dash-btn-success-fill margin-right--4" onClick={this.handleAcceptRequest(user.id)}>Accept</button>                    
                    <button className="btn dash-btn dash-btn-danger-fill margin-left--4" onClick={this.handleRejectRequest(user.id)}>Reject</button>                    
                  </div>
                </Col>

              </React.Fragment>
            }
          </Row>
        )}
      </React.Fragment>
    )
  }
}

export default RequestItem;
