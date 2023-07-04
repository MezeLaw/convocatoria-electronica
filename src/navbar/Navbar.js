import React from 'react';
import { Navbar, Nav, Form, FormControl } from 'react-bootstrap';
import logo from './../logo.png';

function CustomNavbar({ toggleFavoritos, setFiltroTitulo }) {
  const handleSearchChange = (event) => {
    setFiltroTitulo(event.target.value);
  };

  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand href="/">
        <img src={logo} alt="Logo" className="logo navbar-logo" />
        Convocatorias
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="navbarNav" />
      <Navbar.Collapse id="navbarNav">
        <Nav className="ml-auto">
          <Nav.Link onClick={toggleFavoritos}>Favoritos</Nav.Link>
        </Nav>
        <Form inline>
          <FormControl type="search" placeholder="Buscar por título" className="mr-sm-2" onChange={handleSearchChange} />
        </Form>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default CustomNavbar;
