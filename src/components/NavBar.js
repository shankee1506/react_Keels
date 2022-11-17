import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
const NavBar = () => {
  return (
    <div>
      <Navbar bg="success" variant="dark" expand="lg" fixed="bottom">
        <Container>
          <Navbar.Brand style={{display:'flex'}}>
            @created 2022
          </Navbar.Brand>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavBar;
