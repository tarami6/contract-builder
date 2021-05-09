import React from 'react';
import { makeStyles, useTheme, IconButton, Tooltip } from '@material-ui/core'
import { Save as SaveIcon } from '@material-ui/icons'
import { saveFile, toggleCopyHtml, updateFile } from 'redux/actions'
import { useLocation, useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

const useStyle = makeStyles((theme) => ({
    btn: {
        width: "40px",
        height: "40px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: 'grey',
        borderRadius: '100%',
        cursor: 'pointer',
        '&:hover': {
            opacity: 0.5
        }
    },
    svgIcon: {
        fontSize: "20px",
        color: '#FfF'
    }
}))

const Save = () => {
    const classes = useStyle()
    const theme = useTheme()
    const contractDom = useSelector(state => state.contractDom)
    const query = useParams();
    const fileId = query.id
    const dispatch = useDispatch()
    const location = useLocation()

    const _saveFile = () => {
        let locationSrt = location.pathname.substring(0, 5)
        if (locationSrt === '/file' && fileId.length) {
            dispatch(updateFile(fileId, contractDom))
        } else {
            dispatch(saveFile(contractDom))
        }
    }

    return (
        <div
            onClick={_saveFile}
            className={classes.btn}
            style={{ backgroundColor: theme.color.green }}
        >
            <Tooltip title={`Save File`}
                interactive>
                <IconButton style={{ outline: 'none' }}>
                    <SaveIcon className={classes.svgIcon} />
                </IconButton>
            </Tooltip>
        </div>
    );
};

export default Save;