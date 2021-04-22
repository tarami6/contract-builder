import React from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { toggleFileAddedNotifier } from 'redux/actions'
import { Snackbar, makeStyles } from '@material-ui/core';
import MuiAlert from '@material-ui/lab/Alert';

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        '& > * + *': {
            marginTop: theme.spacing(2),
        },
    },
}));

function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const SuccesNotifier = ({ title, onClose, open }) => (
    <Snackbar open={open} autoHideDuration={4000} onClose={onClose}>
        <Alert onClose={onClose} severity="success">
            {title}
        </Alert>
    </Snackbar>
)

const Notifiers = () => {
    const classes = useStyles();
    const dispatch = useDispatch()
    const notifier = useSelector(state => state.notifier)

    const handleCloseFileAdded = () => {
        dispatch(toggleFileAddedNotifier())
    };

    return (
        <div className={classes.root}>
            <SuccesNotifier title={'File Save'} onClose={handleCloseFileAdded} open={notifier.fileAddedNotifier} />
        </div>
    );
};

export default Notifiers;