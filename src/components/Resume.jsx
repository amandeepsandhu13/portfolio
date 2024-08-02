// src/components/Resume.jsx
import React from 'react';
import { Container, Row, Col, Button, ListGroup, Card } from 'react-bootstrap';
import { FaJava, FaReact, FaJs, FaNodeJs, FaDatabase } from 'react-icons/fa';

import 'bootstrap/dist/css/bootstrap.min.css';

const Resume = () => {
  return (
    <section className="py-5">
      <Container>
        <Row className="mb-4">
          <Col>
            <h2 className="text-center mb-4 text-info">Resume</h2>
            <div className="text-center mb-4">
              <a
                href="https://docs.google.com/document/d/1VjohsBIzOZcTamYhfKTo-wojHm4qd_hnPren9jJ4g5Y/edit?usp=sharing"
                download
              >
                <Button variant="primary bg-black">Download Resume</Button>
              </a>
            </div>
            <Card>
              <Card.Body>
                <Row>
                  <Col md={6}>
                    <ListGroup variant="flush">
                      <ListGroup.Item className="bg-light">
                        <b>Programming Languages</b>
                      </ListGroup.Item>
                      <ListGroup.Item>
                        <FaJava className="me-2" /> Java
                      </ListGroup.Item>
                      <ListGroup.Item>
                        <FaJs className="me-2" /> JavaScript
                      </ListGroup.Item>
                      <ListGroup.Item>
                        <FaReact className="me-2" /> React
                      </ListGroup.Item>
                      <ListGroup.Item>
                        <FaNodeJs className="me-2" /> Node.js
                      </ListGroup.Item>
                      <ListGroup.Item>
                        <FaDatabase className="me-2" /> SQL
                      </ListGroup.Item>
                      <ListGroup.Item>JQuery</ListGroup.Item>

                      <ListGroup.Item className="bg-light">
                        <b>Frameworks and Libraries</b>
                      </ListGroup.Item>
                      <ListGroup.Item>Spring Boot</ListGroup.Item>
                      <ListGroup.Item>Express.js</ListGroup.Item>
                      <ListGroup.Item>Bootstrap</ListGroup.Item>
                      <ListGroup.Item>Materialize</ListGroup.Item>
                    </ListGroup>
                  </Col>
                  <Col md={6}>
                    <ListGroup variant="flush">
                      <ListGroup.Item className="bg-light">
                        <b>Databases</b>
                      </ListGroup.Item>
                      <ListGroup.Item>MongoDB</ListGroup.Item>
                      <ListGroup.Item>MySQL</ListGroup.Item>
                      <ListGroup.Item>PostgreSQL</ListGroup.Item>

                      <ListGroup.Item className="bg-light">
                        <b>Tools and Platforms</b>
                      </ListGroup.Item>
                      <ListGroup.Item>Git</ListGroup.Item>
                      <ListGroup.Item>Docker</ListGroup.Item>
                      <ListGroup.Item>Jenkins</ListGroup.Item>
                      <ListGroup.Item>VS Code</ListGroup.Item>
                      <ListGroup.Item>IntelliJ IDEA</ListGroup.Item>

                      <ListGroup.Item className="bg-light">
                        <b>Other Skills</b>
                      </ListGroup.Item>
                      <ListGroup.Item>RESTful APIs</ListGroup.Item>
                      <ListGroup.Item>GraphQL</ListGroup.Item>
                      <ListGroup.Item>Agile/Scrum</ListGroup.Item>
                      <ListGroup.Item>Unit Testing</ListGroup.Item>
                    </ListGroup>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Resume;
