import React, { useState, useEffect, useCallback } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useSelector, useDispatch } from 'react-redux'
import { editStyleElement } from '../../../redux/actions/actionsEditable'
import { ArrowUpward, ArrowDownward, ArrowBack, ArrowForward, TextFields, TextFormat, KeyboardArrowDown, KeyboardArrowUp } from '@material-ui/icons'
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
    iconArrow: {
        color: "#b9b9b9",
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

const StyleText = () => {
    const dispatch = useDispatch()
    const classes = useStyles();
    const { currentId, currentType } = useSelector(state => state.editable)
    const _element = useSelector(state => state.contractDom.elements)
    const [_currentElement, setCurrentElement] = useState(undefined)
    const [_currentStyle, setCurrentStyle] = useState({})
    const [openedSections, setOpenedSections] = useState({
        margin: true,
        padding: false,
        font: false
    })

    useEffect(() => {
        setCurrentElement(_element[currentId])
    }, [currentId, _element])

    useEffect(() => {
        setCurrentStyle({ ..._element[currentId].style })
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

    const getStyleValueFontSize = (styleKey) => {
        if (_currentStyle) {
            if (_currentStyle.hasOwnProperty(styleKey)) {
                const indexOfP = _currentStyle[styleKey].indexOf('%')
                return _currentStyle[styleKey].substring(0, indexOfP)
            }
        }
        return '0'
    }

    const getStyleValueFontColor = (styleKey) => {
        if (_currentStyle) {
            if (_currentStyle.hasOwnProperty(styleKey)) {
                return _currentStyle[styleKey]
            }
        }
        return '#000000'
    }

    const changeStyle = (e) => {
        const value = e.target.value
        const name = e.target.name
        setCurrentStyle({ ..._currentStyle, [name]: `${value}px` })
        dispatch(editStyleElement(_currentElement.id, { [name]: `${value}px` }))
    }

    const changeStyleFontSize = (e) => {
        const value = e.target.value
        const name = e.target.name
        setCurrentStyle({ ..._currentStyle, [name]: `${value}%` })
        dispatch(editStyleElement(_currentElement.id, { [name]: `${value}%` }))
    }

    const changeStyleFontColor = (e) => {
        const value = e.target.value
        const name = e.target.name
        setCurrentStyle({ ..._currentStyle, [name]: `${value}` })
        dispatch(editStyleElement(_currentElement.id, { [name]: `${value}` }))
    }

    const openSections = (key) => {
        setOpenedSections({ ...openedSections, [key]: !openedSections[key] })
    }

    return (
        <div>
            <div className={classes.title}>
                <Typography variant='h6' className={classes.title}>
                    Text Style
                </Typography>
            </div>
            <div
                className={classes.row}
                onClick={() => openSections('margin')}
            >
                <div>
                    <Typography variant='h6' className={classes.text}>
                        Margin
                    </Typography>
                </div>
                {openedSections.margin ?
                    <KeyboardArrowDown className={classes.iconArrow} />
                    :
                    <KeyboardArrowUp className={classes.iconArrow} />
                }

            </div>
            {openedSections.margin &&
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
                </div>}
            <div
                className={classes.row}
                onClick={() => openSections('padding')}
            >
                <div>
                    <Typography variant='h6' className={classes.text}>
                        Padding
                 </Typography>
                </div>
                {openedSections.padding ?
                    <KeyboardArrowDown className={classes.iconArrow} />
                    :
                    <KeyboardArrowUp className={classes.iconArrow} />
                }
            </div>
            {openedSections.padding &&
                <div className={classes.inputsContainer}>
                    <div className={classes.iconContainer}>
                        <input
                            className={classes.input}
                            type='number'
                            name='paddingTop'
                            onChange={changeStyle}
                            value={getStyleValue('paddingTop')}
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
            }
            <div
                className={classes.row}
                onClick={() => openSections('font')}
            >
                <div>
                    <Typography variant='h6' className={classes.text}>
                        Font
                    </Typography>
                </div>
                {openedSections.font ?
                    <KeyboardArrowDown className={classes.iconArrow} />
                    :
                    <KeyboardArrowUp className={classes.iconArrow} />
                }
            </div>
            {openedSections.font &&
                <div className={classes.inputsContainer}>
                    <div className={classes.iconContainer}>
                        <input
                            className={classes.input}
                            type='number'
                            name='fontSize'
                            onChange={changeStyleFontSize}
                            value={getStyleValueFontSize('fontSize')}
                        />
                        <TextFields className={classes.icon} />
                    </div>
                    <div className={classes.iconContainer}>
                        <input
                            className={classes.input}
                            type='color'
                            name='color'
                            onChange={changeStyleFontColor}
                            value={getStyleValueFontColor('color')}
                        />
                        <TextFormat className={classes.icon} />
                    </div>
                </div>
            }
        </div>
    );
};

export default StyleText;