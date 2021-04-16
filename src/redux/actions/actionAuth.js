import {
    LOGIN,
    LOGOUT
} from './actionTypes'
import { logInApi, registerApi } from '../api/apiCalls'

export const logIn = (payload) => async (dispatch) => {
    let logedIn = localStorage.getItem('token')
    if (!logedIn?.length) {
        try {
            let response = await logInApi(payload)
            if (response?.data?.token) {
                localStorage.setItem('token', response?.data?.token)
            }
           else if(response?.data?.error){
               return undefined
           }
        } catch (e) {
            return console.log(e)
        }
    }
    dispatch({
        type: LOGIN,
        payload: {
            logedIn: true
        }
    })
}


export const logOut = () => {
    localStorage.clear();
    return {
        type: LOGOUT
    }
}


export const register = (payload) => async (dispatch) => {
    let response = await registerApi(payload) 
    console.log('response', response)
    if(response?.data?.user){
        try {
            let payloadCopy = {...payload}
            delete payloadCopy.name
            let response = await logInApi(payloadCopy)
            if (response?.data?.token) {
                localStorage.setItem('token', response?.data?.token)
                dispatch({
                    type: LOGIN,
                    payload: {
                        logedIn: true
                    }
                })
            }
        } catch (e) {
            return console.log(e)
        }
    }
} 

