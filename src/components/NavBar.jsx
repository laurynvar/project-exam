import React, { useContext } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { MDBBtn, MDBIcon } from "mdb-react-ui-kit";
import logo from "../assets/white_logo.png";

import { Link } from "react-router-dom";
import { AuthenticationContext } from "./AuthenticationContext";

export const NavBar = ({ isLoading, onLogOut }) => {
  const { isSignedIn } = useContext(AuthenticationContext);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <Navbar bg="black" variant="dark">
        <Container>
          <Navbar.Brand as={Link} to="/">
            <img src={logo} alt="logo" />
          </Navbar.Brand>
          <Nav className="me-auto">
            {isSignedIn && (
              <>
                <Nav.Link as={Link} to="/clientregister">
                  CLIENT REGISTRATION
                </Nav.Link>
                <Nav.Link as={Link} to="/participants">
                  PARTICIPANTS
                </Nav.Link>
              </>
            )}
          </Nav>
          <Nav>
            {isSignedIn ? (
              <>
                <Navbar.Text>Signed in as: Mark Otto</Navbar.Text>
                <MDBBtn
                  color="black"
                  className="rounded-circle"
                  onClick={onLogOut}
                  style={{ color: "#cecece", marginLeft: "10px" }}
                >
                  <MDBIcon fas icon="sign-out-alt" />
                </MDBBtn>
              </>
            ) : (
              <>
                <Nav.Link as={Link} to="/register">
                  Sign Up
                </Nav.Link>
                <Nav.Link as={Link} to="/login">
                  Sign In
                </Nav.Link>
              </>
            )}
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};
