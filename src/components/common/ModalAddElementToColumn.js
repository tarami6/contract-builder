import React from "react";
import ELEMENTTYPE from './moduleELementTypes'
import { addElement } from '../../redux/actionsContractDom'
import { useDispatch, useSelector } from 'react-redux'

const ModalAddElementToColumn = ({open, rowIndex, columnId }) => {
    const dispatch = useDispatch()

    if (!open)
        return <></>
    return (
        <div>
            <div onClick={() => dispatch(addElement(ELEMENTTYPE.text, columnId))}>text</div>
            <div onClick={() => dispatch(addElement(ELEMENTTYPE.img, columnId))}>img</div>
            <div onClick={() => dispatch(addElement(ELEMENTTYPE.variable, columnId))}>varibale</div>
        </div>
    )
}



export default ModalAddElementToColumn
