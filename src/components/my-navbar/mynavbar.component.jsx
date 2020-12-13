import React from 'react';

import Navbar from 'react-bootstrap/Navbar';

import Nav from 'react-bootstrap/Nav';

import Logo from "../../assets/icons/icon5.png";

import './mynavbar.style.css';

const MyNavbar = () => {

    return (

        <div>
      {/* taget html boshe i tregojne reactit qe po e mbeshtjellim kodin ne nje fragment*/}
    
<Navbar fixed="top" expand="md" variant="dark" className="animate-navbar nav-theme justify-content-between">
  <div>
  <Navbar.Brand href="#hello">

      <img className="logo" src= {Logo}  alt='Ssulaj s Portofolio '/>
  </Navbar.Brand>
  </div>
  <div>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link href="#hello">Hello</Nav.Link>
      <Nav.Link href="#about">About</Nav.Link>
      <Nav.Link href="#skills">Skills</Nav.Link>
      <Nav.Link href="#education">Education</Nav.Link>
      <Nav.Link href="#mywork">My work</Nav.Link>
      <Nav.Link href="#contactfooter">Contact</Nav.Link>
    </Nav>
  </Navbar.Collapse>
  </div>
</Navbar>
</div>
    );
};

export  default MyNavbar;