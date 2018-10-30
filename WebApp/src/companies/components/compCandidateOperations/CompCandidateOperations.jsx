import React, { Component } from 'react';
import FontAwesome from 'react-fontawesome';

class CompCandidateOperations extends Component {
  render() {
    // const { candidate } = this.props;
    return (
      <React.Fragment>
        <span className="span-operations"><FontAwesome name="folder-o"></FontAwesome></span>
        <span className="span-operations"><FontAwesome name="heart-o"></FontAwesome></span>
      </React.Fragment>
    )
  }
}

export default CompCandidateOperations;
