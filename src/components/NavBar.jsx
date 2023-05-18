import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

import { Link } from "react-router-dom";

export const NavBar = () => {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand as={Link} to="/">
            Navbar
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/clientregister">
              CLIENT REGISTRATION
            </Nav.Link>
            <Nav.Link as={Link} to="/participants">
              PARTICIPANTS
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};
