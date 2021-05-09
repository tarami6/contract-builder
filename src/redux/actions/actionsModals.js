import {
    TOGGLE_ADD_ROW,
    TOGGLE_CHOOSE_IMG,
    TOGGLE_COPY_HTML,
    TOGGLE_ADD_LOOP,
    TOGGLE_FILE_NAME,
    TOGGLE_VAR_JSON
} from './actionTypes'

export const toggleAddRow = () => {
    return {
        type: TOGGLE_ADD_ROW
    }
}

export const toggleChooseImg = () => {
    return {
        type: TOGGLE_CHOOSE_IMG
    }
}

export const toggleCopyHtml = () => {
    return {
        type: TOGGLE_COPY_HTML
    }
}

export const toggleAddLoop = () => {
    return {
        type: TOGGLE_ADD_LOOP
    }
}

export const toggleFileName = () => {
    return {
        type: TOGGLE_FILE_NAME
    }
}

export const toggleVarJson = () => {
    return {
        type: TOGGLE_VAR_JSON
    }
}
