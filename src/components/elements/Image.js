import React, { useState } from "react";
import { useSelector, useDispatch } from 'react-redux'
import { setCurrentEditable } from '../../redux/actions/actionsEditable'
import { Card } from '@material-ui/core'

const Image = ({ elementId }) => {
    const dispatch = useDispatch()
    const _element = useSelector(state => state.contractDom.elements[elementId])
    const { currentId } = useSelector(state => state.editable)
    const [hover, setHover] = useState(false)

    const editElement = (e) => {
        e.stopPropagation()
        dispatch(setCurrentEditable(_element))
    }

    const onLeave = (e) => {
        e.stopPropagation()
        setHover(false)
    }

    const onEnter = (e) => {
        e.stopPropagation()
        setHover(true)
    }

    return (
        <Card
            onClick={editElement}
            style={{ width: 'fit-content', ..._element.style }}
            elevation={(elementId === currentId || hover) ? 3 : 0}
            onMouseOver={onEnter}
            onMouseOut={onLeave}
        >
            <img src={_element.src}
                width={_element.style.width}
                height={_element.style.height}
                alt="Logo" />
        </Card>
    )
}
export default Image
