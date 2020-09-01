import { ADD_ITEM, CHANGE_STATE_ITEM } from './Actions'

const initialState = {
    "tasks": [

    ]
}

const Reducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_ITEM:
            return {
                "tasks": [
                    ...state.tasks,
                    {
                        "taskName": action.payload,
                        "done": false
                    }
                ]
            }
        case CHANGE_STATE_ITEM:
            return {
                "tasks": state.tasks.map((currentValue, index) => {
                    if(index === action.payload){
                        currentValue.done = !currentValue.done
                    }
                    return currentValue
                })
            }
        default: return state
    }
}

export default Reducer