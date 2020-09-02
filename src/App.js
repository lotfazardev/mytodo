import React from 'react';
import myAppTheme from './components/theme/myAppTheme';
import './App.scss';
import { Container, Grid, ThemeProvider } from '@material-ui/core';
import HeaderDate from './components/uiComponents/headerDate';
import UserTasks from './components/uiComponents/userTasks';
import AddTask from './components/uiComponents/addTasks';

function App() {

  return (
    <div className="App">
      <ThemeProvider theme={myAppTheme}>
        <Container disableGutters={true} maxWidth="md" style={{ height: "100vh" }}>
          <Grid xs={12} style={{ backgroundColor: "#455a64", height: "15vh", display: "flex", justifyContent: "center", alignItems: "center" }}>
            <HeaderDate />
          </Grid>
          <Grid container direction={"column"} xs={12} style={{ height: "85vh", direction: "rtl" }}>
            <Grid item container direction={"row"} wrap={"nowrap"} alignItems={"center"} style={{ height: "20vh", padding: "0px 20px" }}>
              <AddTask />
            </Grid>
            <Grid item style={{ height: "65vh", padding: "0px 20px", overflowY: "scroll" }}>
              <UserTasks />
            </Grid>
          </Grid>
        </Container>
      </ThemeProvider>
    </div>
  );
}
export default App;
