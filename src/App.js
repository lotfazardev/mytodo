import React from 'react';
import myAppTheme from './components/theme/myAppTheme';
import './App.scss';
import { Container, Grid, ThemeProvider, makeStyles } from '@material-ui/core';
import HeaderDate from './components/uiComponents/headerDate';
import UserTasks from './components/uiComponents/userTasks';
import AddTask from './components/uiComponents/addTasks';

const useStyles = makeStyles({
  root: {
    height: "100vh"
  },
  header: {
    backgroundColor: "#455a64",
    height: "15vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  },
  contentContainer: {
    height: "85vh",
    direction: "rtl"
  },
  addItemContainer: {
    height: "20vh",
    padding: "0px 20px"
  },
  listItemContainer: {
    height: "65vh",
    padding: "0px 20px",
    overflowY: "scroll"
  }
});
function App() {
  const classes = useStyles();
  return (
    <div className="App">
      <ThemeProvider theme={myAppTheme}>
        <Container disableGutters={true} maxWidth="md" className={classes.root}>
          <Grid xs={12} className={classes.header}>
            <HeaderDate />
          </Grid>
          <Grid container direction={"column"} xs={12} className={classes.contentContainer}>
            <Grid item container direction={"row"} wrap={"nowrap"} alignItems={"center"} className={classes.addItemContainer}>
              <AddTask />
            </Grid>
            <Grid item className={classes.listItemContainer}>
              <UserTasks />
            </Grid>
          </Grid>
        </Container>
      </ThemeProvider>
    </div>
  );
}
export default App;
