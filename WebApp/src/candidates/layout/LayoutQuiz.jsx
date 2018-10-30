import React, { Component } from 'react';

class LayoutCandidates extends Component {

  render() {
    return (
      <div className="dash-layout dash-comp-background">
        <div className="container-fluid dash-container">
          {this.props.children}
        </div>
      </div>
    )
  }
}

export default LayoutCandidates;
