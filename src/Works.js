import React from 'react'
import { Card } from 'react-bootstrap';
import styled from 'styled-components';

//images
import donut from './assets/final_donut.png'

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
    padding-right: 5%;
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
  tr {
    vertical-align:top;
    display: table-row;
  }
`;

const imgStyle = {
  margin: '10px',
  float: 'right',
  height: '200px',
  width: '200px',
}
;



export const Works = () => (
  <Styles>
    <Card border='black'>
      <table>
        <h2>Other Works</h2>
        <div className='entries'>
          <tr>
            <th><a href='https://youtu.be/n8tbjalyaL8' target='_blank' rel="noreferrer">Donut Render</a></th>
            <th className='date'>Aug 2021</th>
          </tr>
          <tr>
            <td>
              <p>First render made with Blender. Followed Blender Guru's beginner Blender tutorial series.</p>
            </td>
            <td className='date'>
              <img src={donut} style={imgStyle} alt=''></img>
            </td>
          </tr>
        </div>
      </table>
      

    </Card>
  </Styles>
)
