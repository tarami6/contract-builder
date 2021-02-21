import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { makeStyles, Typography } from '@material-ui/core'
import { setCurrentEditable } from '../../redux/actions/actionsEditable'
import { removeRow } from '../../redux/actions/actionsContractDom'
import { SettingsApplications, ExitToApp, DeleteOutline } from '@material-ui/icons'
import EditColumn from './editColumn/EditColumn'

const useStyles = makeStyles((theme) => ({
    row: {
        padding: 10,
        border: '1px solid #525661',
        display: 'flex',
        alignItems: 'center',
        paddingLeft: 33,
        justifyContent: 'space-between',
        cursor: 'pointer',
        '&:hover': {
            background: '#2a3040',
            border: 'none'
        },
        '& > div': {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
        },
    },
    iconEditMode: {
        fontSize: '25px',
        color: '#333C4D',
    },
    textEditMode: {
        fontSize: '14px',
        margin: '0 15px',
        fontWeight: 600,
        color: '#333C4D',
    },
    icon: {
        fontSize: '25px',
        color: '#b9b9b9',
    },
    text: {
        fontSize: '14px',
        margin: '0 15px',
        fontWeight: 600,
        color: '#b9b9b9',
    },
}))


const EditRow = ({ bodyRowId }) => {
    const dispatch = useDispatch()
    const classes = useStyles();
    const { currentId, rowId } = useSelector(state => state.editable)
    const currentRowId = bodyRowId || rowId
    const _row = useSelector(state => state.contractDom.rows[currentRowId])
    const [editMode, setEditMode] = useState(false)
    const _currentEditElement = currentId && currentId === currentRowId
    const manyColumns = _row?.columns.length > 1

    useEffect(() => {
        _currentEditElement && setEditMode(!editMode)
    }, [_currentEditElement])


    const deleteRow = () => {
        dispatch(removeRow(currentRowId))
        resetEditble()
    }

    const resetEditble = () => {
        const reset = {
            rowId: undefined,
            columnId: undefined,
            elementId: undefined,
            currentId: undefined,
            currentType: undefined
        }
        dispatch(setCurrentEditable(reset))
    }

    const onEdit = () => {
        if (!_currentEditElement) {
            dispatch(setCurrentEditable(_row))
        }
        _currentEditElement && setEditMode(!editMode)
    }

    const EditMode = () => {
        if (!editMode)
            return <></>
        else
            return (
                <div className={classes.row}>
                    <div onClick={deleteRow}>
                        <DeleteOutline className={classes.icon} />
                    </div>
                    <div onClick={resetEditble}>
                        <Typography variant='h6' className={classes.text}>
                            Contract
                        </Typography>
                        <ExitToApp className={classes.icon} />
                    </div>
                </div>
            )
    }

    const EditColumns = () => {
        if (!_currentEditElement)
            return <></>
        else
            return (
                _row?.columns?.map((columnId, index) => {
                    const title = manyColumns ? index === 0 ? 'Left' : 'Right' : 'Full Width'
                    return (
                        <div key={columnId}>
                            <EditColumn title={title} columnIdToSet={columnId} />
                        </div>
                    )
                })
            )

    }

    const Label = () => (
        <div
            className={classes.row}
            style={{ backgroundColor: _currentEditElement ? 'lightgray' : 'initial' }}
            onClick={onEdit}
        >
            <div>
                <SettingsApplications width='20' height='20' className={_currentEditElement ? classes.iconEditMode : classes.icon} />
                <Typography variant='h6' className={_currentEditElement ? classes.textEditMode : classes.text} >Row</Typography>
            </div>
        </div>
    )

    return (
        <>
            <Label />
            <EditMode />
            <EditColumns />
        </>
    );
};

export default EditRow;