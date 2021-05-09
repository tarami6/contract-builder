import React from 'react';
import { Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    titleContainer: {
        ...theme.titleContainer
    },
}))

const TitleBox = ({ title }) => {
    const classes = useStyles();
    return (
        <div className={classes.titleContainer}>
            {title}
        </div>
    );
};

export default TitleBox;