import React from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav, Container } from "react-bootstrap";
import {useSelector} from "react-redux";
import {Badge} from 'react-bootstrap';




function NavBar() {
  const count = useSelector((state) =>  
  state.count)
  
  return (
    <div>
      <Navbar bg="dark" variant="dark" sticky="top">
        <Container>
          <Link className="nav-link text-light"  to={"/"}>MOVIES </Link>
          <Nav className="me-auto">
            <Link className="nav-link text-light" to={"/"}>Home</Link>
            <Link className="nav-link text-light" to={"/MovieDetails"}>Movie Details</Link>
            <Link className="nav-link text-light" to={"/FavPage"}>Favorites<Badge bg="danger">{count}</Badge></Link>
          
         
            
             
            </Nav>
        </Container>
      </Navbar>
    </div>
  );
}

export default NavBar;
