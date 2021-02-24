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


const StyleVariable = () => {
    const dispatch = useDispatch()
    const classes = useStyles();
    const { currentId, currentType } = useSelector(state => state.editable)
    const _element = useSelector(state => state.contractDom.elements)
    const [_currentElement, setCurrentElement] = useState(undefined)
    const [_currentStyle, setCurrentStyle] = useState({})
    const [openedSections, setOpenedSections] = useState({
        titleMargin: true,
        titlePadding: false,
        titleFont: false,
        keyMargin: false,
        keyPadding: false,
        keyFont: false,
    })

    useEffect(() => {
        setCurrentElement(_element[currentId])
    }, [currentId, _element])

    useEffect(() => {
        setCurrentStyle({ ..._element[currentId].style })
    }, [])

    const getStyleValueTitle = (styleKey) => {
        if (_currentStyle) {
            if (_currentStyle?.title?.hasOwnProperty(styleKey)) {
                const indexOfP = _currentStyle.title[styleKey].indexOf('px')
                return _currentStyle.title[styleKey].substring(0, indexOfP)
            }
        }
        return '0'
    }

    const getStyleValueKey = (styleKey) => {
        if (_currentStyle) {
            if (_currentStyle?.key?.hasOwnProperty(styleKey)) {
                const indexOfP = _currentStyle.key[styleKey].indexOf('px')
                return _currentStyle.key[styleKey].substring(0, indexOfP)
            }
        }
        return '0'
    }

    const getStyleValueTitleFontSize = (styleKey) => {
        if (_currentStyle) {
            if (_currentStyle?.title?.hasOwnProperty(styleKey)) {
                const indexOfP = _currentStyle.title[styleKey].indexOf('%')
                return _currentStyle.title[styleKey].substring(0, indexOfP)
            }
        }
        return '0'
    }

    const getStyleValueKeyFontSize = (styleKey) => {
        if (_currentStyle) {
            if (_currentStyle?.key?.hasOwnProperty(styleKey)) {
                const indexOfP = _currentStyle.key[styleKey].indexOf('%')
                return _currentStyle.key[styleKey].substring(0, indexOfP)
            }
        }
        return '0'
    }

    const getStyleValueTitleFontColor = (styleKey) => {
        if (_currentStyle) {
            if (_currentStyle?.title?.hasOwnProperty(styleKey)) {
                return _currentStyle.title[styleKey]
            }
        }
        return '#000000'
    }

    const getStyleValueKeyFontColor = (styleKey) => {
        if (_currentStyle) {
            if (_currentStyle?.key?.hasOwnProperty(styleKey)) {
                return _currentStyle.key[styleKey]
            }
        }
        return '#000000'
    }

    const changeStyleTitle = (e) => {
        const value = e.target.value
        const name = e.target.name
        setCurrentStyle({ ..._currentStyle, title: { ..._currentStyle.title, [name]: `${value}px` } })
        dispatch(editStyleElement(_currentElement.id, {
            ..._currentStyle,
            title: {
                ..._currentStyle.title,
                [name]: `${value}px`
            }
        }))
    }

    const changeStyleKey = (e) => {
        const value = e.target.value
        const name = e.target.name
        setCurrentStyle({ ..._currentStyle, key: { ..._currentStyle.key, [name]: `${value}px` } })
        dispatch(editStyleElement(_currentElement.id, {
            ..._currentStyle,
            key: {
                ..._currentStyle.key,
                [name]: `${value}px`
            }
        }))
    }

    const changeStyleTitleFontSize = (e) => {
        const value = e.target.value
        const name = e.target.name
        setCurrentStyle({ ..._currentStyle, title: { ..._currentStyle.title, [name]: `${value}%` } })
        dispatch(editStyleElement(_currentElement.id, {
            ..._currentStyle,
            title: {
                ..._currentStyle.title,
                [name]: `${value}%`
            }
        }))
    }

    const changeStyleKeyFontSize = (e) => {
        const value = e.target.value
        const name = e.target.name
        setCurrentStyle({ ..._currentStyle, key: { ..._currentStyle.key, [name]: `${value}%` } })
        dispatch(editStyleElement(_currentElement.id, {
            ..._currentStyle,
            key: {
                ..._currentStyle.key,
                [name]: `${value}%`
            }
        }))
    }

    const changeStyleTitleFontColor = (e) => {
        const value = e.target.value
        const name = e.target.name
        setCurrentStyle({ ..._currentStyle, title: { ..._currentStyle.title, [name]: `${value}` } })
        dispatch(editStyleElement(_currentElement.id, {
            ..._currentStyle,
            title: {
                ..._currentStyle.title,
                [name]: `${value}`
            }
        }))
    }

    const changeStyleKeyFontColor = (e) => {
        const value = e.target.value
        const name = e.target.name
        setCurrentStyle({ ..._currentStyle, key: { ..._currentStyle.key, [name]: `${value}` } })
        dispatch(editStyleElement(_currentElement.id, {
            ..._currentStyle,
            key: {
                ..._currentStyle.key,
                [name]: `${value}`
            }
        }))
    }

    const openSections = (key) => {
        setOpenedSections({ ...openedSections, [key]: !openedSections[key] })
    }


    return (
        <div>
            <div className={classes.title}>
                <Typography variant='h6' className={classes.title}>
                    Variable Style
                </Typography>
            </div>
            <div
                className={classes.row}
                onClick={() => openSections('titleMargin')}
            >
                <div>
                    <Typography variant='h6' className={classes.text}>
                        Title Margin
                 </Typography>
                </div>
                {openedSections.titleMargin ?
                    <KeyboardArrowDown className={classes.iconArrow} />
                    :
                    <KeyboardArrowUp className={classes.iconArrow} />
                }
            </div>
            {openedSections.titleMargin &&
                <div className={classes.inputsContainer}>
                    <div className={classes.iconContainer}>
                        <input
                            className={classes.input}
                            type='number'
                            name='marginTop'
                            onChange={changeStyleTitle}
                            value={getStyleValueTitle('marginTop')}
                        />
                        <ArrowUpward className={classes.icon} />
                    </div>
                    <div className={classes.iconContainer}>
                        <input
                            className={classes.input}
                            type='number'
                            name='marginBottom'
                            onChange={changeStyleTitle}
                            value={getStyleValueTitle('marginBottom')}
                        />
                        <ArrowDownward className={classes.icon} />
                    </div>
                </div>
            }
            <div
                className={classes.row}
                onClick={() => openSections('titlePadding')}
            >
                <div>
                    <Typography variant='h6' className={classes.text}>
                        Title Padding
                    </Typography>
                </div>
                {openedSections.titlePadding ?
                    <KeyboardArrowDown className={classes.iconArrow} />
                    :
                    <KeyboardArrowUp className={classes.iconArrow} />
                }
            </div>
            {openedSections.titlePadding &&
                <div className={classes.inputsContainer}>
                    <div className={classes.iconContainer}>
                        <input
                            className={classes.input}
                            type='number'
                            name='paddingTop'
                            onChange={changeStyleTitle}
                            value={getStyleValueTitle('paddingTop')}
                        />
                        <ArrowUpward className={classes.icon} />
                    </div>
                    <div className={classes.iconContainer}>
                        <input
                            className={classes.input}
                            type='number'
                            name='paddingBottom'
                            onChange={changeStyleTitle}
                            value={getStyleValueTitle('paddingBottom')}
                        />
                        <ArrowDownward className={classes.icon} />
                    </div>
                    <div className={classes.iconContainer}>
                        <input
                            className={classes.input}
                            type='number'
                            name='paddingLeft'
                            onChange={changeStyleTitle}
                            value={getStyleValueTitle('paddingLeft')}
                        />
                        <ArrowBack className={classes.icon} />
                    </div>
                    <div className={classes.iconContainer}>
                        <input
                            className={classes.input}
                            type='number'
                            name='paddingRight'
                            onChange={changeStyleTitle}
                            value={getStyleValueTitle('paddingRight')}
                        />
                        <ArrowForward className={classes.icon} />
                    </div>
                </div>
            }
            <div
                className={classes.row}
                onClick={() => openSections('titleFont')}
            >
                <div>
                    <Typography variant='h6' className={classes.text}>
                        Title Font
                    </Typography>
                </div>
                {openedSections.titleFont ?
                    <KeyboardArrowDown className={classes.iconArrow} />
                    :
                    <KeyboardArrowUp className={classes.iconArrow} />
                }
            </div>
            {openedSections.titleFont &&
                <div className={classes.inputsContainer}>
                    <div className={classes.iconContainer}>
                        <input
                            className={classes.input}
                            type='number'
                            name='fontSize'
                            onChange={changeStyleTitleFontSize}
                            value={getStyleValueTitleFontSize('fontSize')}
                        />
                        <TextFields className={classes.icon} />
                    </div>
                    <div className={classes.iconContainer}>
                        <input
                            className={classes.input}
                            type='color'
                            name='color'
                            onChange={changeStyleTitleFontColor}
                            value={getStyleValueTitleFontColor('color')}
                        />
                        <TextFormat className={classes.icon} />
                    </div>
                </div>
            }
            {/* KEY */}
            <div
                className={classes.row}
                onClick={() => openSections('keyMargin')}
            >
                <div>
                    <Typography variant='h6' className={classes.text}>
                        Key Margin
                 </Typography>
                </div>
                {openedSections.keyMargin ?
                    <KeyboardArrowDown className={classes.iconArrow} />
                    :
                    <KeyboardArrowUp className={classes.iconArrow} />
                }

            </div>
            {openedSections.keyMargin &&
                <div className={classes.inputsContainer}>
                    <div className={classes.iconContainer}>
                        <input
                            className={classes.input}
                            type='number'
                            name='marginTop'
                            onChange={changeStyleKey}
                            value={getStyleValueKey('marginTop')}
                        />
                        <ArrowUpward className={classes.icon} />
                    </div>
                    <div className={classes.iconContainer}>
                        <input
                            className={classes.input}
                            type='number'
                            name='marginBottom'
                            onChange={changeStyleKey}
                            value={getStyleValueKey('marginBottom')}
                        />
                        <ArrowDownward className={classes.icon} />
                    </div>
                </div>
            }
            <div
                className={classes.row}
                onClick={() => openSections('keyPadding')}
            >
                <div>
                    <Typography variant='h6' className={classes.text}>
                        Key Padding
                 </Typography>
                </div>
                {openedSections.keyPadding ?
                    <KeyboardArrowDown className={classes.iconArrow} />
                    :
                    <KeyboardArrowUp className={classes.iconArrow} />
                }
            </div>
            {openedSections.keyPadding &&
                <div className={classes.inputsContainer}>
                    <div className={classes.iconContainer}>
                        <input
                            className={classes.input}
                            type='number'
                            name='paddingTop'
                            onChange={changeStyleKey}
                            value={getStyleValueKey('paddingTop')}
                        />
                        <ArrowUpward className={classes.icon} />
                    </div>
                    <div className={classes.iconContainer}>
                        <input
                            className={classes.input}
                            type='number'
                            name='paddingBottom'
                            onChange={changeStyleKey}
                            value={getStyleValueKey('paddingBottom')}
                        />
                        <ArrowDownward className={classes.icon} />
                    </div>
                    <div className={classes.iconContainer}>
                        <input
                            className={classes.input}
                            type='number'
                            name='paddingLeft'
                            onChange={changeStyleKey}
                            value={getStyleValueKey('paddingLeft')}
                        />
                        <ArrowBack className={classes.icon} />
                    </div>
                    <div className={classes.iconContainer}>
                        <input
                            className={classes.input}
                            type='number'
                            name='paddingRight'
                            onChange={changeStyleKey}
                            value={getStyleValueKey('paddingRight')}
                        />
                        <ArrowForward className={classes.icon} />
                    </div>
                </div>
            }
            <div
                className={classes.row}
                onClick={() => openSections('keyFont')}
            >
                <div>
                    <Typography variant='h6' className={classes.text}>
                        Key Font
                    </Typography>
                </div>
                {openedSections.keyFont ?
                    <KeyboardArrowDown className={classes.iconArrow} />
                    :
                    <KeyboardArrowUp className={classes.iconArrow} />
                }
            </div>
            {openedSections.keyFont &&
                <div className={classes.inputsContainer}>
                    <div className={classes.iconContainer}>
                        <input
                            className={classes.input}
                            type='number'
                            name='fontSize'
                            onChange={changeStyleKeyFontSize}
                            value={getStyleValueKeyFontSize('fontSize')}
                        />
                        <TextFields className={classes.icon} />
                    </div>
                    <div className={classes.iconContainer}>
                        <input
                            className={classes.input}
                            type='color'
                            name='color'
                            onChange={changeStyleKeyFontColor}
                            value={getStyleValueKeyFontColor('color')}
                        />
                        <TextFormat className={classes.icon} />
                    </div>
                </div>
            }
        </div>
    );
};

export default StyleVariable;