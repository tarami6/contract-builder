import { TOGGLE_ADD_ROW } from '../actions/actionTypes'
const initialState = {
    addRow: false
}

export default function modals(state = initialState, action) {
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