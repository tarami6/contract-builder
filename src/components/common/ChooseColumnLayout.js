import React, { useEffect, useState, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { addRow } from '../../redux/actions/actionsContractDom'
import { toggleAddRow } from '../../redux/actions/actionsModals'
import { setCurrentEditable } from '../../redux/actions/actionsEditable'
import { makeStyles } from '@material-ui/core/styles';
import { LayoutSplit, Square } from 'react-bootstrap-icons'
import { Typography } from '@material-ui/core';
import { Close } from '@material-ui/icons';

const useStyles = makeStyles(() => ({
    text: {
        fontSize: '14px',
        margin: '0 15px',
        fontWeight: 600,
        color: '#b9b9b9',
    },
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
    icon: {
        fontSize: '15px',
        color: '#b9b9b9',
    },
    columnCOntainer: {
        display: "flex",
        width: "100%",
        alignItems: "center",
        justifyContent: "space-evenly",
        padding: "15px",
    }
}))

const useMounted = () => {
    const [mounted, setMounted] = useState(false)
    useEffect(() => {
        if (!mounted)
            setMounted(true)
    }, [mounted])
    return mounted
}

const ChooseColumnLayout = () => {
    const classes = useStyles();
    const dispatch = useDispatch()
    const _rows = useSelector(state => state.contractDom?.body?.rows)
    const _editableRowId = useSelector(state => state.editable?.rowId)
    const lastRow = _rows[_rows.length - 1]
    const _row = useSelector(state => state.contractDom.rows[lastRow])
    const _handleClose = useCallback(() => dispatch(toggleAddRow()), [dispatch]);
    const _setCurrentEditable = useCallback(() => dispatch(setCurrentEditable(_row)), [_row, dispatch]);

    const _addRow = async (numOfColumns) => {
        dispatch(addRow(numOfColumns))
    }
    
    const mounted = useMounted()

    const _setEditable = useCallback(() => {
        if (!_row || _row?.id === _editableRowId || !mounted)
            return
        else {
            _setCurrentEditable()
            _handleClose()
        }
    }, [_row, _editableRowId, mounted, _handleClose, _setCurrentEditable]);

    useEffect(_setEditable, [lastRow, _setEditable])

    return (
        <div>
            <div className={classes.row} onClick={_handleClose}>
                <div>
                    <LayoutSplit width='15' height='15' className={classes.icon} />
                    <Typography variant='h6' className={classes.text}>Row Layout</Typography>
                </div>
                <div>
                    <Close className={classes.icon} />
                </div>
            </div>

            <div className={classes.columnCOntainer}>
                <div onClick={() => _addRow(1)} style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                }}>
                    <Square width='40' height='40' className={classes.icon} />
                    <Typography className={classes.text}>
                        Column
                    </Typography>
                </div>
                <div onClick={() => _addRow(2)}
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "center",
                    }}>
                    <LayoutSplit width='45' height='45' className={classes.icon} />
                    <Typography className={classes.text}>
                        Columns
                    </Typography>
                </div>
            </div>
        </div>
    );
};

export default ChooseColumnLayout;