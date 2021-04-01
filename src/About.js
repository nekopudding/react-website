import React from 'react'
import { Card, Image } from 'react-bootstrap';
import styled from 'styled-components';

//images
import profilepic from './assets/profilepic.jpeg'

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
    background: #72eaf2;
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



export const About = () => (
  <Styles>
    <Card border='black'>
      <h2>About Me</h2>
      <span>
        <Image src={profilepic} roundedCircle></Image>
      </span>
      
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
