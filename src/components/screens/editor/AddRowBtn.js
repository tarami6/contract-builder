import React, { useState } from 'react';
import { useDispatch } from 'react-redux'
import { makeStyles, Tooltip, withStyles, Card } from '@material-ui/core'
import { addRow } from 'redux/actions/actionsContractDom'

const useStyle = makeStyles({
    root: {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        borderRadius: "25px",
        width: "250px",
        backgroundColor: '#fff',
        // boxShadow: "20px 10px 20px #00000029",
        padding: "5px",
    },
    rowItem: {
        width: "40px",
        height: "40px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        border: "1px solid grey",
        borderRadius: "100%",
        cursor: "pointer",
    },
    text: {
        fontSize: "20px",

    }
})

const HtmlTooltip = withStyles((theme) => ({
    tooltip: {
        backgroundColor: '#f5f5f9',
        color: 'rgba(0, 0, 0, 0.87)',
        maxWidth: 220,
        fontSize: theme.typography.pxToRem(12),
        border: '1px solid #dadde9',
        marginTop: '5px',

    },
}))(Tooltip);

const AddRowBtn = () => {
    const classes = useStyle()
    const dispatch = useDispatch()
    const titles = ['1 Column (100%)', '2 Columns (50% X 2)', '3 Columns (33% X 3)', '4 Columns (25% X 4)']

    const _addRow = (numOfColumns) => {
        dispatch(addRow(numOfColumns))
    }
    //TODO add row added please progress with other functionality base on it
    return (
        <Card className={classes.root} elevation={3}>
            <div >
                <p style={{
                    fontSize: "12px",
                    background: "-webkit-linear-gradient(#FBAA34, #EC008C)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                }}>
                    Add Row
                </p>

            </div>
            {
                titles.map((title, index) => (
                    <HtmlTooltip key={index} title={title} interactive>
                        <div className={classes.rowItem} onClick={() => _addRow(index)}>
                            <p className={classes.text}>{`${index + 1}C`}</p>
                        </div>
                    </HtmlTooltip>
                ))
            }
        </Card>
    );
};

export default AddRowBtn;