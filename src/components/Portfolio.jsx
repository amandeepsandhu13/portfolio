// src/components/Portfolio.jsx
import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const Portfolio = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetch('/projects.json')
      .then((response) => response.json())
      .then((data) => setProjects(data))
      .catch((error) => console.error('Error fetching projects:', error));
  }, []);

  return (
    <Container className="mt-5">
      <h2 className="my-4 text-center text-info">Portfolio</h2>
      <Row>
        {projects.map((project) => (
          <Col key={project.id} sm={12} md={6} lg={4} className="mb-4">
            <Card className="shadow-sm h-100">
              <Card.Img variant="top" src={project.image} alt={project.title} />
              <Card.Body className="d-flex flex-column">
                <Card.Title>{project.title}</Card.Title>
                <div className="mt-auto">
                  <Button
                    variant="primary"
                    href={project.deployedLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mr-2"
                  >
                    View Project
                  </Button>
                  <Button
                    variant="secondary"
                    href={project.repoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    GitHub Repository
                  </Button>
                </div>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Portfolio;
