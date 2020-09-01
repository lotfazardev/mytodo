import React, { useState } from 'react';
import { useSelector, useDispatch } from "react-redux"
import myAppTheme from './components/theme/myAppTheme';
import './App.scss';
import { addItem, changeStateItem } from "./components/redux/Actions"
import { Container, Grid, ThemeProvider } from '@material-ui/core';
import HeaderDate from './components/uiComponents/headerDate';
import Fab from '@material-ui/core/Fab';
import TextField from '@material-ui/core/TextField'
import AddIcon from '@material-ui/icons/Add';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';

function App() {

  const [taskChange, setTaskChange] = useState("");
  const tasksObject = useSelector(state => state.tasks)
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
  const handleToggle = (index) => () => {
    dispatch(changeStateItem(index))
    console.log(tasksObject)
  };


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
              <List>
                {tasksObject.map((value, index) => {
                  const labelId = `checkbox-list-label-${index}`;
                  return (
                    <ListItem key={index} role={undefined} button onClick={handleToggle(index)}>
                      <ListItemIcon>
                        <Checkbox
                          checked={value.done}
                          disableRipple
                          inputProps={{ 'aria-labelledby': labelId }}
                        />
                      </ListItemIcon>
                      <ListItemText style={{ textAlign: "start" }} id={labelId} primary={value.taskName} />
                    </ListItem>
                  );
                })}
              </List>
            </Grid>
          </Grid>
        </Container>
      </ThemeProvider>
    </div>
  );
}
export default App;
