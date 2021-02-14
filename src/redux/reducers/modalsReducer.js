import {TOGGLE_ADD_ROW} from '../actionTypes'
const initialState = {
    addRow: true
}

export default function (state = initialState, action) {
    switch (action.type) {
        case TOGGLE_ADD_ROW:
            return {
                ...state,
                addRow: !state.addRow
            }
        default:
            return state
    }
}