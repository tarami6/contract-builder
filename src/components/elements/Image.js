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
            style={{ padding: '3px', width: 'fit-content', margin: '2px' }}
            elevation={(elementId === currentId || hover) ? 3 : 0}
            onMouseOver={onEnter}
            onMouseOut={onLeave}
        >
            <img src={'https://www.amdocs.com/sites/default/files/inline-images/optima-logo-sm-whiteBG.jpg'}
                alt="Logo" />
        </Card>
    )
}
export default Image
