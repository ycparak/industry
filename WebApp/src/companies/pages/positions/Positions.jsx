import React, { Component } from 'react';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { Link } from 'react-router-dom';
// COMPONENTS
import PositionsModal from '../../components/positionsModal/PositionsModal';
// REDUX
import { createPosition } from './positionActions';
// CSS COMPONENTS
import { Row, Col, Card, CardHeader, CardBody, Modal } from 'reactstrap';
import FontAwesome from 'react-fontawesome';

const mapState = (state) => {
  let userPositions = [];
  let positions = state.firestore.ordered.positions;
  let user = state.firebase.auth;
  if (positions != null && user != null) {
    if (positions.length > 0) {
      userPositions = positions.filter(position => position.userId === user.uid);
    }
  }
  return {
    positions: userPositions,
  }
}

const actions = {
  createPosition
}

class Positions extends Component {

  state = {
    modal: false,
    dropdownOpen: false,
    dropdownOpen2: false,
    dropdownOpen3: false,
  }

  async componentDidMount() {

  }

  toggle = () => {
    this.setState({
      modal: !this.state.modal
    })
  }

  handleCreatePosition = (newPosition) => {
    this.props.createPosition(newPosition);
    this.setState({
      modal: false
    })
    this.componentDidMount();
  }
  

  render() {
    const {positions} = this.props;
    return (
      <React.Fragment>
        <Card className="dash-card dash-card--normal">
          <CardHeader className="dash-card-header dash-card-header-comp dash-card-header--normal">
            <Row className="card-header-row">
              <Col className="card-header-col card-header-col--left">
                <span className="dash-card-header-profile-image">
                </span>
                <span className="dash-card-header-text dash-card-header-text--large dash-comp-body-text">Positions</span>
              </Col>
              <Col className="card-header-col card-header-col--right text-right">
                <button onClick={this.toggle} className="btn dash-btn dash-btn-comp"><FontAwesome className="dash-btn-icon" name="plus"></FontAwesome> New position</button>
              </Col>
            </Row>
            <div className="padding-top--12">
              <span className="dash-form-small-text dash-comp-card-text">
                Positions allow you to spec out a role that you're hiring for, add candidates to that position, setup alerts for that position, and get a wholistic view of each stage in your search to fulfill that position. <a target="_blank" className="dash-link dash-comp-link font-weight--500" href="/guides/company">Learn more &rarr;</a>
              </span>
            </div>
          </CardHeader>

          <CardBody className="dash-card-body dash-card-body--normal dash-card-body-comp">
            <div className="padding-horizontal--20 padding-top--20 padding-bottom--4">
              <Row className="">
                {positions && positions.map((position) => (
                  <Col key={position.id} lg="3" md="4" sm="6" xs="12" className="dash-internal-card-col">
                    <Link to={`/company/positions/${position.id}`}>
                      <Card className="dash-card-internal">
                        <span className="dash-card-internal-header dash-comp-color cursor-pointer"><FontAwesome className="dash-card-internal-header-icon padding-right--4" name="folder"></FontAwesome> {position.title}</span>
                      </Card>
                    </Link>
                  </Col>
                ))}  
              </Row>
            </div>
          </CardBody>
        </Card>

        {/* Add position modal */}
        <Modal isOpen={this.state.modal} toggle={this.toggle} className="dash-modal dash-modal--large">
          <PositionsModal newPosition={true} position={null} handleCreatePosition={this.handleCreatePosition} toggle={this.toggle} />
        </Modal>
        
      </React.Fragment>

    )
  }
}

export default connect(mapState, actions)(firestoreConnect([{collection: 'positions'}])(Positions));