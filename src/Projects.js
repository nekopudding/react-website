import React from 'react'
import { Card, Image } from 'react-bootstrap';
import styled from 'styled-components';

//images

//changes will only apply after reloading the webpage
const Styles = styled.div`

  .card {
    border-width: 1px;
    height: 600px;
    margin-bottom: 100px;
  }

  h2 {
    font-weight: 800;
    padding: 30px;
    background: #f2bd72;
    border-radius: 10px;
    margin: 10px;
  }
  p {
    margin 20px;
    margin-left: 300px;
    margin-right: 50px;
    text-align: justify;

  }

  span {
    width: 1px;
    height: 1px;
    margin-left: 30px;
    margin-top: 10px;
    background: black;
  }
`;



export const Projects = () => (
  <Styles>
    <Card border='black'>
      <h2>Projects</h2>
      
    </Card>
  </Styles>
)
