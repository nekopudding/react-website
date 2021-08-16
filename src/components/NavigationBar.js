import React,{useEffect} from 'react';

import { Link } from 'react-router-dom';
import { Nav, Navbar, Card } from 'react-bootstrap';
import styled from 'styled-components';

//importing images
import facebook from '../assets/facebook.png'
import github from '../assets/github.png'
import linkedin from '../assets/linkedin.png'

const Styles = styled.div`
  .navbar {
    background-color: #FFFFFF;
    padding-right: 40px;
    position: fixed;
    z-index: 1;

    width: 100%;
    max-width: 100%;
    min-height: 6vh;
    box-sizing: border-box;
    display: flex;
    justify-content: space-between;
    align-items: center;
    transition: all .5s ease;
  }
  .scrolled{
    filter: invert(1);
  }

  a, .navbar-nav .nav-link {
    color: black;
    text-decoration: none;
    text-style: bold;
    font-weight: 700;
    filter: opacity(50%);

    &:hover {
      filter: none;
    }
  }

  a, .navbar .nav-link .navbar-brand {
    text-color: black;
    filter: none;
  }

  .navbar .card {
    width: 50px; 
    border-width: 10px;
    filter: opacity(50%);

    &:hover {
      filter: none;
    }
  }

  
`;


//` is used for string, since styles are interpreted in string format
//&: syntax -> adds its parent's tags onto itself
//Nav.Link requires Link from react router to navigate as spa 
//sticky setup using https://dev.to/dalalrohit/sticky-navbar-from-scratch-using-react-37d5

export const NavigationBar = () => {
  const [scrolled,setScrolled]=React.useState(false);

  const handleScroll=() => {
    const offset=window.scrollY;
    if(offset > 210 ){
      setScrolled(true);
    }
    else if (offset <= 1) {
      setScrolled(false);
    }
  }
  useEffect(() => {
    window.addEventListener('scroll',handleScroll)
  })

  let x=['navbar'];
  if(scrolled){
    x.push('scrolled');

  }
  return (
    <Styles>
    <Navbar className={x.join(" ")} expand="lg">
      <Nav.Link>
        <Link to="/react-website/">
          <Navbar.Brand>Nekopudding's Personal Website</Navbar.Brand>
        </Link>
      </Nav.Link>
      <Card border='white'>
        <a href='https://www.facebook.com/dean.y.ca/' target='_blank' rel="noreferrer">
          <Card.Img variant='top' src={facebook}/>
        </a>
      </Card>
      <Card border='white'>
        <a href='https://github.com/nekopudding' target='_blank' rel="noreferrer">
          <Card.Img variant='top' src={github}/>
        </a>
      </Card>
      <Card border='white'>
        <a href='https://www.linkedin.com/in/dean-yang-438663189/' target='_blank' rel="noreferrer">
          <Card.Img variant='top' src={linkedin}/>
        </a>
      </Card>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Item>
            <Nav.Link>
              <Link to="/react-website/">About</Link>
            </Nav.Link>
          </Nav.Item>

          <Nav.Item>
            <Nav.Link>
              <Link to="/react-website/projects">Projects</Link>
            </Nav.Link>
          </Nav.Item>

          <Nav.Item>
            <Nav.Link>
              <Link to="/react-website/works">Works</Link>
            </Nav.Link>
          </Nav.Item>

          <Nav.Item>
            <Nav.Link>
              <Link to="/react-website/contact">Contact</Link>
            </Nav.Link>
          </Nav.Item>
        </Nav>
      </Navbar.Collapse>
      
    </Navbar>
  </Styles>
  )
};