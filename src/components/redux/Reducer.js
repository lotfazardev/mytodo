import { ADD_ITEM, CHANGE_STATE_ITEM } from './Actions'

const initialState = {
    "tasks": [
        {
            "taskName": "this is a simple test task",
            "done": false
        }
    ]
}

const Reducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_ITEM: return {
            "tasks" : [
                ...state.tasks,
                {
                    "taskName": `another task`,
                    "done" : false
                }
            ]
        }
        case CHANGE_STATE_ITEM: return {
            "tasks" : [
                ...state.tasks
            ]
        }
        default: return state
    }
}

export default Reducer