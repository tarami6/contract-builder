import React, { useState } from "react";
import { removeElement } from '../../redux/actions/actionsContractDom'
import { useSelector, useDispatch } from 'react-redux'
import { XCircle, Trash2 } from 'react-bootstrap-icons'
import { Card } from '@material-ui/core'
import { setCurrentEditable } from '../../redux/actions/actionsEditable'

const Signature = ({ elementId }) => {
    const _signature = useSelector(state => state.contractDom.elements[elementId])
    const { currentId } = useSelector(state => state.editable)
    const dispatch = useDispatch()
    const [hover, setHover] = useState(false)
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

    const editElement = (e) => {
        e.stopPropagation()
        dispatch(setCurrentEditable(_signature))
    }

    const onHover = () => {
        setHover(!hover)
    }

    return (
        <Card
            onClick={editElement}
            onDoubleClick={_handleDoubleClick}
            style={{
                padding: '3px',
                width: 'fit-content',
                marginTop: _signature.style.marginTop,
                marginBottom: _signature.style.marginBottom,
                marginLeft: _signature.style.marginLeft,
                marginRight: _signature.style.marginRight,
                paddingTop: _signature.style.paddingTop,
                paddingBottom: _signature.style.paddingBottom,
                paddingLeft: _signature.style.paddingLeft,
                paddingRight: _signature.style.paddingRight,
            }}
            elevation={(elementId === currentId || hover) ? 3 : 0}
            onMouseEnter={onHover}
            onMouseLeave={onHover}
        >
            <p>Signature</p>
            <div style={{
                width: '160px',
                height: '80px',
                border: '2px solid'
            }}  >
                {editMode ?
                    <div style={{ display: 'flex' }}>
                        <div onClick={_close} style={{ margin: '0 5px' }}><XCircle width='20' height='20' /></div>
                        <div onClick={_delete} style={{ margin: '0 5px' }}><Trash2 width='22' height='22' /></div>
                    </div> :
                    <></>
                }
            </div>

        </Card>
    );
};

export default Signature;