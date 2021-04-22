import axios from 'axios'

const devBaseUrl = 'http://localhost:4001/api'
const testServerBaseUrl = 'https://shm-back-end.herokuapp.com/api/'

axios.defaults.baseURL = devBaseUrl;// switch / dev / test / porduction

const getToken = () => localStorage.getItem('token')

export const logInApi = async (payload) => await axios.post(`user/login/`, {
    // headers: { "auth-token": `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYwNzU3ZDBmMzIzYzY0ODgyZmNmODRiYiIsImlhdCI6MTYxODMyMDM3N30.2TAY9zctbEyj-1xwKe5QdM3iziiG4NFJzCT1g1xJlTo` },
    ...payload
})

export const registerApi = async (payload) => await axios.post(`user/register/`, {
    // headers: { "auth-token": `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYwNzU3ZDBmMzIzYzY0ODgyZmNmODRiYiIsImlhdCI6MTYxODMyMDM3N30.2TAY9zctbEyj-1xwKe5QdM3iziiG4NFJzCT1g1xJlTo` },
    ...payload
})

export const saveFileApi = async (payload) => await axios.post('dom/save',
    { ...payload },
    {
        headers: { "auth-token": getToken() },
    }
)

export const getAllFilesApi = async () => await axios.get('/dom', {
    headers: { "auth-token": getToken() },
})

export const deleteFileApi = async (id) => await axios.delete(`/dom/delete/${id}`, {
    headers: { "auth-token": getToken() }
})

export const updateFileApi = async (id, payload) => await axios.put(`/dom/update/${id}`,
    { ...payload },
    {
        headers: { "auth-token": getToken() }
    })