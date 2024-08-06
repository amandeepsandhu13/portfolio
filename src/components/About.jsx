import React from 'react';
import { Container, Row, Col, Image, Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const About = () => {
  return (
    <Container className="mt-5">
      <Row className="justify-content-center align-items-center">
        <Col md={4} className="text-center mb-4 mb-md-0">
          <Image src="/images/my-image.jpg" roundedCircle fluid />
        </Col>
        <Col md={8}>
          <Card className="shadow-sm">
            <Card.Body>
              <h2 className="my-4 text-center text-info">About Me</h2>
              <p className="text-justify">
                Hello! I’m Amandeep Kaur Sandhu, a passionate and driven Full-Stack Developer with a strong background in Java, React, Spring Boot. With 3 years of experience in the tech industry, I specialize in creating robust and scalable applications that solve real-world problems. My journey in software development has allowed me to work on diverse projects, including E-commerce web applications.
              </p>
              <p className="text-justify">
                I thrive in collaborative environments and am always eager to learn new technologies and methodologies. My approach to development is user-centric, focusing on delivering high-quality, efficient, and maintainable code. 
              </p>
              <p className="text-justify">
                Feel free to explore my portfolio to see examples of my work and get in touch if you’d like to collaborate or discuss potential opportunities.
              </p>
              <p className="text-center font-italic">Thank you for visiting!</p>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default About;
