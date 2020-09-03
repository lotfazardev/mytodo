import React, { useState } from 'react';
import { useDispatch } from "react-redux";
import { addItem } from "../redux/Actions"
import { Fab, Grid, TextField, makeStyles } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';

const useStyles = makeStyles({
    textInputContainer : {
        padding: "0px 20px"
    }
})

const AddTask = () => {
    const classes = useStyles();
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

    const handelPressEnter = (event) => {
        if(event.keyCode === 13){
            handelAdd()
        }
    }
    return (
        <>
            <Fab onClick={() => handelAdd()} color="primary" aria-label="add">
                <AddIcon />
            </Fab>
            <Grid xs={12} className={classes.textInputContainer}>
                <TextField
                    onKeyUp={handelPressEnter}
                    onChange={handelChange}
                    value={taskChange}
                    placeholder="برنامه های خود را برای امروز وارد کنید !"
                    autoFocus
                    fullWidth
                    variant="standard"
                />
            </Grid>
        </>
    );
}

export default AddTask;