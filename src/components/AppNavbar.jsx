import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import './Navbar.css';

const AppNavbar = () => {
  // Theme is now hardcoded to 'light'
  const theme = 'light';
  document.documentElement.setAttribute('data-bs-theme', theme);

  return (
    <Navbar collapseOnSelect expand="lg" bg={theme} variant={theme} className="app-navbar" fixed="top">
      <Container>
        <LinkContainer to="/">
          <Navbar.Brand>
            <img
              src="./assets/logo/logo.png"
              width="30"
              height="30"
              className="d-inline-block align-top"
              alt="logo DELCRA"
            />
            {' '}
            DELCRA®
          </Navbar.Brand>
        </LinkContainer>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto">
            <LinkContainer to="/">
              <Nav.Link className="fw-bold mx-2">Inicio</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/servicios">
              <Nav.Link className="fw-bold mx-2">Servicios</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/contacto">
              <Nav.Link className="fw-bold mx-2">Contacto</Nav.Link>
            </LinkContainer>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default AppNavbar;
