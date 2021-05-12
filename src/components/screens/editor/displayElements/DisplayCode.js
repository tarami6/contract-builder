import React, { useState } from "react";
import { useSelector, useDispatch } from 'react-redux'
import { editElementCode, setCurrentEditable } from 'redux/actions'
import { Card } from '@material-ui/core'
import { CheckCircle, XCircle } from 'react-bootstrap-icons'

const Code = ({ elementId }) => {
    const dispatch = useDispatch()
    const _element = useSelector(state => state.contractDom.elements[elementId])
    const { currentId } = useSelector(state => state.editable)
    const [hover, setHover] = useState(false)
    const [editMode, setEditMode] = useState(false)
    const [inputValue, setValue] = useState(_element.content)

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

    const _handleSave = () => {
        if (inputValue?.length === 0) {
            return alert('text cant be empty')
        }
        dispatch(editElementCode(elementId, inputValue))
        setEditMode(!editMode)
    }

    const _handelChange = (e) => {
        e.preventDefault()
        setValue(e.target.value)
    }

    const editElement = (e) => {
        e.stopPropagation()
        if (currentId === _element.id) {
            return undefined
        }
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
            style={{ display: 'flex', alignItems: 'center', ..._element.style, fontSize: '', width: '100%' }}
            elevation={(elementId === currentId || hover) ? 3 : 0}
            onMouseOver={onEnter}
            onMouseOut={onLeave}
        >
            {
                editMode ?
                    <div style={{ display: 'flex', width: '100%' }}>
                        <textarea
                            name={_element.id}
                            onChange={_handelChange}
                            placeholder={_element.html}
                            value={inputValue}
                            style={{width: '100%'}}
                        />
                        <div onClick={_handleSave} style={{ margin: '0 5px' }}><CheckCircle width='20' height='20' /></div>
                        <div onClick={_close} style={{ margin: '0 5px' }}><XCircle width='20' height='20' /></div>
                    </div>
                    :
                    <div dangerouslySetInnerHTML={{ __html: inputValue ?? _element.html }}></div>
            }
        </Card>
    );
};

export default Code;