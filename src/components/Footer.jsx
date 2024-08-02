// src/components/Footer.jsx
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const Footer = () => {
  return (
    <footer className="bg-secondary text-light py-4">
      <Container>
        <Row>
          <Col lg={4} md={6} className="mb-4 mb-md-0">
            <h5 className="text-uppercase mb-4">Contact</h5>
            <ul className="list-unstyled">
              <li>
                <a href="mailto:samandeepkaur34@gmail.com" className="text-light">
                  samandeepkaur34@gmail.com
                </a>
              </li>
            </ul>
          </Col>
          <Col lg={4} md={6} className="mb-4 mb-md-0">
            <h5 className="text-uppercase mb-4">Follow Me</h5>
            <ul className="list-unstyled">
              <li>
                <a href="https://github.com/amandeepsandhu13" className="text-light" target="_blank" rel="noopener noreferrer">
                  GitHub
                </a>
              </li>
            </ul>
          </Col>
          <Col lg={4} md={12}>
            <h5 className="text-uppercase mb-4">Professional</h5>
            <ul className="list-unstyled">
              <li>
                <a href="https://www.linkedin.com/in/amandeepskaur/" className="text-light" target="_blank" rel="noopener noreferrer">
                  LinkedIn
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
      <div className="bg-dark text-light text-center py-3">
        <p className="mb-0">
          &copy; 2024 <a href="https://myportfolio.com/" className="text-light">myportfolio.com</a>. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
