const ADD_ITEM = "ADD_ITEM"
const CHANGE_STATE_ITEM = "CHANGE_STATE_ITEM"

const addItem = (value) => {
    return {
        type: ADD_ITEM ,
        payload : value
    }
}

const changeStateItem = (index) => {
    return {
        type: CHANGE_STATE_ITEM ,
        payload : index
    }
}

export {
    ADD_ITEM,
    addItem,
    CHANGE_STATE_ITEM,
    changeStateItem
};