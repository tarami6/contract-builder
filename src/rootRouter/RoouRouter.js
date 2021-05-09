import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect,
} from "react-router-dom";
import {
    isMobile
  } from "react-device-detect";
import { useSelector } from 'react-redux'
import AuthScreen from '../components/screens/authentication/AuthScreen'
import Home from 'components/screens/home/Home'
import Editor from 'components/screens/editor/Editor'
import AppBar from 'components/common/appBar/AppBar';
import Logo from 'components/common/appBar/Logo';
import { makeStyles } from '@material-ui/core'
import ModalsAll from 'components/modals/ModalsAll'
import Notifiers from 'components/notifiers/Notifiers'
import MobileMessage from 'components/common/mobile/MobileMessage'

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
        boxShadow: "1px 1px 4px 1px lightgrey",
    },
}));

const RoouRouter = () => {
    const classes = useStyles();
    const logedIn = useSelector(state => state.user.logedIn)

    if(isMobile){
        return <MobileMessage />
    }
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
                {/* for any other route except login */}
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
                    <Route exact path="/">
                        <Home />
                    </Route>
                    <Route exact path="/newfile">
                        <Editor />
                    </Route>
                    <Route exact path="/file/:id">
                        <Editor />
                    </Route>
                    {/* <MainScreen /> */}
                    <ModalsAll />
                    <Notifiers />
                </>
            </Switch>
        </Router>

    );
};

export default RoouRouter;