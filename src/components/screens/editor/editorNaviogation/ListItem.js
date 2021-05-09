import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { makeStyles } from '@material-ui/core'
import { ELEMENTTYPE } from 'redux/config/elementSchema'
import { setCurrentEditable } from 'redux/actions/actionsEditable'

const useStyles = makeStyles((theme) => ({
    root: {
        height: "4vh",
        display: "flex",
        alignItems: "center",
        cursor: 'pointer',
        '&:hover': {
            backgroundColor: theme.color.lightGrey
        }
    }
}))

const ListItem = ({ itemId, indexOfrow }) => {
    const dispatch = useDispatch()
    const classes = useStyles()
    const _dom = useSelector(state => state.contractDom)
    const { currentType, rowId, columnId, elementId } = useSelector(state => state.editable)
    const [type, setType] = useState()
    const [currentElement, setElement] = useState()

    const currentNode = () => {
        switch (currentType) {
            case ELEMENTTYPE.text:
            case ELEMENTTYPE.wys:
            case ELEMENTTYPE.variable:
            case ELEMENTTYPE.img:
            case ELEMENTTYPE.signature:
            case ELEMENTTYPE.devider:
            case ELEMENTTYPE.code:
            case ELEMENTTYPE.table:
                return 'Element'
            case ELEMENTTYPE.columns:
                return 'Element'
            case ELEMENTTYPE.rows:
                return 'Column'
            default:
                return 'Rows'
        }
    }

    useEffect(() => {
        setType(currentNode())
    }, [currentType])



    const setEdit = () => {
        switch (currentType) {
            case ELEMENTTYPE.text:
            case ELEMENTTYPE.wys:
            case ELEMENTTYPE.variable:
            case ELEMENTTYPE.img:
            case ELEMENTTYPE.signature:
            case ELEMENTTYPE.devider:
            case ELEMENTTYPE.code:
            case ELEMENTTYPE.table:
                break;
            case ELEMENTTYPE.columns:
                dispatch(setCurrentEditable(_dom.elements[itemId]))
                break;
            case ELEMENTTYPE.rows: {
                dispatch(setCurrentEditable(_dom.columns[itemId]))
            }
            default: {
                if (itemId && !currentType) {
                    dispatch(setCurrentEditable(_dom.rows[itemId]))
                }
                break;
            }

              
        }

    }

    return (
        <div className={classes.root} onClick={setEdit}>
            <p>{type} {indexOfrow + 1}</p>
        </div>

    );
};

export default ListItem;