import React from "react";
import { useDispatch, useSelector } from 'react-redux'
import { addRow } from '../../redux/actionsContractDom'

const ModalAddRow= () => {
    const open = useSelector(state => state.modals.addRow)
    const dispatch = useDispatch()

    if(!open)
        return <></>
    return (
        <div>
            <div >
                <div onClick={() => dispatch(addRow(1))}>One Column</div> 
                <div onClick={() => dispatch(addRow(2))}>Two Column</div> 
            </div>
        </div>
    )
}



export default ModalAddRow
