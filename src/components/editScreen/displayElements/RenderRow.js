import React from "react";
import Row from './DisplayRow'
import { useSelector } from 'react-redux'
import { Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';

const useStyle = makeStyles((theme) => ({
    title: {
        fontSize: '22px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '60px',
        position: 'relative',
        color: '#505b75',
        opacity: '0.1'
    }
}))

const RenderRow = () => {
    const classes = useStyle()
    const rows = useSelector(state => state.contractDom?.body?.rows)

    if (!rows || !rows?.length)
        return <Typography variant='h6' className={classes.title}>Clean Paper</Typography>
    else { 
        return rows?.map((rowId, index) => <Row key={rowId} index={index} rowId={rowId} />)

    }
}


export default RenderRow
