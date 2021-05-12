import React, { useState, useEffect, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { editStyleElement } from 'redux/actions'
import TitleRow from './TitleRow'
import ChangeFont from './ChangeFont'
import ChangeBox from './ChangeBox'

const StyleVariable = () => {
    const dispatch = useDispatch()
    const { currentId } = useSelector(state => state.editable)
    const _element = useSelector(state => state.contractDom.elements)
    const _currentVariable = _element[currentId]
    const _hasTitle = Boolean(_currentVariable?.title?.length)
    const [_currentStyle, setCurrentStyle] = useState({})
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

    const getTypeIndicator = (indicator) => {
        if (indicator === 'fontSize')
            return '%'
        else if (indicator === 'color')
            return false
        return 'px'
    }

    return (
        <div>
            {
                _hasTitle && (
                    <>
                        <TitleRow title={'Title Margin :'} />
                        <ChangeBox
                            onChange={(e) => changeStyle(e, 'title')}
                            valueTop={getStyleValue('marginTop', 'title')}
                            valueBottom={getStyleValue('marginBottom', 'title')}
                            type={'margin'}
                        />

                        <TitleRow title={'Title Padding :'} />
                        <ChangeBox
                            onChange={(e) => changeStyle(e, 'title')}
                            valueTop={getStyleValue('paddingTop', 'title')}
                            valueBottom={getStyleValue('paddingBottom', 'title')}
                            valueLeft={getStyleValue('paddingLeft', 'title')}
                            valueRight={getStyleValue('paddingRight', 'title')}
                            type={'padding'}
                        />

                        <TitleRow title={'Title Font :'} />
                        <ChangeFont
                            onChange={(e) => changeStyle(e, 'title')}
                            sizeValue={getStyleValue('fontSize', 'title')}
                            colorValue={getStyleValue('color', 'title')}
                        />
                    </>
                )
            }
            <TitleRow title={'Variable Margin :'} />
            <ChangeBox
                onChange={(e) => changeStyle(e, 'key')}
                valueTop={getStyleValue('marginTop', 'key')}
                valueBottom={getStyleValue('marginBottom', 'key')}
                valueLeft={getStyleValue('marginLeft', 'key')}
                valueRight={getStyleValue('marginRight', 'key')}
                type={'margin'}
            />

            <TitleRow title={'TiVariabletle Padding :'} />
            <ChangeBox
                onChange={(e) => changeStyle(e, 'key')}
                valueTop={getStyleValue('paddingTop', 'key')}
                valueBottom={getStyleValue('paddingBottom', 'key')}
                valueLeft={getStyleValue('paddingLeft', 'key')}
                valueRight={getStyleValue('paddingRight', 'key')}
                type={'padding'}
            />

            <TitleRow title={'Title Font :'} />
            <ChangeFont
                onChange={(e) => changeStyle(e, 'key')}
                sizeValue={getStyleValue('fontSize', 'key')}
                colorValue={getStyleValue('color', 'key')}
            />

        </div>
    );
};

export default StyleVariable;