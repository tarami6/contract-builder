import React from "react";
import { useSelector, useDispatch } from 'react-redux'
import { setCurrentEditable } from 'redux/actions'
import { makeStyles } from '@material-ui/core'

const useStyles = props => makeStyles((theme) => ({
    root: {
        boxShadow: props.selected ? '0px 3px 3px -2px rgb(0 0 0 / 20%), 0px 3px 4px 0px rgb(0 0 0 / 14%), 0px 1px 8px 0px rgb(0 0 0 / 12%)' : 'none',
        '&:hover': {
            boxShadow: "0px 3px 3px -2px rgb(0 0 0 / 20%), 0px 3px 4px 0px rgb(0 0 0 / 14%), 0px 1px 8px 0px rgb(0 0 0 / 12%)",
        }
    }
}))

const Image = ({ elementId }) => {
    const dispatch = useDispatch()
    const _element = useSelector(state => state.contractDom.elements[elementId])
    const { currentId } = useSelector(state => state.editable)
    const classes = useStyles({selected : elementId === currentId})()

    const editElement = (e) => {
        e.stopPropagation()
        dispatch(setCurrentEditable(_element))
    }
    
    return (
        <div
            className={classes.root}
            onClick={editElement}
            style={{ width: 'fit-content', ..._element.style }}
        >
            <img src={_element.src}
                width={_element.style.width}
                height={_element.style.height}
                alt="Logo" />
        </div>
    )
}
export default Image
