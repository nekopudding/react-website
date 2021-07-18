import React from 'react'
import { Card } from 'react-bootstrap';
import styled from 'styled-components';

//images
import profilepic from './assets/profilepic.jpeg'

//changes will only apply after reloading the webpage
const Styles = styled.div`

  .card {
    border-width: 1px;
    height: auto;
    padding-bottom: 150px;
    margin-bottom: 70px;
    background: #fafeff;
  }

  h2 {
    font-weight: 800;
    padding: 30px;
    background: #72eaf2;
    border-radius: 10px;
    margin: 10px;
  }
  p {
    margin 20px 80px;
    text-align: justify;
    display: inline;

  }

  span {
    width: 1px;
    height: 1px;
    margin-left: 30px;
    margin-top: 10px;
    background: black;
  }

  img {
    object-fit: contain;
    width: 20%;
    height: 20%;
    margin: 3%;
    margin-left: 6%;
    display: inline;
    border-radius: 50%;
  }
`;



export const About = () => (
  <Styles>
    <Card border='black'>
      <h2>About Me</h2>
      <img src={profilepic} alt='profilepic'></img>
      
      <p>
        I am a 2nd year undergraduate student at UBC majoring in Computer Engineering. 
        Currently in Co-op and actively seeking internship. 
        My passion is in game development, simulation, and machine learning.
        I’m open to all kinds jobs in the software development field as well as other
        opportunities to enhance my skills in graphics design/art/music composition and software. 
        You can find my contact information on the Contact page, email is preferred.
      </p>

      <p>More of my works as well as ongoing projects can be found on my github page.</p>
    </Card>
  </Styles>
)
