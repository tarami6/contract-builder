import React, { useContext, useState } from "react";
import { editElementText, removeElement } from '../../redux/actionsContractDom'
import { useSelector, useDispatch } from 'react-redux'
import { CheckCircle, XCircle, Trash2} from 'react-bootstrap-icons'

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
                <div style={{display: 'flex'}}> 
                    <input name={_element.id} onChange={_handelChange} placeholder={_element.content} value={inputValue} />
                    <div onClick={_handleSave} style={{margin: '0 5px'}}><CheckCircle width='20' height='20' /></div>
                    <div onClick={_close} style={{margin: '0 5px'}}><XCircle width='20' height='20' /></div>
                    <div onClick={_delete} style={{margin: '0 5px'}}><Trash2 width='22' height='22' /></div>
                </div>
                : <p>{inputValue}</p>}

        </div>

    )
}

export default Text
