import React from 'react'
import { Card, Image } from 'react-bootstrap';
import styled from 'styled-components';

//images

//changes will only apply after reloading the webpage
const Styles = styled.div`

  .card {
    margin: 0;
    border-width: 1px;
    height: auto;
    padding-bottom: 150px;
    margin-bottom: 70px;
    background: #fffcf5;
  }

  table {
    table-layout: fixed;
  }

  h2 {
    font-weight: 800;
    padding: 30px;
    background: #f2bd72;
    border-radius: 10px;
    margin: 10px;
  }

  .sndheader {
    margin-top: 30px;
  }

  .entries {
    border: #fcf2e3 2px dashed;
    margin: 0.5% 4% 1%;
    border-radius: 10px;
    background: #fff7eb;
    padding: 2% 0 2% 4%; 
    
  }

  th {
    width: 67%;
    font-size: 19.2px;
    text-style: bold;
    font-weight: 700;
    text-align: left;

    padding: 0 2% 0;
    
  }

  a {
    text-decoration: none;
    color: black;
    &:hover {
      filter: opacity(50%);
    }
  }
  
  .date {
    text-align: right;
    padding-right: 4%;
  }

  p, pre {
    padding: 2% 6%;
    text-align: left;
    margin: 0;

    display: block;
    font-family: arial;
    font-size: 1em;

  }
`;

//pre is a tag used to maintain the spacing of the contained text
//it can be useful for copy pasting code blocks

export const Projects = () => (
  <Styles>
    <Card border='black'>
      
      <table>
        <h2>Projects</h2>
        <div className='entries'>
          <tr>
            <th><a href='https://github.com/nekopudding/unity_sunnyland' target='_blank' rel="noreferrer">Sunnyland</a></th>
            <th className='date'>Summer 2020 - Ongoing</th>
          </tr>
          <tr>
            <p>2D Plaformer created on Unity using the Sunnyland asset pack. Development is still in progress. Once finished, the game will be deployed on itch.io.</p>
          </tr>
        </div>

        <div className='entries'>
          <tr>
            <th><a href='https://github.com/nekopudding/wiki_querying' target='_blank' rel="noreferrer">School Project - Wikipedia Querying</a></th>
            <th className='date'>Fall 2020</th>
          </tr>
          <tr>
            <p>In this team project, we exercised our knowledge of multithreading and concurrency by using the jwiki library to implement several types of query operations for Wikipedia's pages. We also implemented caching methods for those queries through the use of a buffer.</p>
            <p>The project requires that the code written is thread-safe. We exercised writing specifications, RIs, AFs and thread-safety conditions, as well as our own test cases using the coverage testing method as guideline.</p>
          </tr>
        </div>

        <div className='entries'>
          <tr>
            <th><a href='https://github.com/nekopudding/graphs' target='_blank' rel="noreferrer">School Project - Graph ADT and AI</a></th>
            <th className='date'>Fall 2020</th>
          </tr>
          <tr>
            <p>In this team project, we implemented a graph ADT using Adj. List and Adj. Matrix implementations and created simple AIs to simulate a virtual world where animals can interact with one another, with the goal of creating a rabbit AI which will maximize its survivability.</p>
            <p>We exercised writing representation invariants, abstract functions, and method specifications as well as writing our own test cases using coverage and edge case testing methods.</p>
          </tr>
        </div>

        <div className='entries'>
          <tr>
            <th><a href='https://github.com/nekopudding/image_processing' target='_blank' rel="noreferrer">School Project - Image Processing</a></th>
            <th className='date'>Fall 2020</th>
          </tr>
          <tr>
            <p>In this team project, we implemented several image processing operations such as rotations and Fourier Transform operations.</p>
            <p>We wrote our own test cases using branch/class/line coverage testing as well as edge case testing as a guideline for how we should approach designing test cases.</p>
          </tr>
        </div>

        <h2 className='sndheader'>Project Ideas for the Future</h2>
        <div className='entries'>
          <tr>
            <th>Circuit Solver</th>
            <th className='date'></th>
          </tr>
          <tr>
            <p>Create a circuit solver for elements including resistor, capacitors, diodes, opamps etc. using methods of nodal and mesh analysis.</p>
            <p>A graph may be considered for implementing this, where directed edges represent connections to other elements. In edge = neg terminal, Out edge = pos terminal</p>
          </tr>
        </div>
        <div className='entries'>
          <tr>
            <th>Sudoku Solver</th>
            <th className='date'></th>
          </tr>
          <tr>
            <p>Create a sudoku solver using a depth first search algorithm.</p>
            <p>Using this method, the solution will be found in a brute force method. Other more optimal methods of solving can be explored on:</p>
            <p><a>https://en.wikipedia.org/wiki/Sudoku_solving_algorithms</a></p>
          </tr>
        </div>

        <div className='entries'>
          <tr>
            <th>AI Simulations</th>
            <th className='date'></th>
          </tr>
          <tr>
            <p>Create AI simulations of real life problems. This may be a bit advanced, it would be a good idea to start with simulations of simpler systems.</p>
            <p>Inspired by: </p>
            <p><a>https://www.youtube.com/watch?v=Sr2ga3BBMTc</a></p>
          </tr>
        </div>

      </table>
      

    </Card>
  </Styles>
)
