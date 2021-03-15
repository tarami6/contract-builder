import React, { useState } from "react";
import { removeElement } from '../../redux/actions/actionsContractDom'
import { useSelector, useDispatch } from 'react-redux'
import { XCircle, Trash2 } from 'react-bootstrap-icons'
import { Card } from '@material-ui/core'
import { setCurrentEditable } from '../../redux/actions/actionsEditable'

const Devider = ({ elementId }) => {
    const _devider = useSelector(state => state.contractDom.elements[elementId])
    const { currentId } = useSelector(state => state.editable)
    const dispatch = useDispatch()
    const [hover, setHover] = useState(false)
    const onHover = () => {
        setHover(!hover)
    }
    const editElement = (e) => {
        e.stopPropagation()
        dispatch(setCurrentEditable(_devider))
    }

    return (
        <Card
            onClick={editElement}
            elevation={(elementId === currentId || hover) ? 3 : 0}
            onMouseEnter={onHover}
            onMouseLeave={onHover}
            style={{ ..._devider.style }}
        >
        </Card>
    );
};

export default Devider;