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
    if(currentType === 'img'){
        if(unit === 'width' || unit === 'height' ){
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