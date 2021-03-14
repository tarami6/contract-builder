import { TOGGLE_ADD_ROW, TOGGLE_CHOOSE_IMG, TOGGLE_COPY_HTML } from '../actions/actionTypes'
const initialState = {
    addRow: false,
    chooseImg: false,
    copyHtml: false
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
        default:
            return state
    }
}