import {
    LOGIN,
    LOGOUT
} from '../actions/actionTypes'

const initialState = {
    logedIn: false
}

const logOut = () => {
    return {
        ...initialState
    }
}

export default function auth(state = initialState, action) {
    switch (action.type) {
        case LOGIN:
            return {
                ...state,
                logedIn: action.payload.logedIn
            }
        case LOGOUT: return logOut()
        default:
            return state
    }
}
