import React from 'react';
import { makeStyles, Button } from '@material-ui/core'
import { AddToPhotos } from '@material-ui/icons'
import { useDispatch } from 'react-redux'
import { toggleFileName } from 'redux/actions'


const useStyle = makeStyles({
    topContainer: {
        height: "10vh",
        display: 'flex',
        alignItems: "center",
    },
    nameText: {
        margin: 0,
        padding: 0,
        marginLeft: "10vw",
    },
    button: {
        marginLeft: "50px",
        backgroundColor: '#4AD846',
        color: 'white',
        "&:hover": {
            backgroundColor: '#8be489',
        }
    }
})

const TopHeader = () => {
    const classes = useStyle()
    const dispatch = useDispatch()

    const newFile = () => {
        dispatch(toggleFileName())
    }

    const Text = () => (
        <p className={classes.nameText} style={{
            fontSize: "40px",
            background: "-webkit-linear-gradient(#FBAA34, #EC008C)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
        }}>Welcome John</p>
    )

    return (
        <div className={classes.topContainer}>
            <Text />
            <Button
                variant="contained"
                className={classes.button}
                onClick={newFile}
                startIcon={<AddToPhotos />}
            >
                New File
            </Button>
        </div>
    );
};

export default TopHeader;