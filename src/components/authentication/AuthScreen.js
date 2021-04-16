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
import { set } from 'lodash';

function Copyright() {
    return (
        <Typography variant="body2" color="textSecondary" align="center">
            {'Copyright © '}
            <Link color="inherit" href="https://material-ui.com/">
                Smart Html Builder - By Rami Talisveiber
            </Link>
            {2021}
            {'.'}
        </Typography>
    );
}

const useStyles = makeStyles((theme) => ({
    paper: {
        marginTop: theme.spacing(8),
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
        marginTop: theme.spacing(1),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
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

    return (
        <Container component="main" maxWidth="xs">
            <CssBaseline />
            <div className={classes.paper}>
                <Avatar className={classes.avatar}>
                    <LockOutlinedIcon />
                </Avatar>
                <Typography component="h1" variant="h5">
                    {
                        registerMode ?
                            'Register' :
                            'Log In'
                    }
                </Typography>
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
                    <Button
                        type="button"
                        fullWidth
                        variant="contained"
                        color="primary"
                        className={classes.submit}
                        onClick={authenticate}
                    >

                        {
                            registerMode ?
                                'Register'
                                :
                                'Log In'
                        }
                    </Button>
                    <Grid container>
                        <Grid item xs>
                            <Link href="#" variant="body2">
                                Forgot password?
                            </Link>
                        </Grid>
                        <Grid item>
                            {
                                registerMode ?
                                    <Link href="#" variant="body2" onClick={() => registerModeActivate(false)}>
                                        Log In
                                    </Link>

                                    :
                                    <Link href="#" variant="body2" onClick={() => registerModeActivate(true)}>
                                        Register
                                    </Link>
                            }

                        </Grid>
                    </Grid>
                </form>
            </div>
            <Box mt={8}>
                <Copyright />
            </Box>
        </Container>
    );
}