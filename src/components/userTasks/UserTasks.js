import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addItem } from "../redux/Actions"
function UserTasks() {
    const tasks = useSelector(state => state.tasks)
    const dispatch = useDispatch()
    
    return (
        <div className="App">
            <span>{JSON.stringify(tasks)}</span>
            <button onClick={() => dispatch(addItem())}>add task</button>
        </div>
    );
}

export default UserTasks;
