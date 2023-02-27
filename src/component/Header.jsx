import React from 'react';
import { useState } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { Linkedin } from "react-bootstrap-icons";

export default function Header() {

  const [navbar, setNavbar] = useState(false);

  const changeBackground = () => {

    if (window.scrollY >= 50) {
      setNavbar(true);
    }
    else {
      setNavbar(false);
    }
  };
  window.addEventListener('scroll', changeBackground);

  return (
    <Navbar expand="md" className={navbar ? "navScroll" : "navbar"} collapseOnSelect fixed='top'>
      <Container className="navContainer">
        <Navbar.Brand className="navBrand" href="/">
          <p>My Portfolio </p>
        </Navbar.Brand>
        <Navbar.Toggle className='navButton'
          aria-controls="basic-navbar-nav">
          <span className="navbar-toggler-icon iconBar"></span>

        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav" className="showBar">
          <Nav className="mx-auto menuList">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href='#skills'>Skills</Nav.Link>
            <Nav.Link href="#qualification">Qualification</Nav.Link>
            <Nav.Link href='#project'>Projects</Nav.Link>
            <Nav.Link href='#contact'>Contact</Nav.Link>
          </Nav>
          <span className="navbar-text">
            <div className="socialIcon">
              <a href='https://www.linkedin.com/in/shivani-devkota-736a27144/' target="_blank"><Linkedin size="25" /></a>
            </div>

          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}
