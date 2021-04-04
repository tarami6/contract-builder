import React from 'react';
import { FormatAlignLeft, FormatAlignRight, FormatAlignJustify } from '@material-ui/icons';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        display: "flex",
        justifyContent: "space-around",
    },
    icon: {
        color: "#b9b9b9",
        margin: "015px",
        fontSize: "14px",
        fontWeight: "600",
    }
}))

const Aligment = ({ onChange, value, show, selector }) => {
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

    if (!show) {
        return <></>
    }
    return (
        <div className={classes.root} >
            <div onClick={() => setAligment('flex-start')} style={{ backgroundColor: value === 'flex-start' ? '#445165' : 'inherit' }}>
                <FormatAlignLeft className={classes.icon} />
            </div>
            <div onClick={() => setAligment('center')} style={{ backgroundColor: value === 'center' ? '#445165' : 'inherit' }}>
                <FormatAlignJustify className={classes.icon} />
            </div>
            <div onClick={() => setAligment('flex-end')} style={{ backgroundColor: value === 'flex-end' ? '#445165' : 'inherit' }}>
                <FormatAlignRight className={classes.icon} />
            </div>
        </div>
    );
};

export default Aligment;