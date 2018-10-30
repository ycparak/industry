import React from 'react'
import { Link } from 'react-router-dom';

// STYLING
import { Row, Col } from 'reactstrap';
import FontAwesome from 'react-fontawesome';

// COMPONENTS
import { CURRENT_YEAR } from '../../../config';

const Footer = (props) => {
  return(
    <footer className="container-fluid">
      <div className="container">
        <Row>

          <Col className="logo-col" md="2">
            <div className="footer-divider">
              <Link to="/" className="logo-footer"><span>industry</span>14</Link>
            </div>
          </Col>

          <Col md="2">
            <h6 className="dark-text">For Candidates</h6>
            <ul className="clean-list">
              <li className="footer-item"><Link className="dark-link" to="/signup">sign up.</Link></li>
              <li className="footer-item"><Link className="dark-link" to="/login">login.</Link></li>
              <li className="footer-item"><Link className="dark-link" to="/">how it works.</Link></li>
              <li className="footer-item"><Link className="dark-link" to="/faq">faq.</Link></li>
              <li className="footer-item"><Link className="dark-link" to="/guides">guides.</Link></li>
            </ul>
          </Col>

          <Col md="2">
            <h6 className="dark-text">For Companies</h6>
            <ul className="clean-list">
              <li className="footer-item"><Link className="dark-link" to="/signup">sign up.</Link></li>
              <li className="footer-item"><Link className="dark-link" to="/login">login.</Link></li>
              <li className="footer-item"><Link className="dark-link" to="/companies">how it works.</Link></li>
              <li className="footer-item"><Link className="dark-link" to="/faq">faq.</Link></li>
              <li className="footer-item"><Link className="dark-link" to="/guides">guides.</Link></li>
              <li className="footer-item"><Link className="dark-link" to="/pricing">pricing.</Link></li>
            </ul>
          </Col>

          <Col md="2">
            <h6 className="dark-text">Industry14</h6>
            <ul className="clean-list">
              <li className="footer-item"><Link className="dark-link" to="/blog">blog.</Link></li>
              <li className="footer-item"><Link className="dark-link" to="/about">about us.</Link></li>
              <li className="footer-item"><Link className="dark-link" to="/contact">contact us.</Link></li>
              <li className="footer-item"><Link className="dark-link" to="/faq">faq.</Link></li>
              <li className="footer-item"><Link className="dark-link" to="/careers">careers.</Link></li>
              <li className="footer-item"><Link className="dark-link" to="/press">press.</Link></li>
            </ul>
          </Col>

          <Col md="2">
            <h6 className="dark-text">Legal</h6>
            <ul className="clean-list">
              <li className="footer-item"><Link className="dark-link" to="/terms">terms.</Link></li>
              <li className="footer-item"><Link className="dark-link" to="/privacy">privacy policy.</Link></li>
            </ul>
          </Col>

          <Col md="2" className="text-right">
            <Link to="/#top" className="btn-up"> 
              <span className="back-to-top"><FontAwesome name="long-arrow-up"></FontAwesome></span>
            </Link> <br/>
            
          </Col>
        </Row>
        <Row>
          <Col className="text-right">
            <span className="copy">&copy; Industry14 { CURRENT_YEAR } all rights reserved.</span>
          </Col>
        </Row>
      </div>
    </footer>
  )
}

export default Footer;