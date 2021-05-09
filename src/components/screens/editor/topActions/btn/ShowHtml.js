import React from 'react';
import { makeStyles, useTheme, IconButton, Tooltip } from '@material-ui/core'
import { DeveloperMode } from '@material-ui/icons'
import { saveFile, toggleCopyHtml, updateFile } from 'redux/actions'
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
        color: '#FfF'
    }
}))

const ShowHtml = () => {
    const classes = useStyle()
    const theme = useTheme()
    const dispatch = useDispatch()

    return (
        <div
            onClick={() => dispatch(toggleCopyHtml())}
            className={classes.btn}
            style={{ backgroundColor: theme.color.darkYellow }}
        >
            <Tooltip title={`Show HTML`}
                interactive>
                <IconButton style={{ outline: 'none' }}>
                    <DeveloperMode className={classes.svgIcon} />
                </IconButton>
            </Tooltip>
        </div>
    );
};

export default ShowHtml;