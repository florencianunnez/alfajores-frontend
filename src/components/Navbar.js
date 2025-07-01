import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../assets/styles.css';

const NavigationBar = () => {
    return (
        <Navbar bg="light" expand="lg" className='navbar-capricho'>
            <Navbar.Brand as={Link} to="/" href="#home">Capricho</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto">
                    <Nav.Link as={Link} to="/nosotros" href="#about">Nosotros</Nav.Link>
                    <Nav.Link as={Link} to="/promociones" href="#about">Promociones</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
};

export default NavigationBar;