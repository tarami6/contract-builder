import { TOGGLE_ADD_ROW, TOGGLE_CHOOSE_IMG, TOGGLE_COPY_HTML } from './actionTypes'

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
