import {
    GET_ALL_FILES,
    LOGOUT,
    SELECT_FILE,
    DELETE_FILE
} from "../actions/actionTypes"

const initialState = {
    data: [],
    selectedFile: undefined
}

const getAllFiles = (state, action) => {
    return {
        ...state,
        data: [...action.payload.files]
    }
}

const selectFile = (state, action) => {
    return {
        ...state,
        selectedFile: action.payload.id
    }
}

const deleteFile = (state, actions) => {
    return {
        ...state,
        data: [...state.data.filter(file => file._id !== actions.payload.id)]
    }
}

export default function files(state = initialState, action) {
    switch (action.type) {
        case GET_ALL_FILES: return getAllFiles(state, action)
        case SELECT_FILE: return selectFile(state, action)
        case DELETE_FILE: return deleteFile(state, action)
        case LOGOUT: return { ...initialState }
        default:
            return state
    }
}
