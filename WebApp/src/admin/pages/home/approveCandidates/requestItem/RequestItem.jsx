import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { Row, Col } from 'reactstrap';
import FontAwesome from 'react-fontawesome';
import { Form, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { Field, reduxForm } from 'redux-form';
import TextInputLarge from '../../../../../shared/common/form/TextInput';

class RequestItem extends Component {

  state = {
    modal: false
  }

  onFormSubmit = (values) => {
    this.props.submitSkills(values, this.props.user.id, this.props.user)
  }

  handleAcceptRequest = (ID) => () => {
    this.props.acceptCandidate(ID);
    this.toggle();
  }

  handleRejectRequest = (ID) => () => {
    console.log(ID)
    this.props.rejectCandidate(ID);
    this.toggle();
  }

  toggle = () => {
    this.setState({
      modal: !this.state.modal
    });
  }

  render() {
    const {user} = this.props;
    return (
      <React.Fragment>
          <Row className="dash-card-request-row padding-top--16 padding-bottom--8 dash-card-divider-white">
            { user && 
              <React.Fragment>
                <Col md="3">
                  <div>
                    <div className="dash-card-body-profile">
                      <div className="display-inline-block dash-card-body-profile-info dash-card-header-profile-image margin-right--12">
                        <span className="profile-icon profile-icon-image dash-logo-icon dash-comp-icon-link text-center"><FontAwesome className="briefcase-icon" name="briefcase"></FontAwesome></span>                
                      </div>
                      <div className="display-inline-block margin-right--12">
                        <span className="wide-button dash-card-body-profile-text font-weight--500 dash-comp-card-text">{user.name} {user.surname}</span>
                        <Link to={`/company/candidate/${user.id}`} className="wide-button dash-card-body-profile-text dash-comp-link">View profile</Link>
                      </div>
                    </div>
                  </div>
                </Col>

                <Col md="9">
                  <div className="text-right">
                    <button className="btn dash-btn dash-btn-comp-primary margin-right--8" onClick={this.toggle}>Assess candidate</button>    
                    <button className="btn dash-btn dash-btn-success-fill margin-right--4" onClick={this.handleAcceptRequest(user.id)}>Accept candidate</button>                    
                    <button className="btn dash-btn dash-btn-danger-fill margin-left--4" onClick={this.handleRejectRequest(user.id)}>Reject candidate</button>                                    
                  </div>
                </Col>

                <Modal isOpen={this.state.modal} toggle={this.toggle} className="dash-modal dash-modal--large">
                  <ModalHeader className="dash-modal-header padding-horizontal--20 padding-vertical--16">
                    <span className="dash-modal-header-text--small dash-comp-body-text">Candidate quiz assesment</span>
                  </ModalHeader>
                  <Form onSubmit={this.props.handleSubmit(this.onFormSubmit)}>
                    <ModalBody className="dash-modal-body dash-comp-modal-body padding-horizontal--20 padding-top--20 dash-card-divider-white">
                      <h6 className="dash-comp-body-text">Link to Github repository</h6>
                      <p className="dash-comp-card-text"><a href={user.takeHomeURL} target="_blank" className="dash-link dash-comp-link">Github repository</a></p>

                      {
                        user.skills && user.skills.map((skill) => (
                          <Field key={skill} lblName={skill} type="number" name={skill} placeholder="0 - 10" component={TextInputLarge}/>
                        ))
                      }

                      <br/>
                      <Field lblName="Algorithms" type="number" name="algorithms" placeholder="0 - 10" component={TextInputLarge}/>
                      <Field lblName="Data structures" type="number" name="dataStructures" placeholder="0 - 10" component={TextInputLarge}/>
                      <Field lblName="Design patterns" type="number" name="designPatterns" placeholder="0 - 10" component={TextInputLarge}/>
                      <Field lblName="OOP" type="number" name="objectOrientation" placeholder="0 - 10" component={TextInputLarge}/>
                      <Field lblName="Network programming" type="number" name="networkProgramming" placeholder="0 - 10" component={TextInputLarge}/>
                      <Field lblName="Functional programming" type="number" name="functionalProgramming" placeholder="0 - 10" component={TextInputLarge}/>
                      <Field lblName="Databases" type="number" name="databases" placeholder="0 - 10" component={TextInputLarge}/>
                      <br/>

                    </ModalBody>
                    <ModalFooter className="dash-modal-footer dash-comp-modal-footer">
                      <button type="submit" className="btn dash-btn dash-btn-comp-primary">
                        Submit
                      </button>
                    </ModalFooter>
                  </Form>
                </Modal>

              </React.Fragment>
            }
          </Row>
      </React.Fragment>
    )
  }
}

export default (reduxForm({form: 'skillsForm', enableReinitialize: true})(RequestItem));

/*

- link to github profile
- form for filling in stats on languages and concepts
- 

*/