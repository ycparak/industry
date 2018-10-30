import React, { Component } from 'react';
import { Form, Input } from 'reactstrap';
import FontAwesome from 'react-fontawesome';

class Hero extends Component {

  state = {
    visitorType: this.props.visitorType,
    email: '',
    fireRedirect: false
  }  

  determineVisitor = () => {
    if (this.state.visitorType === 'company') {
      return 'btn-comp';
    }
    else return 'btn-cand';
  }

  onFormSubmit = (evt) => {
    // Capture all data
    // Redirect user to /signup while passing all the collected data
    evt.preventDefault();
    this.setState({
      fireRedirect: true
    })
  }

  onInputChange = (evt) => {
    this.setState({
      email: evt.target.value
    })
  }

  render() {

    return (
      <React.Fragment>
        <Form className="hero-form" onSubmit={ this.onFormSubmit }>
          <Input type="email" name="email" id="email-focus" className="visitors-input input-signup input-cand" placeholder="iwantjoboffers@gmail.com" value={ this.state.email } onChange={ this.onInputChange } />
          <button className={`btn visitiors-btn btn-signup ${this.determineVisitor()}`}>Take the quiz <span className="arrow-margin"><FontAwesome name="long-arrow-right"></FontAwesome></span></button>
        </Form>
      </React.Fragment>
    )
  }
}

export default Hero