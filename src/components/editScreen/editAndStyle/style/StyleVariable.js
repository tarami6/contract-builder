import React, { useState, useEffect, useCallback } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useSelector, useDispatch } from 'react-redux'
import { editStyleElement } from 'redux/actions'
import { Typography } from '@material-ui/core';
import BoxSize from './inputs/BoxSize'
import Fonts from './inputs/Fonts'
import SaveStyle from './inputs/SaveStyle'
import TitleRow from './TitleRow'

const useStyles = makeStyles((theme) => ({
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
        padding: '5px 10px',
        border: '1px solid #525661',
        display: 'flex',
        alignItems: 'center',
        paddingLeft: 30,
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
    const { currentId } = useSelector(state => state.editable)
    const _element = useSelector(state => state.contractDom.elements)
    const [_currentStyle, setCurrentStyle] = useState({})
    const [openedSections, setOpenedSections] = useState({
        titleMargin: true,
        titlePadding: false,
        titleFont: false,
        keyMargin: false,
        keyPadding: false,
        keyFont: false,
    })
    const setStyle = useCallback(() => setCurrentStyle({ ..._element[currentId].style }), [_element, currentId])
    useEffect(setStyle, [setStyle])

    const getStyleValue = (styleKey, path) => {
        const typeIndicator = getTypeIndicator(styleKey)
        if (_currentStyle) {
            if (_currentStyle[path]?.hasOwnProperty(styleKey)) {
                if (typeIndicator) {
                    const indexOfP = _currentStyle[path][styleKey].indexOf(typeIndicator)
                    return _currentStyle[path][styleKey].substring(0, indexOfP)
                }
                else {
                    return _currentStyle[path][styleKey]
                }
            }
        }
        return undefined
    }

    const getTypeIndicator = (indicator) => {
        if (indicator === 'fontSize')
            return '%'
        else if (indicator === 'color')
            return false
        return 'px'
    }

    const changeStyle = (e, path) => {
        const typeIndicator = getTypeIndicator(e.target.name)
        const value = e.target.value
        const valuBy = typeIndicator ? `${value}${typeIndicator}` : `${value}`
        const name = e.target.name
        setCurrentStyle({ ..._currentStyle, [path]: { ..._currentStyle[path], [name]: valuBy } })
        dispatch(editStyleElement(currentId, {
            ..._currentStyle,
            [path]: {
                ..._currentStyle[path],
                [name]: valuBy
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
            <TitleRow
                title={'Title Margin'}
                onClick={() => openSections('titleMargin')}
                opened={openedSections.titleMargin}
            />
            <BoxSize
                onChange={(e) => changeStyle(e, 'title')}
                valueTop={getStyleValue('marginTop', 'title')}
                valueBottom={getStyleValue('marginBottom', 'title')}
                show={openedSections.titleMargin}
            />
            <TitleRow
                title={'Title Padding'}
                onClick={() => openSections('titlePadding')}
                opened={openedSections.titlePadding}
            />
            <BoxSize
                onChange={(e) => changeStyle(e, 'title')}
                valueTop={getStyleValue('paddingTop', 'title')}
                valueBottom={getStyleValue('paddingBottom', 'title')}
                valueLeft={getStyleValue('paddingLeft', 'title')}
                valueRight={getStyleValue('paddingRight', 'title')}
                show={openedSections.titlePadding}
                side
                type={'padding'}
            />
            <TitleRow
                title={'Title Font'}
                onClick={() => openSections('titleFont')}
                opened={openedSections.titleFont}
            />
            <Fonts 
             onChange={(e) => changeStyle(e, 'title')}
             sizeValue={getStyleValue('fontSize', 'title')}
             colorValue={getStyleValue('color', 'title')}
             show={openedSections.titleFont}
            />
            {/* KEY */}
            <TitleRow
                title={'Key Margin'}
                onClick={() => openSections('keyMargin')}
                opened={openedSections.keyMargin}
            />
            <BoxSize
                onChange={(e) => changeStyle(e, 'key')}
                valueTop={getStyleValue('marginTop', 'key')}
                valueBottom={getStyleValue('marginBottom', 'key')}
                show={openedSections.keyMargin}
            />
            <TitleRow
                title={'Key Padding'}
                onClick={() => openSections('keyPadding')}
                opened={openedSections.keyPadding}
            />
             <BoxSize
                onChange={(e) => changeStyle(e, 'key')}
                valueTop={getStyleValue('paddingTop', 'key')}
                valueBottom={getStyleValue('paddingBottom', 'key')}
                valueLeft={getStyleValue('paddingLeft', 'key')}
                valueRight={getStyleValue('paddingRight', 'key')}
                show={openedSections.keyPadding}
                sides
                type={'padding'}
            />
            <TitleRow
                title={'Key Font'}
                onClick={() => openSections('keyFont')}
                opened={openedSections.keyFont}
            />
            <Fonts 
             onChange={(e) => changeStyle(e, 'key')}
             sizeValue={getStyleValue('fontSize', 'key')}
             colorValue={getStyleValue('color', 'key')}
             show={openedSections.keyFont}
            />
            <SaveStyle />
        </div>
    );
};

export default StyleVariable;