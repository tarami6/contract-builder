import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { makeStyles, Typography } from '@material-ui/core'
import { setCurrentEditable, removeColumn } from 'redux/actions'
import { PlusCircle, XCircle } from 'react-bootstrap-icons'
import { DeleteOutline, ExitToApp, SettingsApplications } from '@material-ui/icons'
import { ELEMENTTYPE } from 'redux/config/elementSchema'
import EditText from './EditText'
import EditImg from './EditImg'
import EditVariable from './EditVariable'
import EditSignature from './EditSignature'
import EditWys from './EditWys'
import EditDevider from './EditDevider'
import EditCode from './EditCode'
import AddElement from './helperComponents/AddElement'

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

const EditColumn = ({ title, columnIdToSet }) => {
    const dispatch = useDispatch()
    const { currentId, columnId, rowId, currentType } = useSelector(state => state.editable)
    const _currentColumnId = columnId || columnIdToSet
    const _currentColumn = useSelector(state => state.contractDom.columns[_currentColumnId])
    const _currentrow = useSelector(state => state.contractDom.rows[rowId])
    const classes = useStyles();
    const [editMode, setEditMode] = useState(false)
    const _currentEditElement = currentId === _currentColumnId
    const [addElementMode, setAddElementMode] = useState(false)

    useEffect(() => {
        setEditMode(_currentEditElement)
    }, [_currentEditElement])

    useEffect(() => {
        currentType === ELEMENTTYPE.columns &&
            !_currentColumn?.elements?.length &&
            setAddElementMode(true)
    }, [currentType, _currentColumn])

    const onEdit = () => {
        setEditMode(!editMode)
        dispatch(setCurrentEditable(_currentColumn))
    }

    const backToRow = () => {
        setEditMode(!editMode)
        dispatch(setCurrentEditable(_currentrow))
    }

    const deleteColumn = () => {
        dispatch(removeColumn(rowId, columnId))
        dispatch(setCurrentEditable(_currentrow))
    }

    const label = title ? `${title} Column` : 'Column'

    const EditMode = () => {
        if (!editMode)
            return <></>
        return (
            <div className={classes.row}>
                <div onClick={() => setAddElementMode(!addElementMode)}>
                    {
                        addElementMode ?
                            <XCircle width='20' height='20' style={{ color: '#b9b9b9', marginRight: '15px' }} />
                            :
                            <PlusCircle width='20' height='20' style={{ color: '#b9b9b9', marginRight: '15px' }} />

                    }
                </div>
                {
                    _currentrow.columns.length > 1 && (
                        <div onClick={deleteColumn}>
                            <DeleteOutline className={classes.icon} />
                        </div>
                    )
                }

                <div onClick={backToRow}>
                    <Typography variant='h6' className={classes.text}>
                        Row
                    </Typography>
                    <ExitToApp className={classes.icon} />
                </div>
            </div>
        )
    }


    const EditElements = () => {

        const EditElementByType = ({ id }) => {
            const _currentElement = useSelector(state => state.contractDom.elements[id])
            switch (_currentElement?.type) {
                case ELEMENTTYPE.text:
                    return <EditText id={_currentElement.id} />
                case ELEMENTTYPE.wys:
                    return <EditWys id={_currentElement.id} />
                case ELEMENTTYPE.img:
                    return <EditImg id={_currentElement.id} />
                case ELEMENTTYPE.variable:
                    return <EditVariable id={_currentElement.id} />
                case ELEMENTTYPE.signature:
                    return <EditSignature id={_currentElement.id} />
                case ELEMENTTYPE.devider:
                    return <EditDevider id={_currentElement.id} />
                case ELEMENTTYPE.code:
                    return <EditCode id={_currentElement.id} />
                default:
                    return <p>No Type Element</p>
            }
        }

        if (!_currentEditElement) {
            return <></>
        } else {
            return (
                _currentColumn.elements.map(elementId => <EditElementByType key={elementId} id={elementId} />)
            )
        }

    }

    const Label = () => (
        <div
            onClick={onEdit}
            className={classes.row}
            style={{ backgroundColor: _currentEditElement ? 'lightgray' : 'initial' }}
        >
            <div>
                <SettingsApplications width='20' height='20' className={_currentEditElement ? classes.iconEditMode : classes.icon} />
                <Typography variant='h6' className={_currentEditElement ? classes.textEditMode : classes.text} >{label}</Typography>
            </div>

        </div>
    )

    return (
        <div>
            <Label />
            <EditMode />
            <AddElement addElementMode={addElementMode} />
            <EditElements />
        </div>
    )
}

export default EditColumn