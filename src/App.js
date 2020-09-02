import React, { useState } from 'react';
import { useDispatch } from "react-redux"
import myAppTheme from './components/theme/myAppTheme';
import './App.scss';
import { addItem } from "./components/redux/Actions"
import { Container, Grid, ThemeProvider } from '@material-ui/core';
import HeaderDate from './components/uiComponents/headerDate';
import Fab from '@material-ui/core/Fab';
import TextField from '@material-ui/core/TextField'
import AddIcon from '@material-ui/icons/Add';
import UserTasks from './components/uiComponents/userTasks';

function App() {

  const [taskChange, setTaskChange] = useState("");
  const dispatch = useDispatch()
  const handelChange = (event) => {
    setTaskChange(event.target.value)
  }
  const handelAdd = () => {
    if (taskChange.trim()) {
      dispatch(addItem(taskChange))
    }
    setTaskChange("")
  }


  return (
    <div className="App">
      <ThemeProvider theme={myAppTheme}>
        <Container disableGutters={true} maxWidth="md" style={{ height: "100vh" }}>
          <Grid xs={12} style={{ backgroundColor: "#455a64", height: "15vh", display: "flex", justifyContent: "center", alignItems: "center" }}>
            <HeaderDate />
          </Grid>
          <Grid container direction={"column"} xs={12} style={{ height: "85vh", direction: "rtl" }}>
            <Grid item container direction={"row"} wrap={"nowrap"} alignItems={"center"} style={{ height: "20vh", padding: "0px 20px" }}>
              <Fab onClick={() => handelAdd()} color="primary" aria-label="add">
                <AddIcon />
              </Fab>
              <Grid xs={12} style={{ padding: "0px 20px" }}>
                <TextField
                  onChange={handelChange}
                  value={taskChange}
                  placeholder="برنامه های خود را برای امروز وارد کنید !"
                  autoFocus
                  fullWidth
                  variant="standard"
                />
              </Grid>
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
