import React, { useState } from "react";
import { useSelector, useDispatch } from 'react-redux'
import { setCurrentEditable } from '../../redux/actions/actionsEditable'
import { Card } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';

const useStyle = makeStyles((theme) => ({
    card: props => ({width: 'fit-content', ...props})
}))

const Image = ({ elementId }) => {
    const dispatch = useDispatch()
    const _element = useSelector(state => state.contractDom.elements[elementId])
    const { currentId } = useSelector(state => state.editable)
    const [hover, setHover] = useState(false)
    const props = { ..._element.style }
    const classes = useStyle(props)

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
            className={classes.card}
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
