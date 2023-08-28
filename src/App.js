import styled from "styled-components";
import React, { useState, useEffect } from 'react';

function App() {

  return (<>
      <Container>
        <p>
          Electron is ready
        </p>
      </Container>
  </>)
}

export default App;

const Container = styled.button`
color: pink;
width: 400px;
height: 400px;
`
