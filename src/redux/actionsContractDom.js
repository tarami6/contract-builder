import {
    ADD_ROW,
    REMOVE_ROW,
    REMOVE_COLUMN,
    ADD_ELEMENT,
    EDIT_ELEMENT_TEXT,
    REMOVE_ELEMENT,
    EDIT_ELEMENT_VARIABLE
} from './actionTypes'

import { uid } from 'uid'
import ELEMENTTYPE from '../components/common/moduleELementTypes'

const _column = rowId => (
    {
        id: uid(),
        rowId,
        type: 'column',
        style: {},
        elements: []
    }
)

const _row = (id, numOfColumns, columnsIds) => ({
    id,
    type: 'row',
    style: {},
    numOfColumns,
    columns: [...columnsIds]
})

const _text = (id, columnId) => ({
    id,
    columnId,
    type: 'text',
    style: {},
    content: 'this is text'
})

const _img = (id, columnId) => ({
    id,
    columnId,
    type: 'img',
    style: {},
})

const _variable = (id, columnId) => ({
    id,
    columnId,
    type: 'variable',
    style: {},
    title: 'Title',
    key: 'empty'
})

export const addRow = numOfColumns => {
    const columnsIds = []
    const columns = {}
    const rowId = uid()
    const column = _column(rowId)
    columnsIds.push(column.id)
    columns[column.id] = { ...column }

    if (numOfColumns === 2) {
        const column2 = _column(rowId)
        columnsIds.push(column2.id)
        columns[column2.id] = { ...column2 }
    }
    return {
        type: ADD_ROW,
        payload: {
            row: _row(rowId, numOfColumns, columnsIds),
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

export const addElement = (type, columnId) => {
    let element;
    let id = uid()

    switch (type) {
        case ELEMENTTYPE.text:
            element = _text(id, columnId)
            break;
        case ELEMENTTYPE.img:
            element = _img(id, columnId)
            break;
        case ELEMENTTYPE.variable:
            element = _variable(id, columnId)
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