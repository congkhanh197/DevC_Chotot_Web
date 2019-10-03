import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import "./styles/Header.css"

function Header() {
  return (
    <Navbar
      bg="light"
      expand="lg"
      className="navbar navbar-expand-md navbar-dark fixed-top bg-dark"
    >
      <Navbar.Brand href="/">DevC 1024</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="/Price">Price</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Header;
