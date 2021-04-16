import {
    CURRENT_STYBLE,
    SET_TEMP_STYLE,
    LOGOUT
} from "../actions/actionTypes"

const initialState = {
    rowId: undefined,
    columnId: undefined,
    elementId: undefined,
    currentId: undefined,
    currentType: undefined,
    tempStyle: {
        type: undefined,
        style: {}
    }
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

const setTempStyle = (state, action) => {
    return {
        ...state,
        tempStyle: {
            type: action.payload.type,
            style: { ...action.payload.style }
        }
    }
}

const logOut = () => {
    return {
        ...initialState
    }
}

export default function editable(state = initialState, action) {
    switch (action.type) {
        case CURRENT_STYBLE: return setCurrentEditable(state, action)
        case SET_TEMP_STYLE: return setTempStyle(state, action)
        case LOGOUT: return logOut()
        default:
            return state
    }
}

