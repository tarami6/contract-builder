import React from 'react';
import { makeStyles, Card } from '@material-ui/core';
import { InsertDriveFile } from '@material-ui/icons';
import { homeTableBG } from 'assets';
import { trasformDate } from 'utils'
import { deleteFile, toggleCopyHtml, setDom } from 'redux/actions'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'
import FilePrint from './helperComponents/FilePrint'
import { uid } from 'uid'

const useStyles = makeStyles({
    headCellContainer: {
        display: "flex",
        width: '40%',
        alignItems: "center",
    },
    medHeadCellContainer: {
        display: "flex",
        width: '20%',
        alignItems: "center",
    },
    devider: {
        borderTop: "1px solid lightgray",
        marginTop: "25px",
        marginBottom: "25px",
    },
    actionsBtnContainer: {
        marginRight: "25px",
        cursor: 'pointer'
    },
    text: {
        margin: 0,
    },
    textBtn: {
        margin: 0,
        '&:hover': {
            color: 'blue'
        }
    },
    rowContainer: {
        display: "flex",
        height: "50px",
        '&:hover, &:active': {
            backgroundColor: '#f1f1f1'
        }
    },
    fileContainer: {
        width: "80vw",
        height: "70vh",
        backgroundColor: "#fff",
        zIndex: 2,
        position: "relative",
        left: "10vw",
        borderRadius: "15px",
        backgroundImage: `url(${homeTableBG})`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center'
    }
});

export default function FileTable({ files }) {
    const classes = useStyles();
    const dispatch = useDispatch()
    const history = useHistory()
    

    const _deleteFile = (id) => {
        dispatch(deleteFile(id))
    }

    const _redirect = (e, id) => {
        e.stopPropagation()
        history.push(`/file/${id}`)
    }

    const _showHtml = async (fileId) => {
        const file = files?.filter(file => file._id === fileId)
        await dispatch(setDom(file[0]))
        dispatch(toggleCopyHtml())
    }

    return (
        <Card elevation={3} className={classes.fileContainer}>
            <div style={{
                width: '100%', padding: '25px 50px',
                height: "100%",
                backgroundColor: "white",
                opacity: 0.8,
            }}>
                <div style={{ display: 'flex', padding: "0  10px", }}>
                    <div className={classes.headCellContainer} > <p className={classes.text} style={{ color: 'grey' }}> Name</p></div>
                    <div className={classes.medHeadCellContainer} ><p className={classes.text} style={{ color: 'grey' }}>Added</p></div>
                    <div className={classes.headCellContainer} style={{ justifyContent: "center", color: 'grey' }} ><p className={classes.text}>Actions</p></div>
                </div>
                <div className={classes.devider} />
                <div>
                    {files.reverse().map((row => {
                        return (
                            <div key={uid()}  className={classes.rowContainer}>
                                <div className={classes.headCellContainer}>
                                    <div style={{
                                        backgroundColor: '#E9B31C',
                                        width: "30px",
                                        height: "30px",
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        borderRadius: "6px",
                                        marginRight: "15px",
                                        marginLeft: "10px",
                                    }}>
                                        <InsertDriveFile style={{ color: 'white', fontSize: 14 }} />
                                    </div>

                                    <p className={classes.text}>{row.name} </p>
                                </div>
                                <div className={classes.medHeadCellContainer}>
                                    <p className={classes.text}>{trasformDate(row.date)} </p>
                                </div>
                                <div
                                    className={classes.headCellContainer}
                                    style={{ justifyContent: "center", }}
                                >
                                    <div className={classes.actionsBtnContainer}  onClick={(e) => _redirect(e, row._id)}>
                                        <p className={classes.textBtn}>Edit</p>
                                    </div>
                                    <FilePrint fileId={row._id} />
                                    <div className={classes.actionsBtnContainer} onClick={() => _showHtml(row._id)}>
                                        <p className={classes.textBtn}>Show Html</p>
                                    </div>
                                    <div className={classes.actionsBtnContainer} onClick={() => _deleteFile(row._id)}>
                                        <p className={classes.textBtn}>Delete</p>
                                    </div>
                                </div>
                            </div>
                        )
                    }))}
                </div>
            </div>
        </Card>
    );
}
