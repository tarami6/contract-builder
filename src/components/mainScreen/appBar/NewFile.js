import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import { InsertDriveFile, Edit } from '@material-ui/icons';
import { useHistory, useLocation } from 'react-router-dom'
import { toggleFileName, renameFile, resetFile } from 'redux/actions'
import { useDispatch, useSelector } from 'react-redux'

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
    },
    listItems: {
        display: 'flex',
    },
    itemContainer: {
        display: 'flex',
        padding: '0 20px',
        alignItems: 'center',
        borderLeft: '2px solid white',
    },
    item: {
        display: 'flex',
        cursor: 'pointer',
        alignItems: 'center',
    },
    icon: {
        fontSize: '17px',
        color: '#97a1b1',
    },
    text: {
        fontSize: '16px',
        margin: '0 5px',
        color: '#97a1b1',
        fontWeight: 400
    },
}));


const NewFile = () => {
    const classes = useStyles();
    const location = useLocation();
    const dispatch = useDispatch()
    const history = useHistory();
    const _currentFile = useSelector(state => state.contractDom)
    const current = location.pathname === '/newFile'

    const newDocument = () => {
        if(!current){
            history.push('/newFile')
        }
        dispatch(toggleFileName())
    }

    return (
        <div className={classes.itemContainer}
            onClick={newDocument}
        >
            <div className={classes.item}>
                {
                    current ?
                        (
                            <>
                                <Edit className={classes.icon} />
                                <Typography variant='h6' className={classes.text}>
                                    {_currentFile.name}
                                </Typography>
                            </>
                        ) :
                        (
                            <>
                                <InsertDriveFile className={classes.icon} />
                                <Typography variant='h6' className={classes.text}>
                                    New File
                                </Typography>
                            </>
                        )
                }

            </div>
        </div>
    );
};

export default NewFile;