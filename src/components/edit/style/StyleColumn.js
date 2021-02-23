import React, { useState, useEffect, useCallback } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useSelector, useDispatch } from 'react-redux'
import { editStyleColumn } from '../../../redux/actions/actionsEditable'
import { ArrowUpward, ArrowDownward, ArrowBack, ArrowForward } from '@material-ui/icons'
import { Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
        width: '20%',
        height: '100%',
        position: 'fixed',
        marginLeft: '80%',
        backgroundColor: '#2A3140'
    },
    titleOfElementContainer: {
        color: "rgb(185,185,185)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "15px",
    },
    input: {
        width: '50px'
    },
    inputsContainer: {
        display: 'flex',
        justifyContent: 'space-evenly',
        marginTop: '15px'
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
    },
    title: {
        fontSize: '22px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '60px',
        background: '#505b75',
        position: 'relative',
        color: '#fff',
    },
    row: {
        padding: 10,
        border: '1px solid #525661',
        display: 'flex',
        alignItems: 'center',
        paddingLeft: 33,
        justifyContent: 'space-between',
        cursor: 'pointer',
        '&:hover': {
            background: '#2a3040',
            border: 'none'
        },
        '& > div': {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
        },
    },
    text: {
        fontSize: '14px',
        margin: '0 15px',
        fontWeight: 600,
        color: '#b9b9b9',
    },
}))

const StyleColumn = () => {
    const dispatch = useDispatch()
    const classes = useStyles();
    const { currentId, currentType } = useSelector(state => state.editable)
    const _columns = useSelector(state => state.contractDom.columns)
    const [_currentElement, setCurrentElement] = useState(undefined)
    const [_currentStyle, setCurrentStyle] = useState({})

    useEffect(() => {
        setCurrentElement(_columns[currentId])
    }, [currentId, _columns])

    useEffect(() => {
        setCurrentStyle({ ..._columns[currentId].style })
    }, [])

    const getStyleValue = (styleKey) => {
        if (_currentStyle) {
            if (_currentStyle.hasOwnProperty(styleKey)) {
                const indexOfP = _currentStyle[styleKey].indexOf('px')
                return _currentStyle[styleKey].substring(0, indexOfP)
            }
        }
        return '0'
    }

    const changeStyle = (e) => {
        const value = e.target.value
        const name = e.target.name
        setCurrentStyle({ ..._currentStyle, [name]: `${value}px` })
        dispatch(editStyleColumn(_currentElement.id, { [name]: `${value}px` }))
    }

    return (
        <div>
            <div className={classes.title}>
                <Typography variant='h6' className={classes.title}>
                    Column Style
                </Typography>
            </div>
            <div
                className={classes.row}
            >
                <div>
                    <Typography variant='h6' className={classes.text}>
                        Margin
                 </Typography>
                </div>
            </div>
            <div className={classes.inputsContainer}>
                <div className={classes.iconContainer}>
                    <input
                        className={classes.input}
                        type='number'
                        name='marginTop'
                        onChange={changeStyle}
                        value={getStyleValue('marginTop')}
                    />
                    <ArrowUpward className={classes.icon} />
                </div>
                <div className={classes.iconContainer}>
                    <input
                        className={classes.input}
                        type='number'
                        name='marginBottom'
                        onChange={changeStyle}
                        value={getStyleValue('marginBottom')}
                    />
                    <ArrowDownward className={classes.icon} />
                </div>
                <div className={classes.iconContainer}>
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
                </div>
            </div>
            <div className={classes.row} >
                <div>
                    <Typography variant='h6' className={classes.text}>
                        Padding
                 </Typography>
                </div>
            </div>
            <div className={classes.inputsContainer}>
                <div className={classes.iconContainer}>
                    <input
                        className={classes.input}
                        type='number'
                        name='paddingTop'
                        onChange={changeStyle}
                        value={getStyleValue('paddingTop')}
                    // value={getStyleValue('marginTop')}
                    />
                    <ArrowUpward className={classes.icon} />
                </div>
                <div className={classes.iconContainer}>
                    <input
                        className={classes.input}
                        type='number'
                        name='paddingBottom'
                        onChange={changeStyle}
                        value={getStyleValue('paddingBottom')}
                    />
                    <ArrowDownward className={classes.icon} />
                </div>
                <div className={classes.iconContainer}>
                    <input
                        className={classes.input}
                        type='number'
                        name='paddingLeft'
                        onChange={changeStyle}
                        value={getStyleValue('paddingLeft')}
                    />
                    <ArrowBack className={classes.icon} />
                </div>
                <div className={classes.iconContainer}>
                    <input
                        className={classes.input}
                        type='number'
                        name='paddingRight'
                        onChange={changeStyle}
                        value={getStyleValue('paddingRight')}
                    />
                    <ArrowForward className={classes.icon} />
                </div>
            </div>
        </div>
    );
};

export default StyleColumn;