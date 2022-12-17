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
            <Nav.Link active href="./">
              Home
            </Nav.Link>
            <Nav.Link
              href="https://vibodhbhosure.github.io/Secondary-Site-for-Autism-System/"
              target="_blank"
            >
              Know More
            </Nav.Link>
            <Nav.Link href="./about">About Us</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default Navbar12;
