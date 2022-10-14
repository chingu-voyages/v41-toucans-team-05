import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { Routes, Route, Link } from 'react-router-dom';
import About from './About';
import Contact from './Contact';
import SignUp from './SignUp';
import AudioVideo from './AudioVideo';

function NavBar() {
  return (
    <>
      <div className='NavBar'>
        {['sm'].map((expand) => (
          <Navbar key={expand} bg='light' expand={expand} className='mb-3'>
            <Container fluid>
              <Navbar.Brand href='/about'>Comfy</Navbar.Brand>
              <Navbar.Toggle
                aria-controls={`offcanvasNavbar-expand-${expand}`}
              />
              <Navbar.Offcanvas
                id={`offcanvasNavbar-expand-${expand}`}
                aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
                placement='end'
              >
                <Offcanvas.Header closeButton>
                  <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                    Comfy
                  </Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                  <Nav className='justify-content-end flex-grow-1 pe-3'>
                    <Nav.Link as={Link} to='/about'>
                      About
                    </Nav.Link>
                    <Nav.Link as={Link} to='/contact'>
                      Contact
                    </Nav.Link>
                    <Nav.Link as={Link} to='/signUp'>
                      SignUp
                    </Nav.Link>
                    <Nav.Link as={Link} to='/audioVideo'>
                      Audio/Video
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
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/signUp' element={<SignUp />} />
          <Route path='/audioVideo' element={<AudioVideo />} />
        </Routes>
      </div>
    </>
  );
}

export default NavBar;
