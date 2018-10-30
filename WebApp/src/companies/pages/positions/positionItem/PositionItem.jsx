import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withFirestore } from 'react-redux-firebase';
import { toastr } from 'react-redux-toastr';
// COMPONENTS
import LoadingComponent from '../../../../shared/layout/LoadingComponent';
import PositionsModal from '../../../components/positionsModal/PositionsModal';
import ItemDetailed from './itemDetailed/ItemDetailed';
import ItemCandidate from './candidateCards/ItemCandidate';
import { objectToArray } from '../../../../shared/common/util/helpers';
// REDUX
import { updatePosition, deletePosition, removeCandidate } from '../positionActions';
// CSS
import { Row, Col, Card, CardHeader, Modal, ModalHeader, ModalFooter } from 'reactstrap';
import CardHeaderMedium from '../../../components/ui/CardHeaderMedium';
import CardBodyMedium from '../../../components/ui/CardBodyMedium';
import FontAwesome from 'react-fontawesome';

const mapState = (state) => {
  
  let position = {};

  if (state.firestore.ordered.positions && state.firestore.ordered.positions[0]) {
    position = state.firestore.ordered.positions[0];
  }
  return {
    position: position,
  }
}

const actions = {
  updatePosition,
  deletePosition,
  removeCandidate
}

class PositionItem extends Component {

  state = {
    deleteModal: false,
    editModal: false,
    loading: true
  }

  async componentDidMount() {
    const {firestore, match, history} = this.props;
    let position = await firestore.get(`positions/${match.params.id}`);
    if (!position.exists) {
      history.push('/company/positions');
      toastr.error('Error', 'Position not found');
    }
    this.setState({
      loading: false
    })
  }

  handleUpdatePosition = updatedPosition => {
    this.props.updatePosition(updatedPosition);
    this.setState({
      position: updatedPosition,
      editModal: false
    })
    this.componentDidMount();
  }

  handleDeletePosition = positionid => () => {
    this.props.deletePosition(positionid);
    this.toggleDeleteModal();
    this.props.history.push('/company/positions');
  }

  handleRemoveCandidate = (candidate) => () => {
    const {removeCandidate, position} = this.props;
    removeCandidate(candidate, position);
    this.componentDidMount();
  }

  toggleEditModal = () => {
    if (this.state.editModal === true) {
      window.location.reload();
    }
    else {
      this.setState({
        editModal: !this.state.editModal
      })
    }
  }

  toggleDeleteModal = () => {
    this.setState({
      deleteModal: !this.state.deleteModal
    })
  }

  render() {
    const {position} = this.props;
    const { loading } = this.state;
    const candidates = position && position.candidates && objectToArray(position.candidates)

    if (loading) return <LoadingComponent inverted={true} />
    return (
     <React.Fragment>
        <Card className="dash-card dash-card--normal">
          <CardHeader className="dash-card-header dash-card-header-comp dash-card-header--normal">
            <Row className="card-header-row">
              <Col className="card-header-col card-header-col--left">
                <span className="dash-card-header-text dash-card-header-text--large dash-comp-body-text">{position.title}</span>
              </Col>
              <Col className="card-header-col card-header-col--right text-right">
                <button onClick={this.toggleEditModal} className="btn dash-btn dash-btn-comp margin-right--12"><FontAwesome className="dash-btn-icon" name="pencil"></FontAwesome> Edit details</button>
                <button onClick={this.toggleDeleteModal} className="btn dash-btn dash-btn-comp"><FontAwesome className="dash-btn-icon" name="trash"></FontAwesome> Delete position</button>
              </Col>
            </Row>
          </CardHeader>
          <ItemDetailed position={position} />
        </Card>

        <Card className="dash-card dash-card--normal">
          <CardHeaderMedium>Uncontacted Candidates</CardHeaderMedium> 
          <CardBodyMedium>
            <Row>
              { candidates && candidates.map((candidate) => {
                if (candidate.stage === 'uncontacted') {
                  return <ItemCandidate key={candidate.id} position={position} candidate={candidate} remove={this.handleRemoveCandidate} /> 
                } 
                else return null;
              })}
            </Row>
          </CardBodyMedium>
        </Card>

        <Card className="dash-card dash-card--normal">
          <CardHeaderMedium>Interview Requests</CardHeaderMedium> 
          <CardBodyMedium>
            <Row>
              { candidates && candidates.map((candidate) => {
                if (candidate.stage === 'interviewExtended') {
                  return <ItemCandidate key={candidate.id} position={position} candidate={candidate} remove={this.handleRemoveCandidate} /> 
                } 
                else return null;
              })}
            </Row>
          </CardBodyMedium>
        </Card>

        <Card className="dash-card dash-card--normal">
          <CardHeaderMedium>Interviewing</CardHeaderMedium> 
          <CardBodyMedium>
            <Row>
              { candidates && candidates.map((candidate) => {
                if (candidate.stage === 'interviewing') {
                  return <ItemCandidate key={candidate.id} position={position} candidate={candidate} remove={this.handleRemoveCandidate} /> 
                } 
                else return null;
              })}
            </Row>
          </CardBodyMedium>
        </Card>

        <Card className="dash-card dash-card--normal">
          <CardHeaderMedium>Offer letter extended</CardHeaderMedium> 
          <CardBodyMedium>
            <Row>
              { candidates && candidates.map((candidate) => {
                if (candidate.stage === 'offerExtended') {
                  return <ItemCandidate key={candidate.id} position={position} candidate={candidate} remove={this.handleRemoveCandidate} /> 
                } 
                else return null;
              })}
            </Row>
          </CardBodyMedium>
        </Card>

        <Card className="dash-card dash-card--normal">
          <CardHeaderMedium>Hired</CardHeaderMedium> 
          <CardBodyMedium>
            <Row>
              { candidates && candidates.map((candidate) => {
                if (candidate.stage === 'hired') {
                  return <ItemCandidate key={candidate.id} position={position} candidate={candidate} remove={this.handleRemoveCandidate} /> 
                } 
                else return null;
              })}
            </Row>
          </CardBodyMedium>
        </Card>

         <Modal isOpen={this.state.editModal} toggle={this.toggleEditModal} className="dash-modal dash-modal--large">
          <PositionsModal newPosition={false} position={position} handleUpdatePosition={this.handleUpdatePosition} toggle={this.toggleEditModal} />
        </Modal>

        <Modal isOpen={this.state.deleteModal} toggle={this.toggleDeleteModal} className="dash-modal">
          <ModalHeader className="dash-modal-header padding-horizontal--20 padding-vertical--16">
            <span className="dash-modal-header-text--small dash-comp-body-text">Are you sure you want to delete this position?</span>
          </ModalHeader>
          <ModalFooter className="dash-modal-footer dash-comp-modal-footer">
            <button className="btn dash-btn dash-btn-comp" onClick={this.toggleDeleteModal}>Cancel</button>
            <button className="btn dash-btn dash-btn-danger" onClick={this.handleDeletePosition(position.id)}>Delete position</button>
          </ModalFooter>
        </Modal>
         

      </React.Fragment>
    )
  }
}

export default withFirestore(connect(mapState, actions)(PositionItem));