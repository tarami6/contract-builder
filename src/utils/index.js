import {
    ELEMENTTYPE
} from "redux/config/elementSchema"

export const getStyleValue = (keyPath, elementStyle) => {
    const cssUnit = getCssUnit(keyPath)

    if (elementStyle) {
        if (elementStyle?.hasOwnProperty(keyPath)) {
            if (cssUnit) {
                const indexOfunit = elementStyle[keyPath].indexOf(cssUnit)
                return elementStyle[keyPath].substring(0, indexOfunit)
            }
            else {
                return elementStyle[keyPath]
            }
        }
    }
    return undefined
}

export const getCssUnit = (unit, currentType) => {
    if(currentType === ELEMENTTYPE.img){
        if(unit === 'width' || unit === 'height' ){
            return 'px'
        }
    }
    if(currentType === ELEMENTTYPE.devider){
        if(unit === 'height' ){
            return 'px'
        }
    }
    switch (unit) {
        case 'fontSize':
        case 'width':
        case 'height':
            return '%'
        case 'color':
        case 'alignItems':
        case 'justifyContent':
        case 'backgroundColor':
            return false
        default:
            return 'px'
    }
}

export const trasformDate = (fileDate) => {
    let date;
    date = new Date(fileDate).toUTCString();
    date = date.split(' ').slice(0, 4).join(' ');
    return date.toString()
}

export const getTextByELement = (type) => {
    switch (type) {
        case ELEMENTTYPE.rows:
            return 'Row'
        case ELEMENTTYPE.columns:
            return 'Column'
        case ELEMENTTYPE.text:
            return 'Text'
        case ELEMENTTYPE.wys:
            return 'Editor'
        case ELEMENTTYPE.variable:
            return 'Variable'
        case ELEMENTTYPE.img:
            return 'Image'
        case ELEMENTTYPE.signature:
            return 'Signaute'
        case ELEMENTTYPE.devider:
            return 'Devider'
        case ELEMENTTYPE.code:
            return 'Code'
        default: {
            console.warn('No style type')
            return <></>
        }
    }
}
