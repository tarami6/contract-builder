import React from 'react';
import { Delete, Edit } from '@material-ui/icons';
import { deleteFile } from 'redux/actions'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'
const EditAndDelete = ({ show, id }) => {
    const dispatch = useDispatch()
    const history = useHistory()

    const _deleteFile = () => {
        dispatch(deleteFile(id))
    }

    const _redirect = (e) => {
        e.stopPropagation()
        history.push(`/file/${id}`)
    }

    if (!show) {
        return <></>
    }

    return (
        <div style={{ flexDirection: 'row' }}>
            <Edit style={{ margin: '0 15px' }} onClick={_redirect}/>
            <Delete onClick={_deleteFile} />
        </div>
    );
};

export default EditAndDelete;