import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { editStyleRow, editStyleColumn, editStyleElement, setTempStyle } from 'redux/actions'
import {
    ELEMENTTYPE
} from "redux/config/elementSchema"
import { getCssUnit } from 'utils'

const definePath = (state, currentType) => {
    switch (currentType) {
        case ELEMENTTYPE.columns:
        case ELEMENTTYPE.rows:
            return state.contractDom[currentType]

        case ELEMENTTYPE.text:
        case ELEMENTTYPE.wys:
        case ELEMENTTYPE.img:
        case ELEMENTTYPE.signature:
        case ELEMENTTYPE.variable:
        case ELEMENTTYPE.devider:
            return state.contractDom.elements

        default:
            return undefined
    }
}

const useGetInputValue = () => {
    const dispatch = useDispatch()
    const { currentId, currentType, tempStyle } = useSelector(state => state.editable)
    const _elements = useSelector(state => definePath(state, currentType))
    const [_currentStyle, setCurrentStyle] = useState({})
    const [hasStyle, setHasStyle] = useState(tempStyle.type === currentType)

    useEffect(() => {
        _elements && setCurrentStyle({ ..._elements[currentId]?.style })
    }, [currentType, _elements, currentId])

    useEffect(() => {
        setHasStyle(tempStyle.type === currentType)
    }, [tempStyle.type, currentType])


    const changeStyle = (e) => {
        const typeIndicator = getCssUnit(e.target.name, currentType)
        const value = e.target.value
        const valuBy = typeIndicator ? `${value}${typeIndicator}` : `${value}`
        const name = e.target.name
        setCurrentStyle({ ..._currentStyle, [name]: valuBy })
        dispatchStyle({ [name]: valuBy })
    }

    const dispatchStyle = (style) => {
        switch (currentType) {
            case ELEMENTTYPE.rows: {
                return dispatch(editStyleRow(currentId, style))
            }

            case ELEMENTTYPE.columns: {
                return dispatch(editStyleColumn(currentId, style))
            }

            case ELEMENTTYPE.text:
            case ELEMENTTYPE.wys:
            case ELEMENTTYPE.img:
            case ELEMENTTYPE.signature:
            case ELEMENTTYPE.variable:
            case ELEMENTTYPE.devider: {
                return dispatch(editStyleElement(currentId, style))
            }

            default:
                break
        }
    }

    const getStyleValue = (keyPath) => {
        const cssUnit = getCssUnit(keyPath, currentType)

        if (_currentStyle) {
            if (_currentStyle?.hasOwnProperty(keyPath)) {
                if (cssUnit) {
                    const indexOfunit = _currentStyle[keyPath].indexOf(cssUnit)
                    return _currentStyle[keyPath].substring(0, indexOfunit)
                }
                else {
                    return _currentStyle[keyPath]
                }
            }
        }
        return undefined
    }

    const saveStyle = () => {
        const style = { ..._currentStyle }
        dispatch(setTempStyle(currentType, style))
    }

    const getStyle = () => {
        if (hasStyle) {
            setCurrentStyle({ ...tempStyle.style })
            dispatchStyle({ ...tempStyle.style })
        }
    }

    return { getStyleValue, changeStyle, saveStyle, getStyle, hasStyle }
}

export default useGetInputValue;