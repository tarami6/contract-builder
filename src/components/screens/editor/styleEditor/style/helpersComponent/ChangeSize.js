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
        width: '50px',
        ...theme.styleInput
    },
    label: {
        fontSize: '12px'
    }
}))

const ChangeSize = ({ onChange, valueWidth = 0, valueHeight = 0 }) => {
    const classes = useStyles();

    return (
        <div  className={classes.root}>
            <div  className={classes.inputContainer}>
                <input
                    className={classes.input}
                    type='number'
                    name='minHeight'
                    onChange={onChange}
                    value={valueHeight}
                />
                <p className={classes.label} >Height(px)</p>
            </div>
            <div  className={classes.inputContainer}>
                <input
                    className={classes.input}
                    type='number'
                    name='width'
                    onChange={onChange}
                    value={valueWidth}
                />
                <p className={classes.label} >Width(%)</p>
            </div>
        </div>
    );
};

export default ChangeSize;