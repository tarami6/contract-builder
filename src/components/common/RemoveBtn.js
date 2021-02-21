import React, { useEffect, useState } from 'react'
import { removeRow, removeColumn } from '../../redux/actions/actionsContractDom'
import { useDispatch } from 'react-redux'
import { Trash, XSquare } from 'react-bootstrap-icons'

const RemoveElementBtn = ({ row, column, rowId, columnId }) => {
    const dispatch = useDispatch()
    const [deleteMode, setDeleteMode] = useState('Row')

    useEffect(() => {
        if (column) {
            setDeleteMode('Column')
        } else {
            setDeleteMode('Row')
        }
    }, [column, row])

    const removeByRow = () => {
        return dispatch(removeRow(rowId))
    }

    const removeByColumn = () => {
        return dispatch(removeColumn(rowId, columnId))
    }

    const removeByMode = () => {
        if (deleteMode === 'Row') {
            removeByRow()
        } else if (deleteMode === 'Column') {
            removeByColumn()
        }
    }

    return (
        <div onClick={removeByMode}  style={{
            cursor: 'pointer'
        }}>
            {deleteMode === 'Row' ? <Trash width='20' height='20' />  : <XSquare width='20' height='20' />}
            
        </div>
    )
}

export default RemoveElementBtn