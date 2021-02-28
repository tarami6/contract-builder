import { TOGGLE_ADD_ROW, TOGGLE_CHOOSE_IMG } from '../actions/actionTypes'
const initialState = {
    addRow: false,
    chooseImg: false
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
        default:
            return state
    }
}