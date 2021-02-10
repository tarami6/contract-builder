import React, { useEffect, useState } from 'react'
import { removeRow, removeColumn } from '../../redux/actionsContractDom'
import { useDispatch } from 'react-redux'

const RemoveElementBtn = ({ row, column, rowId, columnId }) => {
    const dispatch = useDispatch()
    const [deleteMode, setDeleteMode] = useState('row')

    useEffect(() => {
        if (column) {
            setDeleteMode('column')
        } else {
            setDeleteMode('row')
        }
    }, [column, row])

    const removeByRow = () => {
        return dispatch(removeRow(rowId))
    }

    const removeByColumn = () => {
        return dispatch(removeColumn(rowId, columnId))
    }

    const removeByMode = () => {
        if (deleteMode === 'row') {
            removeByRow()
        } else if (deleteMode === 'column') {
            removeByColumn()
        }
    }

    return (
        <button onClick={removeByMode} type={'button'} style={{

        }}>
            Remove {deleteMode}
        </button>
    )
}

export default RemoveElementBtn