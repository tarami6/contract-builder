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

const ChnageDeviderBorder = ({ onChange, valueWidth = '0', valueColor = '#000000' }) => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <div className={classes.inputContainer}>
                <input
                    className={classes.input}
                    type='number'
                    name='height'
                    onChange={onChange}
                    value={valueWidth}
                />
                <p className={classes.label} >Height</p>
            </div>
            <div className={classes.inputContainer}>
            <input
                    className={classes.input}
                    type='color'
                    name='backgroundColor'
                    onChange={onChange}
                    value={valueColor}
                />
                <p className={classes.label} >Color</p>
            </div>
        </div>
    );
};

export default ChnageDeviderBorder;