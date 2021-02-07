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
    const { handleChangeVariable } = useContext(HtmlContext)
    const [editMode, setEditMode] = useState(false)
    const [selectValues, setSelectValues] = useState([])
    const [inputsValues, setValue] = useState({
        title: element.title,
        key: element.key,
        value: element.value
    })

    useEffect(() => {
        const selectValuesToArr = Object.keys(VARIABLETYPES)
        setSelectValues([...selectValuesToArr])
    }, [])

    const _handelChangeTitle = (e) => {
        e.preventDefault()
        const newObj = {...inputsValues}
        newObj.title = e.target.value
        setValue({...newObj})
    }

    
    const _handelChangeKey = (e) => {
        e.preventDefault()
        console.log('e target', e.target.value)
        let newObj = {...inputsValues}
        newObj = {...inputsValues, key: e.target.value}
        setValue({...newObj})
    }

    const _handleSave = () => {
        if (!inputsValues.title.length) {
            return alert('text cant be empty')
        }
        handleChangeVariable({id: element.id, value: inputsValues}) 
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
                        <input name={element.id} onChange={_handelChangeTitle} placeholder={inputsValues.title} value={inputsValues.title} />
                        <select onChange={_handelChangeKey} value={inputsValues.key} >
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