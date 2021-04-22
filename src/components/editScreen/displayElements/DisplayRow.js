import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux'
import { setCurrentEditable } from 'redux/actions'
import Column from './DisplayColumn'
import { Card } from '@material-ui/core'

const Row = ({ rowId }) => {
    const dispatch = useDispatch()
    const { currentId } = useSelector(state => state.editable)
    const _row = useSelector(state => state.contractDom.rows[rowId])
    const _data = useSelector(state => state.varJson)
    const [dataToLoop, setDataToLoop] = useState(undefined)
    const [hover, setHover] = useState(false)

    useEffect(() => {
        if(_row?.loop){
            if(_data.hasOwnProperty(_row?.loop)){
                setDataToLoop([..._data[_row?.loop]])
            }
        }
    }, [_row?.loop])

    const onLeave = (e) => {
        e.stopPropagation()
        setHover(false)
    }

    const onEnter = (e) => {
        e.stopPropagation()
        setHover(true)
    }

    const editRow = (e) => {
        e.stopPropagation()
        dispatch(setCurrentEditable(_row))
    }

    return (
        <Card
            style={{ ..._row.style }}
            elevation={(rowId === currentId || hover) ? 3 : 0}
            onClick={editRow}
            onMouseOver={onEnter}
            onMouseOut={onLeave}
        >
            {
                _row?.loop ?
                _row.columns.map((columnId) => {
                    return <Column key={columnId} columnId={columnId} />
                })
                :
                _row.columns.map((columnId) => {
                    return <Column key={columnId} columnId={columnId} />
                })
            }
        </Card>
    )
}

export default Row
