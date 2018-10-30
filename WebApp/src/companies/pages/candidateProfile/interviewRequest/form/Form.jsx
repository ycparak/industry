import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { Form, ModalBody } from 'reactstrap';

import TextInputLarge from '../../../../../shared/common/form/TextInput';
import TextAreaLarge from '../../../../../shared/common/form/TextArea';
import SelectInput from '../../../../../shared/common/form/SelectInput';

class ChatForm extends Component {

  state = {
    positions: null,
  }

  componentDidMount() {
    this.setPositions();
  }

  setPositions() {
    const positions = []
    this.props.positions.map((position) => (
      positions.push({
        key: position.id,
        text: position.title,
        value: position.id
      })
    ))
    this.setState({
      positions: positions
    })
  }

  handleInterviewRequest = values => {
    const { candidate, sendInterviewRequests, reset } = this.props;
    sendInterviewRequests(candidate.id, values);
    reset();
  }

  render() {
    return (
      <Form onSubmit={this.props.handleSubmit(this.handleInterviewRequest)} >
        <ModalBody className="dash-modal-footer dash-comp-modal-footer">
          { this.state.positions && <Field lblName="Position" type="text" name="positionID" component={SelectInput} options={this.state.positions} placeholder="Select position" /> }
          <Field lblName="Interview date" type="date" name="date" placeholder="Choose date of interview" component={TextInputLarge}/>
          <Field lblName="Personalized message" rows="5" type="text" name="message" placeholder="Message" component={TextAreaLarge}/>
          <div className="text-right">
            <button type="submit" className="btn dash-btn dash-btn-comp-primary">Send</button>
          </div>
        </ModalBody>
      </Form>
    )
  }
}

export default reduxForm({ form: 'interviewRequest' })(ChatForm);
