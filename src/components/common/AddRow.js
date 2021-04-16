import React from "react";
import { useDispatch, useSelector } from 'react-redux'
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import LineStyleIcon from '@material-ui/icons/LineStyle';
import AddIcon from '@material-ui/icons/Add';
import { toggleAddRow } from '../../redux/actions/actionsModals'
import ChooseColumnLayout from './ChooseColumnLayout'

const useStyles = makeStyles((theme) => ({
    root: {
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
    iconContainer: {
        display: 'flex',
        alignItems: 'center'
    },
    icon: {
        fontSize: '15px',
        color: '#b9b9b9',
    },
    text: {
        fontSize: '14px',
        margin: '0 15px',
        fontWeight: 600,
        color: '#b9b9b9',
    },

}));

const AddRow = () => {
    const open = useSelector(state => state.modals.addRow)
    const dispatch = useDispatch()
    const classes = useStyles();

    const Add = () => (
        <div onClick={() => dispatch(toggleAddRow())} className={classes.root}>
            <div className={classes.iconContainer}>
                <LineStyleIcon className={classes.icon} id={'123'} />
                <Typography variant='h6' className={classes.text}>
                    Add Row
                </Typography>
            </div>
            <AddIcon className={classes.icon} />
        </div>
    )

    return (
        // <Button variant="outline-light"   style={{margin: '25px 0', backgroundColor: '#ADD8E5', color: 'grey'}} onClick={() => dispatch(toggleAddRow())} id={'123'}>
        //     <ViewList /> Add Row
        // </Button>
        <>
            {
                open ?
                    <ChooseColumnLayout />
                    :
                    <Add />
            }
        </>
    )
}

export default AddRow
