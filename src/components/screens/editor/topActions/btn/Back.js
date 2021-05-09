import React from 'react';
import { makeStyles, useTheme, Button, Tooltip } from '@material-ui/core'
import { ArrowBack } from '@material-ui/icons'
import { useHistory } from 'react-router-dom'

const useStyle = makeStyles((theme) => ({
    backBtn: {
        width: "80px",
        height: "40px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: '20px',
        cursor: 'pointer',
        '&:hover': {
            opacity: 0.5
        }
    }
}))

const Back = () => {
    const classes = useStyle()
    const theme = useTheme()
    const history = useHistory()

    const _goBack = () => {
        history.push('/')
    }

    return (
        <div
            onClick={_goBack}
            className={classes.backBtn}
            style={{ backgroundColor: theme.color.grey }}
        >
            <Tooltip title={`GO Back`}
                interactive>
                <Button style={{ outline: 'none' }}>
                    <ArrowBack /> <p>Back</p>
                </Button>
            </Tooltip>
        </div>
    );
};

export default Back;