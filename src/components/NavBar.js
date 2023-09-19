import { useEffect, useState } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import {
  BrowserRouter as Router
} from "react-router-dom";


export const NavBar = () => {
  const [activeLink, setActiveLink] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  });
  
  const onUpdateActiveLink = (value) => {
    setActiveLink(value); 
  }  
  
  return (
    <Navbar expand="md" className={scrolled ? "scrolled": ""}>
      <Container>
        <Navbar.Brand href="#home">
         
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav">
          <span className="navbar-toggler-icon"></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link': 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>Home</Nav.Link>
            <Nav.Link href="#link" className={activeLink === 'skills' ? 'active navbar-link': 'navbar-link'} onClick={() => onUpdateActiveLink('skills')}>Skills</Nav.Link>
            <Nav.Link href="#projects" className={activeLink === 'projects' ? 'active navbar-link': 'navbar-link'} onClick={() => onUpdateActiveLink('project')}>Projects</Nav.Link>
          </Nav>
            <span className="navbar-text">
            <div className="social-icon">
                
              </div>
              <button className="vvd" onClick={() => console.log("connect")}>
                <span>Let's Connect</span>
              </button>
            </span>
          
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
