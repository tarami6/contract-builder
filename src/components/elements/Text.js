import React, { useContext, useState } from "react";
import { editElementText, removeElement } from '../../redux/actionsContractDom'

import { useSelector, useDispatch } from 'react-redux'

const Text = ({ elementId }) => {
    const _element = useSelector(state => state.contractDom.elements[elementId])
    const dispatch = useDispatch()
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
        console.log('save action')
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

    const _delete = () => {
        dispatch(removeElement(_element.id, _element.columnId))
    }

    return (
        <div onDoubleClick={_handleDoubleClick} onBlur={() => console.log('onBlur')} >
            {editMode ?
                <>
                    <input name={_element.id} onChange={_handelChange} placeholder={_element.content} value={inputValue} />
                    <button type='button' onClick={_handleSave}>Save</button>
                    <button type='button' onClick={_close}>Close</button>
                    <button type='button' onClick={_delete}>Delete Element</button>
                </>
                : <p>{inputValue}</p>}

        </div>

    )
}

export default Text
