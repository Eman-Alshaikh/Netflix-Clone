import React from 'react';
import {Navbar,Container,Nav} from "react-bootstrap"
import { Link } from 'react-router-dom';

function Navbar1 () {
  return <div>
   <Navbar bg="dark" variant="dark">
    <Container>
    <Navbar.Brand to="/">Movies</Navbar.Brand>
    <Nav className="me-auto">
      <Link className='link' to="/">Home</Link>
      { }
    </Nav>
    </Container>
  </Navbar>
  </div>;
};

export default Navbar1;