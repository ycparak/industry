import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { Modal, ModalHeader, ModalBody, Card, Row, Col } from 'reactstrap';
import { addToPosition } from '../../actions/positions/positionCandActions';
import FontAwesome from 'react-fontawesome';

const actions = {
  addToPosition
}

class AddToPosition extends Component {

  state = {
    modal: false
  }

  toggle = () => {
    this.setState({
      modal: !this.state.modal
    });
  }

  addCandidateToPosition = (position, candidate) => () => {
    this.props.addToPosition(position, candidate)
  }

  render() {
    const {positions, candidate} = this.props;
    return (
      <React.Fragment>
        <button onClick={this.toggle} className="btn dash-btn dash-btn-comp margin-horizontal--4"><FontAwesome name="folder-o" className="padding-right--4" /> Add to position</button>
        <Modal isOpen={this.state.modal} toggle={this.toggle} className="dash-modal dash-modal--large">
          <ModalHeader className="dash-modal-header padding-horizontal--20 padding-vertical--16">
            <span className="dash-modal-header-text--small dash-comp-body-text">Add candidate to position</span>
          </ModalHeader>
          <ModalBody className="dash-modal-body dash-comp-modal-body padding-horizontal--20 padding-top--20">
            <Row>
              { positions.map((position) => (
                <Col key={position.id} lg="6" xs="12" className="dash-internal-card-col">
                  <Link to="#">
                    <Card onClick={this.addCandidateToPosition(position, candidate)} className="dash-card-internal">
                      <span className="dash-card-internal-header dash-comp-color"><FontAwesome className="dash-card-internal-header-icon padding-right--4" name="folder"></FontAwesome> {position.title}</span>
                    </Card>
                  </Link>
                </Col>
              )) }
            </Row>
          </ModalBody>
        </Modal>
      </React.Fragment>
    )
  }
}

export default connect(null, actions)(AddToPosition)
