import { SAVE_VAR_JSON } from "../actions/actionTypes"

export const saveJson = (value) => {
    return {
        type: SAVE_VAR_JSON,
        payload: {
            json: value
        }
    }
}