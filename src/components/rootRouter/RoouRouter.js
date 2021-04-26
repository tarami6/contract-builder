import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect,
} from "react-router-dom";
import { useSelector } from 'react-redux'
import MainScreen from '../mainScreen/MainScreen'
import AuthScreen from '../authentication/AuthScreen'




const RoouRouter = () => {
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
                {/* for any other route except login */}
                {
                    !logedIn &&
                    <Redirect
                        to={{
                            pathname: "/login",
                        }}
                    />
                }
                <MainScreen /> 
            </Switch>
        </Router>

    );
};

export default RoouRouter;