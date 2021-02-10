import { ADD_ROW, ADD_ELEMENT, REMOVE_ROW, REMOVE_COLUMN, CHANGE_TEXT } from './actionTypes'
import { uid } from 'uid'
import ELEMENTTYPE from '../components/common/moduleELementTypes'

const addColumnByNumOfColumns = (numOfColumns, rowId) => {
  let column = {
    id: uid(),
    type: 'column',
    style: {},
    rowId,
    children: []
  }
  let column2 = {
    id: uid(),
    type: 'column',
    style: {},
    rowId,
    children: []
  }

  if (numOfColumns === 2) {
    return [{ ...column }, { ...column2 }]
  } else {
    return [{ ...column }]
  }
}

export const addRow = numOfColumns => {
  const rowId = uid()
  return {
    type: ADD_ROW,
    payload: {
      id: rowId,
      type: 'row',
      style: {},
      numOfColumns,
      children: [...addColumnByNumOfColumns(numOfColumns, rowId)]
    }
  }
}

export const addElement = (type, rowIndex, columnIndex) => {
  let element;
  let id = uid()
  switch (type) {
    case ELEMENTTYPE.text:
      const textId = uid()
      element = {
        id,
        type: 'text',
        style: {},
        content: 'this is text'
      }
      break;
    case ELEMENTTYPE.img:
      element = {
        id,
        type: 'img',
        style: {},
      }
      break;
    case ELEMENTTYPE.variable:
      element = {
        id,
        type: 'variable',
        style: {},
        title: 'Title',
        key: 'empty',
        value: undefined
      }
      break;
    default:
      break;
  }

  return {
    type: ADD_ELEMENT,
    rowIndex,
    columnIndex,
    payload: { ...element }
  }
}

export const removeRow = (rowIndex) => {
  return {
    type: REMOVE_ROW,
    payload: rowIndex
  }
}

export const removeColumn = (rowIndex, columnIndex) => {
  return {
    type: REMOVE_COLUMN,
    payload: { rowIndex, columnIndex }
  }
}

export const changeText = (rowIndex, columnIndex, elementIndex, value) => {
  return {
    type: CHANGE_TEXT,
    payload: {
      rowIndex,
      columnIndex,
      elementIndex,
      value
    }
  }
}