import {
    DELETE_FILE,
    GET_ALL_FILES,
    SELECT_FILE,
    TOGGLE_FILE_ADDED_NOTIFIER,
} from './actionTypes'

import { getAllFilesApi, deleteFileApi, saveFileApi, updateFileApi } from '../api/apiCalls'


export const getAllFiles = () => async (dispatch) => {
    try {
        const { data: {
            files
        } } = await getAllFilesApi()
        if (files.length) {
            dispatch({
                type: GET_ALL_FILES,
                payload: {
                    files
                }
            })
        }
    } catch (e) {
        console.log('e', e)
    }
}

export const saveFile = (payload) => async (dispatch) => {
    try {
        const response = await saveFileApi(payload)
        if (response?.data?.html) {
            dispatch({
                type: TOGGLE_FILE_ADDED_NOTIFIER,
            })
        }

    } catch (e) {
        console.log(e)
    }
}

export const selectFile = (id) => {
    return {
        type: SELECT_FILE,
        payload: {
            id
        }
    }
}

export const deleteFile = (id) => async (dispatch) => {
    try {
        const response = await deleteFileApi(id)
        if (response?.data?.message === 'file deleted') {
            dispatch({
                type: DELETE_FILE,
                payload: {
                    id
                }
            })
        }
    } catch (e) {
        console.log('e', e)
    }
}

export const updateFile = (id, file) => async (dispatch) => {
    try {
        const repsonse = await updateFileApi(id, file)
        if (repsonse?.data?.message) {
            dispatch({
                type: TOGGLE_FILE_ADDED_NOTIFIER,
            })
        }
    } catch (e) {
        console.log('e', e)
    }
}