import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        justifyContent: "space-evenly",
    },
    inputContainer: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "5px",
    },
    input: {
        ...theme.styleInput,
    },
    label: {
        fontSize: '12px'
    }
}))

const ChangeBox = ({ onChange, valueTop = '0', valueBottom = '0', valueLeft = '0', valueRight = '0', show, sides, type = 'margin' }) => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <div className={classes.inputContainer}>
                <input
                    className={classes.input}
                    type='number'
                    name={`${type}Top`}
                    onChange={onChange}
                    value={valueTop}
                />
                <p className={classes.label} >Top</p>
            </div>
            <div className={classes.inputContainer}>
                <input
                    className={classes.input}
                    type='number'
                    name={`${type}Bottom`}
                    onChange={onChange}
                    value={valueBottom}
                />
                <p className={classes.label} >Bottom</p>
            </div>
            <div className={classes.inputContainer}>
                <input
                    className={classes.input}
                    type='number'
                    name={`${type}Left`}
                    onChange={onChange}
                    value={valueLeft}
                />
                <p className={classes.label} >Left</p>
            </div>
            <div className={classes.inputContainer}>
                <input
                    className={classes.input}
                    type='number'
                    name={`${type}Right`}
                    onChange={onChange}
                    value={valueRight}
                />
                <p className={classes.label} >Right</p>
            </div>
        </div>
    );
};

export default ChangeBox;