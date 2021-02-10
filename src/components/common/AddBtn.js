import React, {useContext} from "react";
import {useDispatch} from 'react-redux'
import {toggleAddRow} from '../../redux/actionsModals'

const AddBtn = () => {
    const dispatch = useDispatch()
    return (
        <button onClick={() => dispatch(toggleAddRow())} id={'123'}>
            +
        </button>
    )
}

export default AddBtn
