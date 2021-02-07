import React, { useState, useContext, useEffect } from 'react';
import { HtmlContext } from '../../App'

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

const Variable = ({ element }) => {
    const { handleChange } = useContext(HtmlContext)
    const [editMode, setEditMode] = useState(false)
    const [selectValues, setSelectValues] = useState([])
    const [inputsValues, setValue] = useState({
        title: element.title,
        [element.key]: element.key,
        value: element.value
    })

    useEffect(() => {
        const selectValuesToArr = Object.keys(VARIABLETYPES)
        setSelectValues([...selectValuesToArr])
    }, [])

    const _handelChange = (e) => {
        e.preventDefault()
        // setValue(e.target.value)
        console.log('_handelChange e', e)
    }

    const _handleSave = () => {
        if (!inputsValues.title.length) {
            return alert('text cant be empty')
        }
        // handleChange({id: element.id, value: inputValue}) 
        // setEditMode(!editMode)
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
        <div onDoubleClick={_handleDoubleClick}>
            {
                editMode ?
                    <>
                        <input name={element.id} onChange={_handelChange} placeholder={inputsValues.title} value={inputsValues.title} />
                        <select>
                            {selectValues.map(option => <option keys={Math.random() * 1000} >{option}</option>)}
                        </select>
                        <button type='button' onClick={_handleSave}>Save</button>
                        <button type='button' onClick={_close}>Close</button>
                    </>
                    : (
                        <div style={{ display: "flex" }}>
                            <p >{inputsValues.title}</p>
                            <p style={{
                                marginLeft: "30px",
                                fontWeight: "bolder",
                            }}>{element.key}</p>
                        </div>
                    )
            }
        </div>
    );
};

export default Variable;