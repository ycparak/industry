import React from 'react';
import { Link } from 'react-router-dom';
import { Row, Col, Card } from 'reactstrap';
import SignupFlow from './SignupFlow';

const ActivateLinks = () => {
  return (
    <Row className="">
      <Col sm="12" md="8" lg="8" className="card-activate-col--right">
        <Card className="dash-card dash-card--link dash-card--normal dash-card--warning" style={{minHeight: '100%'}}>
          <span className="dash-card-link--header-text margin-bottom--8">Get started with Industry 14</span>
          <span className="dash-card-link--paragraph-text">We need to learn more about you and your business before you can hire candidates on Industry14. Untill you complete all the following steps, you won't be able to hire / contact any candidate.</span>
          <SignupFlow />
        </Card>
      </Col>

      <Col sm="12" md="4" lg="4" className="card-activate-col--left">
        <Link to="/guides" style={{minHeight: '100%'}}>
          <Card className="dash-card dash-card--link dash-card--normal dash-card--primary" style={{minHeight: '100%'}}>
            <span className="dash-card-link--header-text margin-bottom--8">Read our guides &rarr;</span>
            <span className="dash-card-link--paragraph-text">Read the basics before getting started with Industry14. We also know you want to find and hire the best programmers so we created a guide to help you do just that.</span>
          </Card>
        </Link>
      </Col>
    </Row>
  )
}

export default ActivateLinks
