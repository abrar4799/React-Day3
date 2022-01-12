import React from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav, Container } from "react-bootstrap";
import {useSelector} from "react-redux";




function NavBar() {
  
  return (
    <div>
      <Navbar bg="dark" variant="dark" sticky="top">
        <Container>
          <Navbar.Brand href="#">MOVIES </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="/MovieDetails">Movie Details</Nav.Link>
            <Nav.Link href="/FavPage">Favorites</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link href="#deets">Log In</Nav.Link>
            <Nav.Link eventKey={2} href="#memes">
              Register
            </Nav.Link>
           
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
}

export default NavBar;
