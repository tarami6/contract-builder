import { uid } from 'uid'
import {
    ADD_ROW,
    REMOVE_ROW,
    REMOVE_COLUMN,
    ADD_ELEMENT,
    EDIT_ELEMENT_TEXT,
    REMOVE_ELEMENT,
    EDIT_ELEMENT_VARIABLE
} from './actionTypes'
import {
    ELEMENTTYPE,
    columnConstructor,
    rowContsructor,
    textContstractor,
    imgConstractor,
    signatureConstractor,
    variableConstractor, wysContstractor, deviderContstractor
} from '../config/elementSchema'

export const addRow = numOfColumns => {
    const columnsIds = []
    const columns = {}
    const rowId = uid()
    const column = columnConstructor(rowId)
    columnsIds.push(column.id)
    columns[column.id] = { ...column }

    if (numOfColumns > 0) {
        let pushToColumns = (numOfColumns) => {
            if (numOfColumns === 0) {
                return
            } 
            const newColumn = columnConstructor(rowId)
            columnsIds.push(newColumn.id)
            columns[newColumn.id] = { ...newColumn }
            pushToColumns(numOfColumns - 1)
        }
        pushToColumns(numOfColumns)
    }

    return {
        type: ADD_ROW,
        payload: {
            row: rowContsructor(rowId, numOfColumns, columnsIds),
            columns: { ...columns }
        }
    }
}

export const removeRow = (rowId) => {
    return {
        type: REMOVE_ROW,
        payload: {
            rowId
        }
    }
}

export const removeColumn = (rowId, columnId) => {
    return {
        type: REMOVE_COLUMN,
        payload: {
            rowId,
            columnId
        }
    }
}

export const addElement = (type, columnId, rowId, imgSrc) => {
    let element;
    let id = uid()

    switch (type) {
        case ELEMENTTYPE.text:
            element = textContstractor(id, columnId, rowId)
            break;
        case ELEMENTTYPE.wys:
            element = wysContstractor(id, columnId, rowId)
            break;
        case ELEMENTTYPE.img:
            element = imgConstractor(id, columnId, rowId, imgSrc)
            break;
        case ELEMENTTYPE.variable:
            element = variableConstractor(id, columnId, rowId)
            break;
        case ELEMENTTYPE.signature:
            element = signatureConstractor(id, columnId, rowId)
            break;
        case ELEMENTTYPE.devider:
            element = deviderContstractor(id, columnId, rowId)
            break;
        default:
            break;
    }

    return {
        type: ADD_ELEMENT,
        payload: {
            columnId,
            element
        }
    }
}

export const editElementText = (id, value) => {
    return {
        type: EDIT_ELEMENT_TEXT,
        payload: {
            id,
            value
        }
    }
}

export const editElementVariable = (id, value) => {
    return {
        type: EDIT_ELEMENT_VARIABLE,
        payload: {
            id,
            value
        }
    }
}

export const removeElement = (id, columnId) => {
    return {
        type: REMOVE_ELEMENT,
        payload: {
            id,
            columnId
        }
    }
}