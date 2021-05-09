import React from "react";
import { useSelector } from 'react-redux'
import { Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import Row from '../displayElements/DisplayRow'

const useStyle = makeStyles((theme) => ({
    title: {
        color: "#505b75",
        height: "60px",
        display: "flex",
        opacity: 0.3,
        position: "relative",
        fontSize: "22px",
        alignItems: "center",
        justifyContent: "center",
    },
    emptyRowContainer: {
        width: '100%',
        height: '50vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    }
}))

const RenderRows = () => {
    const classes = useStyle()
    const rows = useSelector(state => state.contractDom?.body?.rows)

    if (!rows || !rows?.length)
        return (
            <div className={classes.emptyRowContainer}>
                <Typography variant='h6' className={classes.title}>
                    Clean Paper
                </Typography>
            </div>
        )
    else {
        return rows?.map((rowId, index) => <Row key={rowId} index={index} rowId={rowId} />)
    }
};

export default RenderRows;