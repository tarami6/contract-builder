import React, { useEffect, useState, useCallback } from 'react';
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
    const { currentType } = useSelector(state => state.editable)
    const [type, setType] = useState()

    const currentNode = useCallback(() => {
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
    }, [currentType])

    useEffect(() => {
        setType(currentNode())
    }, [currentType, currentNode])



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
                break;
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