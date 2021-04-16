import React, { useState, useEffect } from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect,
    useLocation
} from "react-router-dom";
import {useSelector} from 'react-redux'
import MainScreen from '../mainScreen/MainScreen'
import AuthScreen from '../authentication/AuthScreen'
import {useDispatch} from 'react-redux'
import {logIn} from '../../redux/actions/actionAuth'

const RoouRouter = () => {
    const dispatch = useDispatch()
    const logedIn = useSelector(state => state.user.logedIn)
    const [logged, setLogin] = useState(false)
    
    useEffect(() => {
        const logedIn = localStorage.getItem('token')
        console.log('logedIn', logedIn)
        if(logedIn?.length){
            dispatch(logIn())
        }
    }, [])

    useEffect(() => {
        setLogin(logedIn)
    }, [logedIn])

    return (
        <Router>
            <Switch>
                <Route path="/login">
                    {
                        logged &&
                        <Redirect
                        to={{
                            pathname: "/",
                        }}
                    />
                    }
                    <AuthScreen />
                </Route>
                {
                    !logged &&
                    <Redirect
                        to={{
                            pathname: "/login",
                        }}
                    />
                }
                <Route path="/">
                    <MainScreen />
                </Route>
            </Switch>
        </Router>

    );
};

export default RoouRouter;