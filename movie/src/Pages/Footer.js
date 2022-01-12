import React from "react";
import { Container ,Row , Col} from "react-bootstrap";
import {Button} from "react-bootstrap";

function Footer() {
  return (
    <div className="p-3 mb-2 bg-dark text-white">
      <Container>
        <Row>
          <Col>@CopyRight 2022</Col>
          <Col>  <Button variant="outline-danger">Contact Us</Button></Col>
        </Row>
        
      </Container>
    </div>
  );
}

export default Footer;
