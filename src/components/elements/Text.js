import React, { useContext, useState } from "react";
import { HtmlContext } from '../../App'

const Text = ({ element }) => {
    const { handleChange } = useContext(HtmlContext)
    const [editMode, setEditMode] = useState(false)
    const [inputValue, setValue] = useState(element.content) 

    const _handelChange = (e) => {
        e.preventDefault()
        setValue(e.target.value)
    }

    const _handleSave = () => {
        if(!inputValue.length){
           return alert('text cant be empty')
        }
        handleChange({id: element.id, value: inputValue}) 
        setEditMode(!editMode)
    }

    const _handleDoubleClick = () => {
        if(!editMode){
            setEditMode(!editMode)
        }
       console.log('_handleDoubleClick undefined')
    }

    const _close = () => {
        if(editMode){
            setEditMode(!editMode)
        }
    }

    return (
        <div onDoubleClick={_handleDoubleClick} onBlur={() => console.log('onBlur')} >
            {editMode ?
                <>
                    <input  name={element.id} onChange={_handelChange} placeholder={element.content} value={inputValue} />
                    <button type='button' onClick={_handleSave}>Save</button>  
                    <button type='button' onClick={_close}>Close</button>
                </>
                : <p>{inputValue}</p>}

        </div>

    )
}

export default Text
