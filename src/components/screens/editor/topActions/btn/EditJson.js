import React from 'react';
import { makeStyles, useTheme, IconButton, Tooltip } from '@material-ui/core'
import {  toggleVarJson } from 'redux/actions'
import { useDispatch } from 'react-redux'

const useStyle = makeStyles((theme) => ({
    btn: {
        width: "40px",
        height: "40px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: 'grey',
        borderRadius: '100%',
        '&:hover': {
            opacity: 0.5
        }
    },
    svgIcon: {
        fontSize: "20px",
        color: '#FfF',
        marginBottom: "2px",
    }
}))

const EditJson = () => {
    const classes = useStyle()
    const theme = useTheme()
    const dispatch = useDispatch()

    return (
        <div
            onClick={() => dispatch(toggleVarJson())}
            className={classes.btn}
            style={{ backgroundColor: theme.color.darkGrey }}
        >
            <Tooltip title={`Edit Json`}
                interactive>
                <IconButton style={{ outline: 'none' }}>
                    <p className={classes.svgIcon} >{'{}'}</p>
                </IconButton>
            </Tooltip>
        </div>
    );
};

export default EditJson;