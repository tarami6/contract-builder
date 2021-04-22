import React, { useEffect, useState } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import axios from 'axios'
import { useSelector, useDispatch } from 'react-redux'
import { logIn, register } from '../../redux/actions/actionAuth'
import { ExitToApp } from '@material-ui/icons';

function Copyright() {
    return (
        <Typography variant="body2" color="textSecondary" align="center">
            {'Copyright © '}
            <Link color="inherit" style={{marginRight: '5px'}} href="https://www.linkedin.com/in/rami-talisveiber/" target="_blank">
                Smart Html Builder - By Rami Talisveiber
            </Link>
            {2021}
        </Typography>
    );
}

const useStyles = makeStyles((theme) => ({
    paper: {
        marginTop: '60%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',

    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: '30px',
    },
    submit: {
        marginTop: '50px',
        width: "200px",
        height: "50px",
        borderRadius: "30px",
        backgroundImage: "linear-gradient(to left, #FBAA34 0%, #EC008C 100%)"
    },
    textFiled: {
        backgroundColor: '#D4D0D0', borderRadius: '23px'
    }
}));

export default function SignIn() {
    const classes = useStyles();
    const dispatch = useDispatch()
    const [payload, setPayload] = useState({
        email: '',
        password: ''
    })

    const [registerMode, setRegisterMode] = useState(false)

    const onChange = (e) => {
        setPayload({
            ...payload,
            [e.target.name]: e.target.value
        })
    }

    const authenticate = () => {
        if (registerMode) {
            dispatch(register(payload))
        } else {
            dispatch(logIn(payload))
        }
    }

    const registerModeActivate = (bool) => {
        if (bool) {
            setRegisterMode(true)
            setPayload({
                name: '',
                email: '',
                password: ''
            })
        } else {
            setRegisterMode(false)
            setPayload({
                email: '',
                password: ''
            })
        }
    }
    console.log('registerMode', registerMode)
    return (
        <div style={{ display: 'flex', }}>
            <div
                style={{ width: '15%', height: '100vh' }}
            >
                <div style={{
                    width: "100%",
                    display: "flex",
                    justifyContent: "flex-end",
                }}>
                    <img src="https://www.amdocs.com/amdocsOmega/images/logos/amdocswhite.svg" style={{
                        height: "80px",
                        display: "inline-block",
                        width: "128px",
                        position: "relative",
                    }} />
                </div>
                <div style={{
                    width: "306px",
                    height: "306px",
                    opacity: 0.13,
                    borderRadius: "100%",
                    backgroundImage: "linear-gradient(rgb(251,170,52),rgb(236,0,140))",
                    position: "relative",
                    top: "30%",
                    left: "-150px",
                }} />
            </div>
            <div
                style={{ width: '65%', marginLeft: '5%' }}
            >
                <Container component="main" maxWidth="xs">
                    <CssBaseline />
                    <div className={classes.paper}>
                        <p style={{
                            fontSize: "40px",
                            background: "-webkit-linear-gradient(#FBAA34, #EC008C)",
                            webkitBackgroundClip: "text",
                            webkitTextFillColor: "transparent",
                        }}>
                            {
                                registerMode ?
                                    'Register' :
                                    'Log In'
                            }
                        </p>
                        <form className={classes.form} noValidate >
                            {
                                registerMode &&
                                <TextField
                                    variant="outlined"
                                    margin="normal"
                                    required
                                    fullWidth
                                    id="name"
                                    label="Full Name"
                                    name="name"
                                    autoComplete="name"
                                    autoFocus
                                    value={payload.name}
                                    onChange={onChange}
                                />
                            }
                            <TextField
                                variant="outlined"
                                margin="normal"
                                required
                                fullWidth
                                id="email"
                                label="Email Address"
                                name="email"
                                autoComplete="email"
                                autoFocus
                                value={payload.email}
                                onChange={onChange}
                            />
                            <TextField
                                variant="outlined"
                                margin="normal"
                                required
                                fullWidth
                                name="password"
                                label="Password"
                                type="password"
                                id="password"
                                autoComplete="current-password"
                                value={payload.password}
                                onChange={onChange}
                            />
                            {/* <Link href="#" variant="body2">
                                Forgot password?
                            </Link> */}
                            <div
                                style={{
                                    width: '100%',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center'
                                }}
                            >
                                <Button
                                    type="button"

                                    variant="contained"
                                    color="primary"
                                    className={classes.submit}
                                    onClick={authenticate}
                                >

                                    <ExitToApp style={{ marginRight: '10px' }} />
                                    {
                                        registerMode ?
                                            'Register'
                                            :
                                            'Log In'
                                    }
                                </Button>
                            </div>
                            <div
                                style={{
                                    width: "100%",
                                    display: "flex",
                                    justifyContent: "center",
                                    marginTop: "40px", }}
                            >

                                {
                                    registerMode ?
                                        <Link href="#" variant="body2" onClick={() => registerModeActivate(false)}>
                                            <p  style={{fontSize: "16px",color: '#FCA736', textDecoration: 'underline'}}>Log In</p>
                                    </Link>

                                        :
                                        <Link href="#" variant="body2" onClick={() => registerModeActivate(true)}>
                                            <p
                                            style={{
                                                    color: "gray",
                                                    fontSize: "16px",
                                            }}
                                            >Or <span style={{color: '#FCA736', textDecoration: 'underline'}}>Create a new account</span></p>
                                        </Link>
                                }
                            </div>
                        </form>
                    </div>
                    <div style={{
                        position: "absolute",
                        bottom: "20px",}}>
                        <Copyright />
                    </div>
                </Container>
            </div>
            <div
                style={{ width: '20%', height: '100vh' }}
            >
                <div
                    style={{
                        width: "542px",
                        height: "545px",
                        backgroundImage: "linear-gradient( #FBAA34 0%, #EC008C 100%)",
                        transform: "matrix(0.73,0.68,-0.68,0.73,0,0)",
                        opacity: 0.73,
                        borderRadius: '6%',
                        top: "72%",
                        position: "relative",
                    }}
                />
            </div>
        </div>
    );
}