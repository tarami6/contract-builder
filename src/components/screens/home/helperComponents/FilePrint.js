import React, { useRef } from 'react'
import { Print as PrintIcon } from '@material-ui/icons'
import { makeStyles, useTheme, IconButton, Tooltip } from '@material-ui/core'
import ReactToPrint from 'react-to-print';
import ComponentToPrint from 'components/print/ComponentToPrint'
import { useLocation, useParams } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { setDom, resetFile } from 'redux/actions'

const useStyle = makeStyles((theme) => ({
    root: {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        borderRadius: "25px",
        width: "250px",
        backgroundColor: '#fff',
        padding: "5px",
    },
    btn: {
        width: "40px",
        height: "40px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: 'grey',
        borderRadius: '100%',
        cursor: 'pointer',
        '&:hover': {
            opacity: 0.5
        }
    },
    backBtn: {
        width: "80px",
        height: "40px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: '20px'
    },
    svgIcon: {
        fontSize: "20px",
        color: '#FfF'
    },
    actionsBtnContainer: {
        marginRight: "25px",
        cursor: 'pointer'
    },
    textBtn: {
        margin: 0,
        '&:hover': {
            color: 'blue'
        }
    },
}))

const Print = ({ fileId }) => {
    const classes = useStyle()
    const componentRef = useRef();
    const dispatch = useDispatch()
    const theme = useTheme()
    const currentFileArr = useSelector(state => state.files.data?.filter(file => file._id === fileId))

    const _setTheDom = () => {
        dispatch(setDom(currentFileArr[0]))
    }

    const _resetTheDom = () => {
        dispatch(resetFile())
    }
    
    return (
        <>
            <ReactToPrint
                trigger={() => (
                    <div className={classes.actionsBtnContainer}>
                        <p className={classes.textBtn}>Print</p>
                    </div>
                )}
                content={() => componentRef.current}
                onBeforeGetContent={_setTheDom}
                onAfterPrint={_resetTheDom}
            />
            <div style={{ display: "none" }}>
                <ComponentToPrint ref={componentRef} />
            </div>
        </>
    );
};

export default Print;