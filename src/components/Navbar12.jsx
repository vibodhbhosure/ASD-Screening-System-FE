import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import logo from "../assets/iotlogo.png";
import React from "react";

function Navbar12() {
  return (
    <>
      <Navbar
        fixed="sticky"
        style={{ backgroundColor: "#FFFFFF00" }}
        variant="dark"
      >
        <Container>
          <Navbar.Brand href="./">
            <img src={logo} alt="IOT" style={{ marginRight: "1.25rem" }} />
          </Navbar.Brand>
          <Nav className="ms-auto">
            <Nav.Link href="./">Home</Nav.Link>
            <Nav.Link href="./Location">Location</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default Navbar12;
