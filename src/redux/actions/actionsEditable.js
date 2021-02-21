import {
    CURRENT_STYBLE
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
    const itsLement = type === ELEMENTTYPE.text || type === ELEMENTTYPE.img || type === ELEMENTTYPE.signature || type === ELEMENTTYPE.variable
    const isColumn = type === ELEMENTTYPE.column
    const isRow = type === ELEMENTTYPE.row
    
    return {
        type: CURRENT_STYBLE,
        payload: {
            rowId: isRow ? id : rowId,
            columnId: isColumn ? id : columnId,
            elementId: itsLement ? id : undefined,
            currentId: id,
            currentType: type
        }
    }
}