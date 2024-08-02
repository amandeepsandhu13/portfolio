// src/components/Header.jsx
import { Link } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../assets/css/styles.css';

const Header = () => {
  return (
    <Navbar expand="lg" bg="light" className="shadow-sm bg-secondary">
      <Navbar.Brand as={Link} to="/" className="font-weight-bold text-info">
        Amandeep Sandhu
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ms-auto">
          <Nav.Link as={Link} to="/about" className="text-dark">
            About Me
          </Nav.Link>
          <Nav.Link as={Link} to="/portfolio" className="text-dark">
            Portfolio
          </Nav.Link>
          <Nav.Link as={Link} to="/contact" className="text-dark">
            Contact
          </Nav.Link>
          <Nav.Link as={Link} to="/resume" className="text-dark">
            Resume
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
