import React, { useRef } from 'react'
import { Print as PrintIcon } from '@material-ui/icons'
import { makeStyles, useTheme, IconButton } from '@material-ui/core'
import ReactToPrint from 'react-to-print';
import ComponentToPrint from 'components/print/ComponentToPrint'

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

const Print = () => {
    const classes = useStyle()
    const componentRef = useRef();
    const theme = useTheme()

    return (
        <>
            <ReactToPrint
                trigger={() => (
                    <div className={classes.btn} style={{ backgroundColor: theme.color.blue }}>
                        <IconButton style={{ outline: 'none' }}>
                            <PrintIcon className={classes.svgIcon} />
                        </IconButton>
                    </div>
                )}
                content={() => componentRef.current}
            />
            <div style={{ display: "none" }}>
                <ComponentToPrint ref={componentRef} />
            </div>
        </>
    );
};

export default Print;