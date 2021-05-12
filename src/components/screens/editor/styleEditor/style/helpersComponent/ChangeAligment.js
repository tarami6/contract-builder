import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { FormatAlignLeft, FormatAlignRight, FormatAlignJustify } from '@material-ui/icons';

const useStyles = makeStyles((theme) => ({
    root: {
        display: "flex",
        justifyContent: "space-around",
    },
    icon: {
        color: "#b9b9b9",
        margin: "015px",
        fontSize: "18px",
        fontWeight: "600",
    }
}))

const ChangeAligment = ({ onChange, value, show, selector }) => {
    const classes = useStyles();

    const setAligment = (position) => {
        if (value === position) {
            return
        } else {
            const element = {
                target: {
                    name: selector,
                    value: position
                }
            }
            onChange(element)
        }
    }
    return (
        <div className={classes.root} >
            <div onClick={() => setAligment('flex-start')} >
                <FormatAlignLeft className={classes.icon} style={{ color: value === 'flex-start' ? '#000000' : 'lightgray' }} />
            </div>
            <div onClick={() => setAligment('center')} >
                <FormatAlignJustify className={classes.icon} style={{ color: value === 'center' ? '#000000' : 'lightgray' }} />
            </div>
            <div onClick={() => setAligment('flex-end')} >
                <FormatAlignRight className={classes.icon} style={{ color: value === 'flex-end' ? '#000000' : 'lightgray' }} />
            </div>
        </div>
    );
};

export default ChangeAligment;