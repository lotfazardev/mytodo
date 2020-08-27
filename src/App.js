import React, { useState } from 'react';
import './App.scss';
import { Container } from '@material-ui/core';
import HeaderDate from './components/uiComponents/headerDate';

function App() {
  
  return (
    <div className="App">
      <Container maxWidth="md">
        <HeaderDate/>
      </Container>
    </div>
  );
}
export default App;
