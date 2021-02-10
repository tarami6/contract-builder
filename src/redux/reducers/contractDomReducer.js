import { ADD_ROW, REMOVE_ROW, REMOVE_COLUMN, ADD_ELEMENT, EDIT_ELEMENT_TEXT, REMOVE_ELEMENT } from "../actionTypes"

const initialState = {
    body: {
        type: "body",
        style: {},
        rows: []
    },
    rows: {

    },
    columns: {

    },
    elements: {

    }
}

const addRow = (state, action) => {
    return {
        ...state,
        body: {
            ...state.body,
            rows: [...state.body.rows, action.payload.row.id]
        },
        rows: {
            ...state.rows,
            [action.payload.row.id]: { ...action.payload.row }
        },
        columns: {
            ...state.columns,
            ...action.payload.columns
        }
    }
}

const removeRow = (state, action) => {
    const newState = Object.assign({}, state);
    delete newState.rows[action.payload.rowId]
    Object.keys(newState.columns).map(idColumn => {
        if (newState.columns[idColumn].rowId === action.payload.rowId)
            delete newState.columns[idColumn]
        return
    })
    return {
        ...state,
        body: {
            ...state.body,
            rows: [...state.body.rows.filter(id => id !== action.payload.rowId)]
        },
        rows: { ...newState.rows },
        colunms: { ...newState.columns }
    }
}

const removeColumn = (state, action) => {
    const newState = Object.assign({}, state);
    delete newState.columns[action.payload.columnId]
    return {
        ...state,
        rows: {
            ...state.rows,
            [action.payload.rowId]: {
                ...state.rows[action.payload.rowId],
                numOfColumns: 1,
                columns: [...state.rows[action.payload.rowId].columns.filter(id => id !== action.payload.columnId)]
            }
        },
        columns: { ...newState.columns }
    }
}

const addElement = (state, action) => {
    return {
        ...state,
        columns: {
            ...state.columns,
            [action.payload.columnId]: {
                ...state.columns[action.payload.columnId],
                elements: [
                    ...state.columns[action.payload.columnId].elements,
                    action.payload.element.id
                ]
            }
        },
        elements: {
            ...state.elements,
            [action.payload.element.id]: {
                ...action.payload.element
            }
        }
    }
}

const editElementText = (state, action) => {
    return {
        ...state,
        elements: {
            ...state.elements,
            [action.payload.id]: {
                ...state.elements[action.payload.id],
                content: action.payload.value
            }
        }
    }
}

const removeElement = (state, action) => {
    const newState = Object.assign({}, state);
    delete newState.elements[action.payload.id]
    return {
        ...state,
        columns: {
            ...state.colunms,
            [action.payload.columnId]: {
                ...state.columns[action.payload.columnId],
                elements: [...state.columns[action.payload.columnId].elements.filter(id => id !== action.payload.id)]
            }
        },
        elements: { ...newState.elements }
    }
}

export default function contractDom(state = initialState, action) {
    switch (action.type) {
        case ADD_ROW: return addRow(state, action)
        case REMOVE_ROW: return removeRow(state, action)
        case REMOVE_COLUMN: return removeColumn(state, action)
        case ADD_ELEMENT: return addElement(state, action)
        case EDIT_ELEMENT_TEXT: return editElementText(state, action)
        case REMOVE_ELEMENT: return removeElement(state, action)
        default:
            return state
    }
}