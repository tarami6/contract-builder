import { ADD_ROW, ADD_ELEMENT, REMOVE_ROW, REMOVE_COLUMN, CHANGE_TEXT } from '../actionTypes'
const initialState = {
  body: {
    type: "body",
    style: {},
    children: []
  }
}

const addRow = (state, action) => {
  return {
    ...state,
    body: {
      ...state.body,
      children: [...state.body.children, action.payload]
    }
  }
}

const addElement = (state, action) => {
  return {
    ...state,
    body: {
      ...state.body,
      children: [
        ...state.body.children.slice(0, action.rowIndex),
        state.body.children[action.rowIndex] = {
          ...state.body.children[action.rowIndex],
          children: [
            ...state.body.children[action.rowIndex].children.slice(0, action.columnIndex),
            {
              ...state.body.children[action.rowIndex].children[action.columnIndex],
              children: [...state.body.children[action.rowIndex].children[action.columnIndex].children, { ...action.payload }]
            },
            ...state.body.children[action.rowIndex].children.slice(action.columnIndex + 1),
          ]
        },
        ...state.body.children.slice(action.rowIndex + 1)
      ]
    }
  }
}

const removeColumn = (state, action) => {
  return {
    ...state,
    body: {
      ...state.body,
      children: [
        ...state.body.children.slice(0, action.payload.rowIndex),
        state.body.children[action.payload.rowIndex] = {
          ...state.body.children[action.payload.rowIndex],
          numOfColumns: 1,
          children: [
            ...state.body.children[action.payload.rowIndex].children.slice(0, action.payload.columnIndex),
            ...state.body.children[action.payload.rowIndex].children.slice(action.payload.columnIndex + 1)
          ]
        },
        ...state.body.children.slice(action.payload.rowIndex + 1)
      ]
    }
  }
}

const removeRow = (state, action) => {
  return {
    ...state,
    body: {
      ...state.body,
      children: [...state.body.children.slice(0, action.payload), ...state.body.children.slice(action.payload + 1)]
    }
  }
}

const changeText = (state, action) => {
  const vdom = Object.assign({}, state)
  vdom.body.children[action.payload.rowIndex].children[action.payload.columnIndex].children[action.payload.elementIndex].content = action.payload.value
  return {
    ...vdom,
  }
}

// Use the initialState as a default value
export default function htmlObj(state = initialState, action) {
  // The reducer normally looks at the action type field to decide what happens
  switch (action.type) {
    // Do something here based on the different types of actions
    case ADD_ROW: return addRow(state, action);
    case ADD_ELEMENT: return addElement(state, action);
    case REMOVE_ROW: return removeRow(state, action);
    case REMOVE_COLUMN: return removeColumn(state, action);
    case CHANGE_TEXT: return changeText(state, action);
    default:
      // If this reducer doesn't recognize the action type, or doesn't
      // care about this specific action, return the existing state unchanged
      return state
  }
}