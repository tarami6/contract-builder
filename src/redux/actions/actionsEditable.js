import {
    CURRENT_STYBLE,
    EDIT_STYLE_ROW,
    EDIT_STYLE_COLUMN,
    EDIT_STYLE_ELEMENT,
    SET_TEMP_STYLE,
    SET_LOOP
} from "./actionTypes"
import {
    ELEMENTTYPE
} from "../config/elementSchema"

export const setCurrentEditable = (element) => {
    const {
        rowId,
        columnId,
        id,
        type
    } = element

    const isElement = (type) => {
        switch (type) {
            case ELEMENTTYPE.text:
            case ELEMENTTYPE.img:
            case ELEMENTTYPE.signature:
            case ELEMENTTYPE.devider:
            case ELEMENTTYPE.variable:
            case ELEMENTTYPE.code:
            case ELEMENTTYPE.table:
                return true
            default:
                return false
        }
    }
    const isColumn = type === ELEMENTTYPE.columns
    const isRow = type === ELEMENTTYPE.rows

    return {
        type: CURRENT_STYBLE,
        payload: {
            rowId: isRow ? id : rowId,
            columnId: isColumn ? id : columnId,
            elementId: isElement(type) ? id : undefined,
            currentId: id,
            currentType: type
        }
    }
}

export const editStyleRow = (rowId, style) => {
    return {
        type: EDIT_STYLE_ROW,
        payload: {
            rowId,
            style
        }
    }
}

export const editStyleColumn = (columnId, style) => {
    return {
        type: EDIT_STYLE_COLUMN,
        payload: {
            columnId,
            style
        }
    }
}

export const editStyleElement = (elementId, style) => {
    return {
        type: EDIT_STYLE_ELEMENT,
        payload: {
            elementId,
            style
        }
    }
}

export const setTempStyle = (type, style) => {
    return {
        type: SET_TEMP_STYLE,
        payload: {
            type,
            style
        }
    }
}

export const setLoop = (rowId, value) => {
    return {
        type: SET_LOOP,
        payload: {
            rowId,
            value
        }
    }
}
