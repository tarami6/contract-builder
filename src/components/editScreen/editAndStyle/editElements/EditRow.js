import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { makeStyles, Typography } from '@material-ui/core'
import { setCurrentEditable, toggleAddLoop, removeRow } from 'redux/actions'
import { SettingsApplications, ExitToApp, DeleteOutline, BlurCircular } from '@material-ui/icons'
import EditColumn from './EditColumn'

const useStyles = makeStyles((theme) => ({
    row: {
        padding: '5px 10px',
        border: '1px solid #525661',
        display: 'flex',
        alignItems: 'center',
        paddingLeft: 30,
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


const EditRow = ({ bodyRowId, index }) => {
    const dispatch = useDispatch()
    const classes = useStyles();
    const { currentId, rowId } = useSelector(state => state.editable)
    const currentRowId = bodyRowId || rowId
    const _row = useSelector(state => state.contractDom.rows[currentRowId])
    const [editMode, setEditMode] = useState(false)
    const _currentEditElement = currentId && currentId === currentRowId
    useEffect(() => {
        _currentEditElement && setEditMode(true)
    }, [_currentEditElement, setEditMode])


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
                    return (
                        <div key={columnId}>
                            <EditColumn title={index + 1} columnIdToSet={columnId} />
                        </div>
                    )
                })
            )

    }

    const numTheRow = () => {
        if (index || index === 0)
            return index + 1
        else
            return ''
    }

    const Label = () => (
        <div
            className={classes.row}
            style={{ backgroundColor: _currentEditElement ? 'lightgray' : 'initial' }}
            onClick={onEdit}
        >
            <div>
                <SettingsApplications width='20' height='20' className={_currentEditElement ? classes.iconEditMode : classes.icon} />
                <Typography variant='h6' className={_currentEditElement ? classes.textEditMode : classes.text} >Row {numTheRow()}</Typography>
            </div>
        </div>
    )

    const AddLoop = () => {
        const _toggleAddLoop = () => {
            dispatch(toggleAddLoop())
        }

        if (!_currentEditElement) {
            return <div />
        } else {
            return (
                <div
                    className={classes.row}
                    onClick={_toggleAddLoop}
                >
                    <div>
                        <BlurCircular width='20' height='20' className={classes.icon} />
                        <Typography variant='h6' className={classes.text} >Add Loop</Typography>
                    </div>
                </div>
            )
        }
    }



    return (
        <>
            <Label />
            <EditMode />
            <AddLoop />
            <EditColumns />
        </>
    );
};

export default EditRow;