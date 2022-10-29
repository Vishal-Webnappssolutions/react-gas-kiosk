import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import Logo from '../images/Logo.jpeg'
const Header = () => {
    return (
        <>
            <Navbar className='navbar' expand="lg">
                <Container>
                    <Navbar.Brand  ><Link to='/'><img src={Logo} alt="" className='header-Logo' /></Link></Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Nav className="me-auto">
                        <Nav.Link ><Link to='/'>Home</Link></Nav.Link>
                        <Nav.Link > <Link to='/about'>About Us</Link></Nav.Link>
                        <Nav.Link ><Link to='/service'>Products/Services</Link></Nav.Link>
                        <Nav.Link ><Link to='/contact'>Contact Us</Link></Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </>
    )
}

export default Header