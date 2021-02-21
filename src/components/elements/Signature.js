import React, {  useState } from "react";
import { removeElement } from '../../redux/actions/actionsContractDom'
import { useSelector, useDispatch } from 'react-redux'
import {  XCircle, Trash2 } from 'react-bootstrap-icons'

const Signature = ({ elementId }) => {
    const _signature = useSelector(state => state.contractDom.elements[elementId])
    const dispatch = useDispatch()
    const [editMode, setEditMode] = useState(false)


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
        dispatch(removeElement(_signature.id, _signature.columnId))
    }

    return (
        <div onDoubleClick={_handleDoubleClick}   >
            <p>Signature</p>
            <div style={{ ..._signature.style }}  >
                {editMode ?
                    <div style={{ display: 'flex' }}>
                        <div onClick={_close} style={{ margin: '0 5px' }}><XCircle width='20' height='20' /></div>
                        <div onClick={_delete} style={{ margin: '0 5px' }}><Trash2 width='22' height='22' /></div>
                    </div> :
                    <></>
                }
            </div>

        </div>
    );
};

export default Signature;