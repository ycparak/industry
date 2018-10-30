import React, { Component } from 'react';
import { Row, Col } from 'reactstrap';

// COMPONENTS
import Header from '../components/header/Header';
import Sidebar from '../components/sidebar/Sidebar';

class LayoutCandidates extends Component {

  render() {
    return (
      <div className="dash-layout dash-comp-background">
        <div className="container-fluid dash-container">
          <div className="dash-layout-header">
            <Header />
          </div>
          <Row>
            <Col lg="2" className="dash-sidebar-col">
              <Sidebar />
            </Col>
            <Col xs="12" lg="10">
              <div className="dash-layout-content">
                {this.props.children}
              </div>
            </Col>
          </Row>
        </div>
      </div>
    )
  }
}

export default LayoutCandidates;
