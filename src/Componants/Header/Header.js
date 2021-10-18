import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <Navbar sticky="top" collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand >Sheild Dentistry</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="ms-auto">
                            <Nav.Link as={Link} to="/Home">Home</Nav.Link>
                            <Nav.Link  as={Link} to="/About">About</Nav.Link>
                            <Nav.Link  as={Link}  to="/Services">Services</Nav.Link>
                          
                            <NavDropdown  title="Features" id="collasible-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1">Dentists</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">Patients & visitors</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Our Team</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/3.4">Research & innovation</NavDropdown.Item>
                            </NavDropdown>
                            <Nav.Link  as={Link} to="/Contact">Contact</Nav.Link>
                        </Nav>
                        <Nav>
                          
                            <Nav.Link as={Link} to="/Login">
                            Login/Sign up
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;