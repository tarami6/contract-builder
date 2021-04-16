import {
    TOGGLE_ADD_ROW,
    TOGGLE_CHOOSE_IMG,
    TOGGLE_COPY_HTML,
    TOGGLE_ADD_LOOP,
    LOGOUT
} from '../actions/actionTypes'

const initialState = {
    addRow: false,
    chooseImg: false,
    copyHtml: false,
    addLoop: false
}

const logOut = () => {
    return {
        ...initialState
    }
}

export default function modals(state = initialState, action) {
    switch (action.type) {
        case TOGGLE_ADD_ROW:
            return {
                ...state,
                addRow: !state.addRow
            }
        case TOGGLE_CHOOSE_IMG:
            return {
                ...state,
                chooseImg: !state.chooseImg
            }
        case TOGGLE_COPY_HTML:
            return {
                ...state,
                copyHtml: !state.copyHtml
            }
        case TOGGLE_ADD_LOOP:
            return {
                ...state,
                addLoop: !state.addLoop
            }
        case LOGOUT: return logOut()
        default:
            return state
    }
}