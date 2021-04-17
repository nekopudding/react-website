import React from 'react';
import { Jumbotron as Jumbo, Container } from 'react-bootstrap';
import styled from 'styled-components';
import bgImage from '../assets/bgImage.jpg';


const Styles = styled.div`
  .jumbo {
    background: url(${bgImage}) no-repeat fixed bottom;
    background-size: cover;
    color: #ccc;
    height: 280px;
    position: relative;
    z-index: -2;
  }

  .overlay {
    background-color: #000;
    opacity: 0.2;
    //position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    z-index: -1;

  }

  h1 {
    margin-top: 80px;
  }
`;


//include contact information like resume
export const Jumbotron = () => (
  <Styles>
    <Jumbo fluid className = 'jumbo'>
      <div className = 'overlay'></div>
      <Container>
        <h1>Welcome</h1>
        <p></p>
      </Container>
    </Jumbo>
  </Styles>
)