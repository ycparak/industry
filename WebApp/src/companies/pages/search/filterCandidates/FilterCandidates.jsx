import React, { Component } from 'react';
import { Input, Collapse } from 'reactstrap';
import FontAwesome from 'react-fontawesome';

class FilterCandidates extends Component {

  state = {
    collapse: false
  }

  toggle = () => {
    this.setState({
      collapse: !this.state.collapse
    })
  }

  render() {
    return (
      <div className="dashboard-card filter-card comp-filter-card">
        <div className="dashboard-all-in-one all-in-one-filter-comp">
          <div className="all-in-one-header all-in-one-filter-header">
            <h5 className="all-in-one-header-h5">Filter Candidates</h5> 
            <div className="all-in-one-header-inline">
              <div className="text-right">
                <Input type="text" id="candidate-search" className="all-in-one-header-input" placeholder="Search for candidates" />
              </div>
            </div>
          </div>
          <div className="all-in-one-body all-in-one-filter-body">
            <div className="all-in-one-body-above">

            </div>
            <Collapse isOpen={this.state.collapse}>
              <div className="all-in-one-body-collapse">
                hello
              </div>
            </Collapse>
          </div>
          <div className="all-in-one-footer all-in-one-filter-footer">
            <span 
              className="all-in-one-footer-link" 
              onClick={this.toggle}>Advanced filter options 
              { this.state.collapse 
                ? 
                <FontAwesome className="footer-link-icon" name="chevron-up"></FontAwesome> 
                : 
                <FontAwesome className="footer-link-icon" name="chevron-down"></FontAwesome>
              }
            </span>
          </div>
        </div>
      </div>
  )
  }
}

export default FilterCandidates;