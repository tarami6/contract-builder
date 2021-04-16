import React from 'react';
import TitleBox from '../../common/TitleBox'
import { makeStyles, Typography } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
    text: {
        textAlign: "center",
        marginTop: "25px",
        color: "#fff",
    }
}))

const StyleCode = () => {
    const classes = useStyles();
    return (
        <div>
            <TitleBox title={'Code Style'} />
            <Typography className={classes.text} >All the design made in the html editor</Typography>
        </div>
    );
};

export default StyleCode;