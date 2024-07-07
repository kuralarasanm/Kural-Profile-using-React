import React, { useEffect, useState } from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import "../styles/navbar.css"
import { NavDropdown } from 'react-bootstrap';

function Navbar1() {
  const [activeLink, setActiveLink] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section');
      const scrollPos = window.scrollY + 200;

      sections.forEach((section) => {
        if (scrollPos > section.offsetTop && scrollPos < section.offsetTop + section.offsetHeight) {
          setActiveLink(section.getAttribute('id'));
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div>

      {/* <Navbar bg="white" data-bs-theme="dark">
        <Container>
          <div className="folio">
            <Navbar.Brand href="#home"><h1 className='d-flex mt-5'>Port<h2 className='text-dark mt-4'>Folio</h2></h1></Navbar.Brand>
          </div>
          <div className="navbar-a">
          <Nav className="" defaultActiveKey="/home">
           <Nav.Link href="#home" className='text-dark active'>Home</Nav.Link>
           <Nav.Link href="#about" className='text-dark'>About</Nav.Link>
           <Nav.Link href="#skills" className='text-dark'>Skills</Nav.Link>
           <Nav.Link href="#education" className='text-dark'>Education</Nav.Link>
           <Nav.Link href="#project" className='text-dark'>Project</Nav.Link>
           <Nav.Link href="#contact" className='text-dark'>Contact</Nav.Link>
          </Nav>
          </div>
          <div class="navbar-hire">
            <Button variant="outline-success">Hire Me</Button>
          </div>
        </Container>
      </Navbar> */}

        {/* <Navbar expand="lg" className="bg-body-tertiary">
          <Container>
            <Navbar.Brand href="#home"><div class="folio">
              <h1>Port<h2 className=''>Folio</h2></h1>
            </div></Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="#home" className='me-5'>Home</Nav.Link>
                <Nav.Link href="#about" className='me-5'>About</Nav.Link>
                {/* <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown> */}
                {/* <Nav.Link href="#skills" className='me-5'>Skills</Nav.Link>
                <Nav.Link href="#education" className='me-5'>Education</Nav.Link>
                <Nav.Link href="#project" className='me-5'>Project</Nav.Link>
                <Nav.Link href="#contact" className='me-5'>Contact</Nav.Link>
              </Nav>
              <div class="navbar-hire">
                <button>Hire Me</button>
              </div>
            </Navbar.Collapse>
          </Container>
        </Navbar> */}
        
              {/* active link */}
      <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">
          <div className="folio">
            <h1>Port<h2>Folio</h2></h1>
          </div>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home" className={`me-5 ${activeLink === 'home' ? 'active' : ''}`}>Home</Nav.Link>
            <Nav.Link href="#about" className={`me-5 ${activeLink === 'about' ? 'active' : ''}`}>About</Nav.Link>
            <Nav.Link href="#skills" className={`me-5 ${activeLink === 'skills' ? 'active' : ''}`}>Skills</Nav.Link>
            <Nav.Link href="#education" className={`me-5 ${activeLink === 'education' ? 'active' : ''}`}>Education</Nav.Link>
            <Nav.Link href="#project" className={`me-5 ${activeLink === 'project' ? 'active' : ''}`}>Project</Nav.Link>
            <Nav.Link href="#contact" className={`me-5 ${activeLink === 'contact' ? 'active' : ''}`}>Contact</Nav.Link>
          </Nav>
          <div className="navbar-hire">
            <button>Hire Me</button>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>


      {/* <section>
        <nav class="navbar navbar-expand-lg container">
          <div class="container-fluid">
            <a class="navbar-brand folio" href="#"><h1>Port<h2 className=''>Folio</h2></h1></a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item">
                  <a class="nav-link active" aria-current="page" href="#">Home</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#about">About</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#skills" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Skills
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href='#education'>Education</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href='#project'>Project</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href='#contact'>contact</a>
                </li>
              </ul>
              
            </div>
          </div>
          <div class="navbar-hire col-2">
                <button>Hire Me</button>
              </div>
        </nav>
      </section> */}


      {/* <section class="navbar container" id="navbar">
        <div class="folio">
              <h1>Port<h2 className=''>Folio</h2></h1>
            </div>
            <div class="navbar-a">
              <a href="#home" class="active">Home</a>
              <a href="#about">About</a>
              <a href="#skills">Skills</a>
              <a href="#education">Education</a>
              <a href="#project">Project</a>
              <a href="#contact">Contact</a>
            </div>
            <div class="navbar-hire">
              <button>Hire Me</button>
            </div>
      </section> */}


    </div>

  )
}

export default Navbar1
