import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { ELEMENTTYPE } from '../../../redux/config/elementSchema'
import { makeStyles } from '@material-ui/core/styles';
import { editStyleRow } from '../../../redux/actions/actionsEditable'
import StyleRow from './StyleRow'
import StyleColumn from './StyleColumn'
import StyleText from './StyleText'
import StyleVariable from './StyleVariable'

const useStyles = makeStyles((theme) => ({
    root: {
        width: '20%',
        height: '100%',
        position: 'fixed',
        marginLeft: '80%',
        backgroundColor: '#333C4D'
    },
    input: {
        width: '50px'
    },
    inputsContainer: {
        display: 'flex',
        justifyContent: 'space-evenly'
    },
    iconContainer: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column'
    },
    icon: {
        color: "#b9b9b9",
        margin: "015px",
        fontSize: "14px",
        fontWeight: "600",
    }
}))

const DynamicStyle = () => {
    const classes = useStyles();
    const { currentType } = useSelector(state => state.editable)

    const StyleByType = () => {
        switch (currentType) {
            case ELEMENTTYPE.row:
                return <StyleRow />
            case ELEMENTTYPE.column:
                return <StyleColumn />
            case ELEMENTTYPE.text:
                return <StyleText />
            case ELEMENTTYPE.variable:
                return <StyleVariable />
            default:
                return <p>No style type</p>
        }
    }

    return (
        <div className={classes.root} >
            <StyleByType />
        </div>
    );
};

export default DynamicStyle;


{/* <div className={classes.iconContainer}>
                    <input
                        className={classes.input}
                        type='number'
                        name='marginLeft'
                        onChange={changeStyle}
                        value={getStyleValue('marginLeft')}
                    />
                    <ArrowBack className={classes.icon} />
                </div>
                <div className={classes.iconContainer}>
                    <input
                        className={classes.input}
                        type='number'
                        name='marginRight'
                        onChange={changeStyle}
                        value={getStyleValue('marginRight')}
                    />
                    <ArrowForward className={classes.icon} />
                </div> */}