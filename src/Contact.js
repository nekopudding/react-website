import React from 'react'
import { Card } from 'react-bootstrap';
import styled from 'styled-components';

//images

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
    background: #f2f072;
    border-radius: 10px;
    margin: 10px;
  }
  b {
    padding-left: 40px;
    margin: 10px;
  }
  ul {
    list-style-type: none;  
    & li a {
      color: black;
      text-decoration: none;

      &:hover {
        filter: opacity(50%);
      }
    }
  }

  li {
    margin: 20px;
  }
  a {
    word-break: break-all;
  }
  
`;



export const Contact = () => (
  <Styles>
    <body>
    <Card border='black'>
      <h2>Contact</h2>
      <ul>
        <li><b>Email: </b><span>deany.y.ca@gmail.com</span></li>
        <li><b>Socials: </b></li>
          <ul>
            <li><a href='https://www.facebook.com/dean.y.ca/'><b>Facebook:</b><span>https://www.facebook.com/dean.y.ca/</span></a></li>
            <li><a href='https://www.linkedin.com/in/dean-yang-438663189/'><b>Linkedin: </b><span>https://www.linkedin.com/in/dean-yang-438663189/</span></a></li>
          </ul>      
      </ul>
    </Card>
    </body>
  </Styles>
)
