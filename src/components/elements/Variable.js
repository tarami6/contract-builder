import React, { useState, useContext, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { removeElement, editElementVariable } from '../../redux/actionsContractDom'
import { CheckCircle, XCircle, Trash2 } from 'react-bootstrap-icons'

const VARIABLETYPES = {
    empty: 'empty',
    userName: 'userName',
    fullName: 'fullName',
    phone: 'phone',
    address: 'address',
    accountBalance: 'accountBalance',
    paymentNow: 'paymentNow',
    product: 'product',
    storeName: 'storeName',
    agentName: 'agentName'
}

const Variable = ({ elementId }) => {
    const _element = useSelector(state => state.contractDom.elements[elementId])
    const dispatch = useDispatch()
    const [editMode, setEditMode] = useState(false)
    const [selectValues, setSelectValues] = useState([])
    const [inputsValues, setValue] = useState({
        title: _element.title,
        key: _element.key,
        value: _element.value
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
        e.preventDefault()
        console.log('e target', e.target.value)
        let newObj = { ...inputsValues }
        newObj = { ...inputsValues, key: e.target.value }
        setValue({ ...newObj })
    }

    const _handleSave = () => {
        if (!inputsValues.title.length) {
            return alert('text cant be empty')
        }
        dispatch(editElementVariable(_element.id, inputsValues))
        setEditMode(!editMode)
    }

    const _handleDoubleClick = () => {
        if (!editMode) {
            setEditMode(!editMode)
        }
        console.log('_handleDoubleClick undefined')
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
        <div onDoubleClick={_handleDoubleClick}>
            {
                editMode ?
                    <div >
                        <input name={_element.id} onChange={_handelChangeTitle} placeholder={inputsValues.title} value={inputsValues.title} />
                        <div style={{ display: 'flex' }}>
                            <select onChange={_handelChangeKey} value={inputsValues.key} >
                                {selectValues.map(option => <option key={Math.random() * 1000} >{option}</option>)}
                            </select>
                            <div onClick={_handleSave} style={{ margin: '0 5px' }}><CheckCircle width='20' height='20' /></div>
                            <div onClick={_close} style={{ margin: '0 5px' }}><XCircle width='20' height='20' /></div>
                            <div onClick={_delete} style={{ margin: '0 5px' }}><Trash2 width='22' height='22' /></div>
                        </div>
                    </div>
                    : (
                        <div style={{ display: "flex" }}>
                            <p >{inputsValues.title}</p>
                            <p style={{
                                marginLeft: "30px",
                                fontWeight: "bolder",
                            }}>{_element.key}</p>
                        </div>
                    )
            }
        </div>
    );
};

export default Variable;