import React from 'react';
import Container from 'react-bootstrap/Container';

export const Layout = (props) => (
  <Container> {/*container is part of bootstrap, centers and prevents overflowing text*/}
    {props.children}
  </Container>
)