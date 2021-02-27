import {
    CURRENT_STYBLE,
} from "../actions/actionTypes"

const initialState = {
    rowId: undefined,
    columnId: undefined,
    elementId: undefined,
    currentId: undefined,
    currentType: undefined
}

const setCurrentEditable = (state, action) => {
    return {
        ...state,
        rowId: action.payload.rowId,
        columnId: action.payload.columnId,
        elementId: action.payload.elementId,
        currentId: action.payload.currentId,
        currentType: action.payload.currentType
    }
}

export default function editable(state = initialState, action) {
    switch (action.type) {
        case CURRENT_STYBLE: return setCurrentEditable(state, action)
        default:
            return state
    }
}

