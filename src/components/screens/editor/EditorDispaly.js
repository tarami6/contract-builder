import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { toggleFileName, setDom, resetFile } from 'redux/actions'
import { makeStyles, Card } from '@material-ui/core'
import RenderRows from './renders/RenderRows'

const useStyle = makeStyles((theme) => ({
    root: {
        width: '60%',
       
    },
    displayContainer: {
        width: '100%',
        minHeight: "55vh",
        borderRadius: theme.container.borderRadius,
        padding: '15px'
    }
}))

const EditorDispaly = () => {
    const classes = useStyle()
    const dispatch = useDispatch()

    useEffect(() => {
        return () => dispatch(resetFile())
    }, [])

    return (
        <div className={classes.root}>
            <Card className={classes.displayContainer} elevation={3}>
                <RenderRows />
            </Card>
        </div>
    );
};

export default EditorDispaly;