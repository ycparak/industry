import React, { Component } from 'react'
import ApproveCompany from './approveCompany/ApproveCompany';
import ApproveCandidate from './approveCandidates/ApproveCandidate';

class Home extends Component {
  render() {
    return (
      <div>
        <ApproveCompany />
        <ApproveCandidate />
      </div>
    )
  }
}

export default Home
