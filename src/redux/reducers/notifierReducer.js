import { TOGGLE_FILE_ADDED_NOTIFIER } from '../actions/actionTypes'

const initialState = {
    fileAddedNotifier: false
}

export default function notifier(state = initialState, actions) {
    switch (actions.type) {
        case TOGGLE_FILE_ADDED_NOTIFIER:
            return {
                ...state,
                fileAddedNotifier: !state.fileAddedNotifier
            }
        default:
            return state
    }
}