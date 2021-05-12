import React, { useEffect } from 'react';
import { makeStyles, Slide } from '@material-ui/core'
import { useSelector, useDispatch } from 'react-redux'
import { getAllFiles } from 'redux/actions'
import FileTable from './FileTable'
import TopHeader from './TopHeader'

const useStyle = makeStyles({
    root: {
        height: '100vh',
        width: '100vw',
        backgroundColor: '#EFECEC',
        paddingTop: "76px",
    },
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

const Home = () => {
    const classes = useStyle()
    const dispatch = useDispatch()
    const files = useSelector(state => state.files.data)

    useEffect(() => {
        dispatch(getAllFiles())
    }, [dispatch])

    const Circle = () => (
        <div style={{
            width: "306px",
            height: "306px",
            opacity: 0.13,
            borderRadius: "100%",
            backgroundImage: "linear-gradient(rgb(251,170,52),rgb(236,0,140))",
            position: "absolute",
            top: "30%",
            left: "-150px",
        }} />
    )

    const Square = () => (
        <div
            style={{
                width: "542px",
                height: "545px",
                backgroundImage: "linear-gradient( #FBAA34 0%, #EC008C 100%)",
                transform: "matrix(0.73,0.68,-0.68,0.73,0,0)",
                opacity: 0.73,
                borderRadius: '6%',
                top: "72%",
                position: "fixed",
                right: "-150px",
            }}
        />
    )

    return (
        <Slide direction="right" in={true}>
            <div className={classes.root}>
                <TopHeader />
                <div style={{ display: 'flex', }}>
                    <Circle />
                    <FileTable files={files} />
                    <Square />
                </div>
            </div>
        </Slide>
    );
};

export default Home;