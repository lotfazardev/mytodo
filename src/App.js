import React from 'react';
import './App.scss';
import { Container, Grid, Typography } from '@material-ui/core';
import HeaderDate from './components/uiComponents/headerDate';
import Fab from '@material-ui/core/Fab';
import TextField from '@material-ui/core/TextField'
import AddIcon from '@material-ui/icons/Add';

function App() {

  return (
    <div className="App">
      <Container disableGutters={true} maxWidth="md" style={{ height: "100vh" }}>
        <Grid xs={12} style={{ backgroundColor: "#455a64", height: "15vh", display: "flex", justifyContent: "center", alignItems: "center" }}>
          <HeaderDate />
        </Grid>
        <Grid container direction={"column"} xs={12} style={{ height: "85vh", direction: "rtl" }}>
          <Grid item container direction={"row"} wrap={"nowrap"} alignItems={"center"} style={{ height: "20vh", padding: "0px 20px" }}>
            <Fab color="primary" aria-label="add">
              <AddIcon />
            </Fab>
            <Grid xs={12} style={{ padding: "0px 20px" }}>
              <TextField
                placeholder="برنامه های خود را برای امروز وارد کنید !"
                autoFocus
                fullWidth
                variant="standard"
              />
            </Grid>
          </Grid>
          <Grid item style={{ height: "65vh", padding: "0px 20px", overflowY: "scroll" }}>

          </Grid>
        </Grid>
      </Container>
    </div>
  );
}
export default App;
