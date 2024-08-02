import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { Container, Row, Col, Form, Button, Alert, Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const ContactForm = () => {
  const form = useRef();
  const [successMessage, setSuccessMessage] = useState('');

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_f4tt281', 'template_d6irdsm', form.current, 'MnJ85GZEbFj6mJdhy')
      .then((result) => {
          console.log('SUCCESS!', result.text);
          setSuccessMessage('Email sent successfully!');
      }, (error) => {
          console.log('FAILED...', error.text);
      });
  };

  return (
    <Container className="mt-5">
      <Row className="justify-content-center">
        <Col md={8}>
          <Card className="shadow-sm">
            <Card.Body>
              <h2 className="my-4 text-center text-info">Contact Me</h2>
              {successMessage && <Alert variant="success">{successMessage}</Alert>}
              <Form ref={form} onSubmit={sendEmail}>
                <Form.Group controlId="formName">
                  <Form.Label>Name</Form.Label>
                  <Form.Control type="text" name="user_name" placeholder="Enter your name" />
                </Form.Group>

                <Form.Group controlId="formEmail">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control type="email" name="user_email" placeholder="Enter your email" />
                </Form.Group>

                <Form.Group controlId="formMessage">
                  <Form.Label>Message</Form.Label>
                  <Form.Control as="textarea" name="message" rows={3} placeholder="Enter your message" />
                </Form.Group>

                <Button variant="primary" type="submit" className="mt-3">
                  Send
                </Button>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default ContactForm;
