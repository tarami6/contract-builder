import React from 'react';
import { Card, Grow, makeStyles } from '@material-ui/core'
import { useSelector } from 'react-redux'
import DeletetBtn from './delete/DeletetBtn'
import StyleByType from './style/StyleByType'

const useStyles = makeStyles((theme) => ({
    root: {
        padding: '5px',
        borderRadius: theme.container.borderRadius,
        minHeight: "55vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
    }, 
   
}))

const StyleEditor = () => {
    const classes = useStyles();
    const { currentType } = useSelector(state => state.editable)

    if (!currentType) {
        return <></>
    }
    return (
        <Grow in={true} delay={1000} >
            <Card elevation={3} className={classes.root}>
                <StyleByType />
                <DeletetBtn />
            </Card>
        </Grow>

    );
};

export default StyleEditor;