import axios from 'axios'

const devBaseUrl = 'http://localhost:4001/api'
const testServerBaseUrl = 'https://shm-back-end.herokuapp.com/api/'

axios.defaults.baseURL = testServerBaseUrl;// switch / dev / test / porduction


export const logInApi = async (payload) => await axios.post(`user/login/`, {
    // headers: { "auth-token": `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYwNzU3ZDBmMzIzYzY0ODgyZmNmODRiYiIsImlhdCI6MTYxODMyMDM3N30.2TAY9zctbEyj-1xwKe5QdM3iziiG4NFJzCT1g1xJlTo` },
    ...payload
})

export const registerApi = async (payload) => await axios.post(`user/register/`, {
    // headers: { "auth-token": `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYwNzU3ZDBmMzIzYzY0ODgyZmNmODRiYiIsImlhdCI6MTYxODMyMDM3N30.2TAY9zctbEyj-1xwKe5QdM3iziiG4NFJzCT1g1xJlTo` },
    ...payload
})