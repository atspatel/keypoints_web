import React, { Component } from "react";
import { Navbar, Nav } from "react-bootstrap";

import * as constants from "../../constants/landing_page_constants";
import "../../css/navbar.css";

class TopNavBar extends Component {
  render() {
    return (
      <Navbar
        bg="dark"
        expand="lg"
        fixed="top"
        className="navbar"
        variant="dark"
        collapseOnSelect
      >
        <Navbar.Brand
          href="#home"
          style={{
            color: "white",
            padding: "10px 50px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center"
          }}
        >
          <img src={constants.kp_logo} style={{ height: 25 }} /> KeyPoints
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          <Nav className="justify-content-end">
            <Nav.Link
              href="#home"
              className="nav"
              style={{ padding: "8px 15px" }}
            >
              Home
            </Nav.Link>
            <Nav.Link
              href="#about"
              className="nav"
              style={{ padding: "8px 15px" }}
            >
              About
            </Nav.Link>
            <Nav.Link
              href="#products"
              className="nav"
              style={{ padding: "8px 15px" }}
            >
              Products
            </Nav.Link>
            <Nav.Link
              href="#howitworks"
              className="nav"
              style={{ padding: "8px 15px" }}
            >
              How it works
            </Nav.Link>
            <Nav.Link
              href="#howithelps"
              className="nav"
              style={{ padding: "8px 15px" }}
            >
              How It Helps
            </Nav.Link>
            <Nav.Link
              href="#contact"
              className="nav"
              style={{ padding: "8px 15px" }}
            >
              Contact
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default TopNavBar;
