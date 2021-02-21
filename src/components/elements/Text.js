import React, { useState } from "react";
import { editElementText, removeElement } from '../../redux/actions/actionsContractDom'
import { useSelector, useDispatch } from 'react-redux'
import { CheckCircle, XCircle } from 'react-bootstrap-icons'
import { Card } from '@material-ui/core'
import { setCurrentEditable } from '../../redux/actions/actionsEditable'

const Text = ({ elementId }) => {
    const dispatch = useDispatch()
    const _element = useSelector(state => state.contractDom.elements[elementId])
    const { currentId } = useSelector(state => state.editable)
    const [editMode, setEditMode] = useState(false)
    const [inputValue, setValue] = useState(_element.content)

    const _handelChange = (e) => {
        e.preventDefault()
        setValue(e.target.value)
    }

    const _handleSave = () => {
        if (!inputValue.length) {
            return alert('text cant be empty')
        }
        dispatch(editElementText(elementId, inputValue))
        setEditMode(!editMode)
    }

    const _handleDoubleClick = () => {
        if (!editMode) {
            setEditMode(!editMode)
        }
    }

    const _close = () => {
        if (editMode) {
            setEditMode(!editMode)
        }
    }

    const editElement = (e) => {
        e.stopPropagation()
        dispatch(setCurrentEditable(_element))
    }

    return (
        <Card
            onClick={editElement}
            onDoubleClick={_handleDoubleClick}
            style={{ padding: '3px', width: 'fit-content', margin: '2px' }}
            elevation={elementId === currentId ? 3 : 0}
        >
            {editMode ?
                <div style={{ display: 'flex' }}>
                    <input name={_element.id} onChange={_handelChange} placeholder={_element.content} value={inputValue} />
                    <div onClick={_handleSave} style={{ margin: '0 5px' }}><CheckCircle width='20' height='20' /></div>
                    <div onClick={_close} style={{ margin: '0 5px' }}><XCircle width='20' height='20' /></div>
                </div>
                : <p style={_element.style}>{inputValue}</p>}
        </Card>

    )
}

export default Text
