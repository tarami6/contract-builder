import React, { useState } from "react";
import { useSelector, useDispatch } from 'react-redux'
import { Card } from '@material-ui/core'
import { setCurrentEditable } from 'redux/actions'

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