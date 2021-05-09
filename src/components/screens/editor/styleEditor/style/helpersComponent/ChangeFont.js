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
        ...theme.styleInput
    },
    label: {
        fontSize: '12px'
    }
}))

const ChangeFont = ({ onChange, sizeValue = '0', colorValue = '0', }) => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <div className={classes.inputContainer}>
                <input
                    className={classes.input}
                    type='number'
                    name='fontSize'
                    onChange={onChange}
                    value={sizeValue}
                />
                <p className={classes.label}>Font-Size(%)</p>
            </div>

            <div className={classes.inputContainer}>
                <input
                    className={classes.input}
                    type='color'
                    name='color'
                    onChange={onChange}
                    value={colorValue}
                />
                <p className={classes.label}>Color</p>
            </div>

        </div>
    );
};

export default ChangeFont;