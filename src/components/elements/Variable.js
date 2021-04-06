import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { VARIABLETYPES } from '../../redux/config/elementSchema'
import { removeElement, editElementVariable } from '../../redux/actions/actionsContractDom'
import { CheckCircle, XCircle, Trash2 } from 'react-bootstrap-icons'
import { Card } from '@material-ui/core'
import { setCurrentEditable } from '../../redux/actions/actionsEditable'

const Variable = ({ elementId }) => {
    const dispatch = useDispatch()
    const _variable = useSelector(state => state.contractDom.elements[elementId])
    const { currentId } = useSelector(state => state.editable)
    const [editMode, setEditMode] = useState(false)
    const [selectValues, setSelectValues] = useState([])
    const [hover, setHover] = useState(false)
    const [inputsValues, setValue] = useState({
        title: _variable.title,
        key: _variable.key,
        value: _variable.value
    })

    useEffect(() => {
        const selectValuesToArr = Object.keys(VARIABLETYPES)
        setSelectValues([...selectValuesToArr])
    }, [])

    const _handelChangeTitle = (e) => {
        e.preventDefault()
        const newObj = { ...inputsValues }
        newObj.title = e.target.value
        setValue({ ...newObj })
    }


    const _handelChangeKey = (e) => {
        e.stopPropagation()
        e.preventDefault()
        let newObj = { ...inputsValues }
        newObj = { ...inputsValues, key: e.target.value }
        setValue({ ...newObj })
    }

    const _handleSave = () => {
        if (!inputsValues.title.length) {
            return alert('text cant be empty')
        }
        dispatch(editElementVariable(_variable.id, inputsValues))
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
        dispatch(removeElement(_variable.id, _variable.columnId))
    }

    const editElement = (e) => {
        e.stopPropagation()
        if (_variable.id !== currentId)
            dispatch(setCurrentEditable(_variable))
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
            style={{ padding: '3px', width: 'fit-content', margin: '2px' }}
            elevation={(elementId === currentId || hover) ? 3 : 0}
            onMouseOver={onEnter}
            onMouseOut={onLeave}
        >
            {
                editMode ?
                    <div>
                        <input name={_variable.id} onChange={_handelChangeTitle} placeholder={inputsValues.title} value={inputsValues.title} />
                        <div style={{ display: 'flex' }}>
                            <select onChange={_handelChangeKey} value={inputsValues.key} >
                                {selectValues.map(option => <option key={Math.random() * 1000} >{option}</option>)}
                            </select>
                            <div onClick={_handleSave} style={{ margin: '0 5px' }}><CheckCircle width='20' height='20' /></div>
                            <div onClick={_close} style={{ margin: '0 5px' }}><XCircle width='20' height='20' /></div>
                            {/* <div onClick={_delete} style={{ margin: '0 5px' }}><Trash2 width='22' height='22' /></div> */}
                        </div>
                    </div>
                    : (
                        <div style={{ display: "flex" }}>
                            <p style={{ ..._variable.style.title }} >{_variable.title}</p>
                            <p style={{ ..._variable.style.key }}>{_variable.key}</p>
                        </div>
                    )
            }
        </Card>
    );
};

export default Variable;