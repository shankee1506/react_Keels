import React, { useState } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <Navbar bg="success" variant="dark" expand="lg" fixed="sticky">
        <Container>
          <Navbar.Brand as={Link} to="/">
            SM
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/studentDetails">
              StudentDetails
            </Nav.Link>
            <Nav.Link as={Link} to="/teacherDetails">
              TeacherDetails
            </Nav.Link>
            <Nav.Link as={Link} to="/subjectDetails">
              SubjectDetails
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
