import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { editStyleRow, editStyleColumn, editStyleElement } from '../../../redux/actions/actionsEditable'
import {
    ELEMENTTYPE
} from "../../../redux/config/elementSchema"
import { getCssUnit } from '../style/Utils'

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
            return state.contractDom.elements

        default:
            return undefined
    }
}

const useGetInputValue = () => {
    const dispatch = useDispatch()
    const { currentId, currentType } = useSelector(state => state.editable)
    const _elements = useSelector(state => definePath(state, currentType))
    const [_currentStyle, setCurrentStyle] = useState({})

    useEffect(() => {
        _elements && setCurrentStyle({ ..._elements[currentId].style })
    }, [currentType, _elements, currentId])

    const changeStyle = (e) => {
        const typeIndicator = getCssUnit(e.target.name)
        const value = e.target.value
        const valuBy = typeIndicator ? `${value}${typeIndicator}` : `${value}`
        const name = e.target.name
        switch (currentType) {
            case ELEMENTTYPE.rows: {
                setCurrentStyle({ ..._currentStyle, [name]: valuBy })
                return dispatch(editStyleRow(currentId, { [name]: valuBy }))
            }

            case ELEMENTTYPE.columns: {
                setCurrentStyle({ ..._currentStyle, [name]: valuBy })
                return dispatch(editStyleColumn(currentId, { [name]: valuBy }))
            }

            case ELEMENTTYPE.text:
            case ELEMENTTYPE.wys:
            case ELEMENTTYPE.img:
            case ELEMENTTYPE.signature:
            case ELEMENTTYPE.variable: {
                setCurrentStyle({ ..._currentStyle, [name]: valuBy })
                return dispatch(editStyleElement(currentId, { [name]: valuBy }))
            }

            default:
                break
        }
    }

    const getStyleValue = (keyPath) => {
        const cssUnit = getCssUnit(keyPath)

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

    return [getStyleValue, changeStyle]
}

export default useGetInputValue;