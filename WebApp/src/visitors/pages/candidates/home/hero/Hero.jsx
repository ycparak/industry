import React, { Component } from 'react';

// COMPONENTS
import QuickSignup from '../../../../components/quick-signup/QuickSignup';

class Hero extends Component{

  componentDidMount() {
    document.querySelector('#email-focus').focus();
  };

  render() {
    return(
      <div className="hero text-center">
        <h1>Get job offers from top tech companies.</h1>
        <p>Take our online coding quiz. Get fast-tracked to final interviews. Get offers and choose the best one for you.</p>
        <div className="signup">
          <QuickSignup visitorType="candidate" />
        </div>
      </div>
    )
  }
}

export default Hero