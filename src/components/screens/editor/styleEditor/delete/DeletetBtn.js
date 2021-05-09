import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { ELEMENTTYPE } from 'redux/config/elementSchema'
import { removeRow, removeColumn, removeElement, setCurrentEditable } from 'redux/actions'
import { Delete } from '@material-ui/icons'
import { makeStyles, Tooltip } from '@material-ui/core';
import { getTextByELement } from 'utils'

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        justifyContent: "flex-end",
    },
    btnContainer: {
        display: 'flex'
    },
    iconContainer: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: "50px",
        height: "50px",
        borderRadius: "100%",
        backgroundColor: theme.color.red,
    }
}))

const getCurrentElementText = (type) => {
    switch (type) {
        case ELEMENTTYPE.rows:
            return 'Row'
        case ELEMENTTYPE.columns:
            return 'Column'
        case ELEMENTTYPE.text:
        case ELEMENTTYPE.wys:
        case ELEMENTTYPE.variable:
        case ELEMENTTYPE.img:
        case ELEMENTTYPE.signature:
        case ELEMENTTYPE.devider:
        case ELEMENTTYPE.code:
        case ELEMENTTYPE.table:
            return 'Element'
        default:
            return ''
    }
}

const DeletetBtn = () => {
    const classes = useStyles();
    const dispatch = useDispatch()
    const { rowId, columnId, currentType, elementId } = useSelector(state => state.editable)
    const _column = useSelector(state => state.contractDom.columns[columnId])
    const _row = useSelector(state => state.contractDom.rows[rowId])
    const [currentDel, setCurrentDel] = useState(undefined)

    useEffect(() => {
        const text = getCurrentElementText(currentType)
        setCurrentDel(text)
    }, [currentType])

    const _resetEditble = () => {
        const reset = {
            rowId: undefined,
            columnId: undefined,
            elementId: undefined,
            currentId: undefined,
            currentType: undefined
        }
        dispatch(setCurrentEditable(reset))
    }

    const _deleteRow = () => {
        dispatch(removeRow(rowId))
        _resetEditble()
    }

    const _deleteColumn = () => {
        dispatch(removeColumn(rowId, columnId))
        dispatch(setCurrentEditable(_row))
    }

    const _deleteElement = () => {
        dispatch(removeElement(elementId, columnId))
        dispatch(setCurrentEditable(_column))
    }

    const _handleDelete = () => {
        switch (currentType) {
            case ELEMENTTYPE.rows:
                return _deleteRow()
            case ELEMENTTYPE.columns:
                return _deleteColumn()
            case ELEMENTTYPE.text:
            case ELEMENTTYPE.wys:
            case ELEMENTTYPE.variable:
            case ELEMENTTYPE.img:
            case ELEMENTTYPE.signature:
            case ELEMENTTYPE.devider:
            case ELEMENTTYPE.code:
            case ELEMENTTYPE.table:
                return _deleteElement()
            default:
                return false
        }
    }

    return (
        <div onClick={() => _handleDelete()} className={classes.root}>
            <div className={classes.btnContainer}>
                {/* <p>{currentDel}</p> */}
                <Tooltip title={`Delete ${getTextByELement(currentType)}`} 
                placement="left"
                interactive>
                    <div className={classes.iconContainer}>
                        <Delete style={{ fontSize: '30px', color: 'white' }} />
                    </div>
                </Tooltip>
            </div>
        </div>
    );
};

export default DeletetBtn;