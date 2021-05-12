import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux'
import { setCurrentEditable } from 'redux/actions'
import Column from './DisplayColumn'
import { Card, makeStyles } from '@material-ui/core'
import { uid } from 'uid'

const useStyles = props => makeStyles((theme) => ({
    root: {
        boxShadow: props.selected ? '0px 3px 3px -2px rgb(0 0 0 / 20%), 0px 3px 4px 0px rgb(0 0 0 / 14%), 0px 1px 8px 0px rgb(0 0 0 / 12%)' : 'none',
        '&:hover': {
            boxShadow: "0px 3px 3px -2px rgb(0 0 0 / 20%), 0px 3px 4px 0px rgb(0 0 0 / 14%), 0px 1px 8px 0px rgb(0 0 0 / 12%)",
        }
    }
}))

const Row = ({ rowId }) => {
    const dispatch = useDispatch()
    const { currentId } = useSelector(state => state.editable)
    const _row = useSelector(state => state.contractDom.rows[rowId])
    const _data = useSelector(state => state.varJson)
    const [dataToLoop, setDataToLoop] = useState(undefined)
    const classes = useStyles({selected : rowId === currentId})()

    useEffect(() => {
        if (_row?.loop) {
            if (_data.hasOwnProperty(_row?.loop)) {
                setDataToLoop([..._data[_row?.loop]])
            }
        }
    }, [_row?.loop, _data])

    const editRow = (e) => {
        console.log('row e', e)
        e.stopPropagation()
        dispatch(setCurrentEditable(_row))
    }

    if (dataToLoop) {
        return (dataToLoop.map(() =>
            <Card
                className={classes.root}
                style={{ ..._row.style }}
                onClick={(e) => editRow(e)}
                key={uid()}
            >
                {
                    _row.columns.map((columnId) => {
                        return <Column key={uid()} columnId={columnId} />
                    })
                }
            </Card>))
    }

    return (
        <div
            className={classes.root}
            style={{ ..._row.style }}
            onClick={editRow}
            key={uid()}
        >
            {
                _row.columns.map((columnId, index) => {
                    return <Column key={uid()} columnId={columnId} />
                })
            }
        </div >
    )
}

export default Row
