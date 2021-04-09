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
    background: #fffcf5;
  }

  h2 {
    font-weight: 800;
    padding: 30px;
    background: #72eaf2;
    border-radius: 10px;
    margin: 10px;
  }
  p {
    margin 20px;
    margin-left: 50px;
    margin-right: 50px;
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
      
      <p>I am a 2nd year undergraduate student at UBC seeking a degree 
        in Computer Engineering. As you can probably tell from my profile 
        picture, I love games! From game design, to development, sound design, 
        graphics, to playing. If it’s something that I’m passionate about, 
        I’ll always put in 100% of my effort! Of course, I’m open to all kinds 
        of things that will enhance my skills as a software engineer. Who knows, 
        I might just stumble upon a new passion. So don’t hesitate to contact me 
        if you are seeking new hires!</p>

      <p>Aside from programming and gaming, playing the piano is also one of my hobbies.</p>
    </Card>
  </Styles>
)
