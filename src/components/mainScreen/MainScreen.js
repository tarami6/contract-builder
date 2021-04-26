import React from "react";
import EditScreen from '../editScreen/EditScreen'
import { makeStyles } from '@material-ui/core/styles';
import AppBar from './appBar/AppBar';
import Logo from './appBar/Logo';
import ModalsAll from '../modals/ModalsAll'
import Notifiers from '../notifiers/Notifiers'

const useStyles = makeStyles((theme) => ({
    mainScreensContainer: {
        paddingTop: '76px'
    },
    topBar: {
        display: 'flex',
        position: 'fixed',
        width: '100%',
        height: '76px',
        zIndex: 2,
    },
}));

const MainScreen = () => {
    const classes = useStyles();

    return (
        <>
        <div className={classes.topBar}>
            <Logo />
            <AppBar />
        </div>
        <div className={classes.mainScreensContainer}>
            <EditScreen />
            <ModalsAll />
            <Notifiers />
        </div>
    </>
    );
};

export default MainScreen;