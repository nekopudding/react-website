import React from 'react'
import { Card, Image } from 'react-bootstrap';
import styled from 'styled-components';

//images

//changes will only apply after reloading the webpage
const Styles = styled.div`

  .card {
    border-width: 1px;
    height: auto;
    padding-bottom: 150px;
    margin-bottom: 70px;
  }
  table {
  }
  td, th {
    padding: 0px 40px;
    text-align: left;
    width: 50%;
  }
  h2 {
    font-weight: 800;
    padding: 30px;
    background: #727df2;
    border-radius: 10px;
    margin: 10px;
  }
  b {
    padding-left: 40px;
    margin: 10px;
  }
  ul {
    list-style-type: bullet;  
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
  .r {
    text-align: right;
  }
`;



export const Blog = () => (
  <Styles>
    <Card border='black'>
      <h2>Blog</h2>
    </Card>
  </Styles>
)
