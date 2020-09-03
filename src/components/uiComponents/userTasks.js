import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { changeStateItem } from "../redux/Actions"
import { List, ListItem, ListItemIcon, ListItemText, Checkbox, Typography } from '@material-ui/core';

function UserTasks() {
    const tasksObject = useSelector(state => state.tasks)
    const dispatch = useDispatch()
    const handleToggle = (index) => () => {
        dispatch(changeStateItem(index))
    };
    return (
        <>
            {
                tasksObject.length ?
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
                    :
                    <>
                        <Typography>
                            برای امروز برنامه ای ندارید !
                        </Typography>
                    </>
            }

        </>
    );
}

export default UserTasks;
