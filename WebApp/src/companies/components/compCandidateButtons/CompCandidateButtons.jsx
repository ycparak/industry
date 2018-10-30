import React, { Component } from 'react';
import FontAwesome from 'react-fontawesome';
import { Link } from 'react-router-dom';

class compCandidateButtons extends Component {

  state = {
    positioned: false,
    liked: false,
  }

  render() {
    const { candidate } = this.props;
    return (
      <React.Fragment>
        <Link to={`/company/candidate/chat/${candidate.id}`} className="btn dash-btn dash-btn-comp margin-horizontal--8"><FontAwesome name="folder-o"></FontAwesome></Link>
        <Link to={`/company/candidate/chat/${candidate.id}`} className="btn dash-btn dash-btn-comp margin-horizontal--8"><FontAwesome name="heart-o"></FontAwesome></Link>
        <Link to={`/company/chat/${candidate.id}`} className="btn dash-btn dash-btn-comp margin-horizontal--8">Chat to candidate</Link>
        <Link to={`/company/candidate/${candidate.id}`} className="btn dash-btn dash-btn-comp margin-left--8">View full profile</Link>
      </React.Fragment>
    )
  }
}

export default compCandidateButtons
