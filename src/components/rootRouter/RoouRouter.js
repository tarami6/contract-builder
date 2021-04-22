import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect,
} from "react-router-dom";
import { useSelector } from 'react-redux'
import MainScreen from '../editScreen/EditScreen'
import AuthScreen from '../authentication/AuthScreen'
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '../common/appBar/AppBar';
import Logo from '../common/appBar/Logo';
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

const RoouRouter = () => {
    const classes = useStyles();
    const logedIn = useSelector(state => state.user.logedIn)

    return (
        <Router>
            <Switch>
                <Route path="/login">
                    {
                        logedIn &&
                        <Redirect
                            to={{
                                pathname: "/",
                            }}
                        />
                    }
                    <AuthScreen />
                </Route>
                {
                    !logedIn &&
                    <Redirect
                        to={{
                            pathname: "/login",
                        }}
                    />
                }
                <>
                    <div className={classes.topBar}>
                        <Logo />
                        <AppBar />
                    </div>
                    <div className={classes.mainScreensContainer}>
                        <MainScreen />
                        <ModalsAll />
                        <Notifiers />
                    </div>
                </>

            </Switch>
        </Router>

    );
};

export default RoouRouter;