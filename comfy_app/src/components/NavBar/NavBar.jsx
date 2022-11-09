import "./navbar.scss"
import React from 'react';
import { Navbar, Nav, Container, Offcanvas } from 'react-bootstrap';
import { Routes, Route, Link } from 'react-router-dom';
import HomePage from './WeatherApp';
import Contact from './Contact';
import SignUp from './SignUp';
import LogIn from './LogIn';
import AudioVideo from './AudioVideo';
import WeatherApi from '../Weatherapi/WeatherApi';
import logo from '../images/logo.png'

function NavBar() {

  return (
    <>
      <div className='NavBar'>
        {['sm'].map((expand) => (
          <Navbar key={expand} bg='#FFF5E4' expand={expand} className='mb-3'>
            <Container fluid>
              <Navbar.Brand href='/'><img className="logoPadding" src={logo} width="220px" height="150px" alt="Comfy Weather Logo" /></Navbar.Brand>
              <Navbar.Toggle
                aria-controls={`offcanvasNavbar-expand-${expand}`}
              />
              <Navbar.Offcanvas
                id={`offcanvasNavbar-expand-${expand}`}
                aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
                placement='end'
                className='navBarMenu'
              >
                <Offcanvas.Header closeButton className='navBarMenu'>
                  <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                    <img src={logo} width="115px" height="115px" alt="Comfy Weather Logo" />
                  </Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body className='navBarMenu'>
                  <Nav className='justify-content-end flex-grow-1 pe-3'>
                    <Nav.Link data-toggle="collapse" as={Link} to='/LogIn'>
                      <button class="noselect blue">Log In</button>
                    </Nav.Link>
                    <Nav.Link data-toggle="collapse" as={Link} to='/signUp'>
                      <button class="noselect blue">Sign Up</button>
                    </Nav.Link>
                    <Nav.Link as={Link} to='/contact'>
                      <button class="noselect blue">Contact Us</button>
                    </Nav.Link>
                  </Nav>
                </Offcanvas.Body>
              </Navbar.Offcanvas>
            </Container>
          </Navbar>
        ))}
      </div>
      <div>
        <Routes>
          <Route path='/' element={<WeatherApi />} />
          <Route path='/HomePage' element={<HomePage />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/signUp' element={<SignUp />} />
          <Route path='/LogIn' element={<LogIn />} />
          <Route path='/audioVideo' element={<AudioVideo />} />
        </Routes>
      </div>
    </>
  );
}

export default NavBar;
