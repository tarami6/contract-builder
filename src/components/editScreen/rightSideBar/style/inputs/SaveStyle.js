import React from 'react';
import useGetInputValue from 'customHooks/useGetInputValue'
import { Edit, ColorLens } from '@material-ui/icons'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    row: {
        padding: '5px 10px',
        border: '1px solid #525661',
        display: 'flex',
        alignItems: 'center',
        paddingLeft: 30,
        justifyContent: 'space-evenly',
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
        color: "#b9b9b9",
        fontSize: "25px",
        fontWeight: "600",
    },
}))

const SaveStyle = () => {
    const classes = useStyles();
    const { saveStyle, getStyle, hasStyle } = useGetInputValue()

    return (
        <div
            className={classes.row}
        >
            {
                hasStyle && <div onClick={getStyle}>
                    <ColorLens className={classes.icon} />
                </div>
            }
            <div onClick={saveStyle}>
                <Edit className={classes.icon} />
            </div>

        </div>
    );
};

export default SaveStyle;