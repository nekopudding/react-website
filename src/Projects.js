import React from 'react'
import { Card } from 'react-bootstrap';
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
    width: 100%;
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
    width: 800px;
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
      color: grey;
      text-decoration: underline;
    }
  }
  
  .date {
    text-align: right;
    padding-right: 2%;
    width: 300px;
  }

  p, pre {
    padding: 2% 6%;
    text-align: left;
    margin: 0;
    width: 100%;

    display: block;
    font-family: arial;
    font-size: 1em;
    
  }
  #brk {
    word-break: break-all;
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
            <th><a href='https://nekopudding.itch.io/health-rpg' target='_blank' rel="noreferrer">HealthRPG</a></th>
            <th className='date'>Summer 2021</th>
          </tr>
          <tr>
            <p>HealthRPG is a self-care turn based combat real world exploration game inspired by Pokemon Go made for the 2021 Hack4Health hackathon event</p>
          </tr>
        </div>
        <div className='entries'>
          <tr>
            <th><a href='https://nekopudding.itch.io/health-rpg' target='_blank' rel="noreferrer">HealthRPG</a></th>
            <th className='date'>Summer 2021</th>
          </tr>
          <tr>
            <p>HealthRPG is a self-care turn based combat real world exploration game inspired by Pokemon Go made for the 2021 Hack4Health hackathon event</p>
          </tr>
        </div>
        <div className='entries'>
          <tr>
            <th><a href='#top' rel="noreferrer">Personal Website</a></th>
            <th className='date'>Spring 2021</th>
          </tr>
          <tr>
            <p>The creation of this website, source code: <a id='brk' href='https://github.com/nekopudding/react-website' target='_blank' rel="noreferrer">https://github.com/nekopudding/react-website</a></p>
          </tr>
        </div>
        <div className='entries'>
          <tr>
            <th><a href='https://nekopudding.itch.io/sunnyland' target='_blank' rel="noreferrer">Sunnyland</a></th>
            <th className='date'>Summer 2020 - Summer 2021</th>
          </tr>
          <tr>
            <p>2D Plaformer created on Unity using the Sunnyland asset pack</p>
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
            <p>Create a sudoku solver using a depth first search algorithm. Using this method, the solution will be found in a brute force method. Other more optimal methods of solving can be explored <a href='https://en.wikipedia.org/wiki/Sudoku_solving_algorithms' target='_blank' rel="noreferrer">here</a></p>
          </tr>
        </div>
        <div className='entries'>
          <tr>
            <th>AI Simulations</th>
            <th className='date'></th>
          </tr>
          <tr>
            <p>Create AI simulations of real life problems. This may be a bit advanced, it would be a good idea to start with simulations of simpler systems.</p>
            <p>Inspired by <a href='https://www.youtube.com/watch?v=Sr2ga3BBMTc' target='_blank' rel="noreferrer">Two Minute Papers</a></p>
          </tr>
        </div>

      </table>
      

    </Card>
  </Styles>
)
