import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux'
import { resetFile } from 'redux/actions'
import { makeStyles, Card } from '@material-ui/core'
import RenderRows from './renders/RenderRows'

const useStyle = makeStyles((theme) => ({
    root: {
        width: "60%",
        maxHeight: "80vh",
        overflow: "scroll",
        borderRadius: theme.container.borderRadius,
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
    }, [dispatch])

    return (
        <div className={classes.root}>
            <Card className={classes.displayContainer} elevation={3}>
                <RenderRows />
            </Card>
        </div>
    );
};

export default EditorDispaly;