import React, { useContext, useState } from "react";
import { editElementText, removeElement } from '../../redux/actionsContractDom'
import { useSelector, useDispatch } from 'react-redux'
import { CheckCircle, XCircle, Trash2 } from 'react-bootstrap-icons'

const Signature = ({ elementId }) => {
    const _element = useSelector(state => state.contractDom.elements[elementId])
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
        dispatch(removeElement(_element.id, _element.columnId))
    }

    return (
        <div onDoubleClick={_handleDoubleClick}   >
            <p>Signature</p>
            <div style={{ width: '160px', height: '80px', border: '1px solid' }}  >
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