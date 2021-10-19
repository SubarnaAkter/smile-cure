import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link,  } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';
import './Header.css';
const Header = () => {
    const { user, logOut } = useAuth();
    return (
        <div>
            
            <Navbar className="nav-menu" sticky="top" collapseOnSelect expand="lg" variant="dark">
                <Container>
                    <Navbar.Brand ><i className="fas fa-tooth"></i> <span className="footer-title fw-bold">Smile Cure Dental Care</span></Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="ms-auto ">
                            <Nav.Link as={Link} to="/Home">Home</Nav.Link>
                            <Nav.Link as={Link} to="/About">About</Nav.Link>
                            <Nav.Link as={Link} to="/Services">Services</Nav.Link>
                            <Nav.Link as={Link} to="/Dentists">Dentists</Nav.Link>

                           
                            <Nav.Link as={Link} to="/Contact">Contact</Nav.Link>
                        </Nav>
                        <Nav>

                            <Nav.Link as={Link} to="/Appointment">
                                Appointment
                            </Nav.Link>
                            {
                          user.displayName && <span span className="p-2" style={{ color: 'white' }}>  {user.displayName} </span> ||  user.email && <span className="p-2">  {user.displayName} </span>
                        }
                            {
                              user.displayName ||  user.email ? <button onClick={logOut}>  Log out</button> : <Nav.Link as={Link} to="/Login">
                                    Login/Sign up
                                </Nav.Link>
                          }
                        </Nav>
                        
                       
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;