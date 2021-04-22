import React, { useState } from "react";
import { useSelector, useDispatch } from 'react-redux'
import { CheckCircle, XCircle } from 'react-bootstrap-icons'
import { Card } from '@material-ui/core'
import { setCurrentEditable, editElementText } from 'redux/actions'

const Text = ({ elementId }) => {
    const dispatch = useDispatch()
    const _element = useSelector(state => state.contractDom.elements[elementId])
    const { currentId } = useSelector(state => state.editable)
    const [editMode, setEditMode] = useState(false)
    const [hover, setHover] = useState(false)
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

    const onLeave = (e) => {
        e.stopPropagation()
        setHover(false)
    }

    const onEnter = (e) => {
        e.stopPropagation()
        setHover(true)
    }

    return (
        <Card
            onClick={editElement}
            onDoubleClick={_handleDoubleClick}
            style={{ width: 'fit-content',display: 'flex', alignItems: 'center', ..._element.style, fontSize: '' }}
            elevation={(elementId === currentId || hover) ? 3 : 0}
            onMouseOver={onEnter}
            onMouseOut={onLeave}
        >
            {editMode ?
                <div style={{ display: 'flex' }}>
                    <input name={_element.id} onChange={_handelChange} placeholder={_element.content} value={inputValue} />
                    <div onClick={_handleSave} style={{ margin: '0 5px' }}><CheckCircle width='20' height='20' /></div>
                    <div onClick={_close} style={{ margin: '0 5px' }}><XCircle width='20' height='20' /></div>
                </div>
                : <p style={{margin: '0', fontSize: _element.style.fontSize, color: _element.style.color}}>{inputValue}</p>}
        </Card>

    )
}

export default Text
