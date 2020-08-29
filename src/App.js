import React from 'react';
import './App.scss';
import { Container, Grid } from '@material-ui/core';
import HeaderDate from './components/uiComponents/headerDate';

function App() {

  return (
    <div className="App">
      <Container maxWidth="md" style={{ backgroundColor: "red", height: "100vh" }}>
        <Grid xs={12} style={{ backgroundColor: "yellow", height: "15vh", display: "flex", justifyContent: "center", alignItems: "center" }}>
          <HeaderDate />
        </Grid>
        <Grid xs={12} style={{ backgroundColor: "green", height: "85vh" }}>
        </Grid>
      </Container>
    </div>
  );
}
export default App;
