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

export const getCssUnit = (unit) => {
    if (unit === 'fontSize')
        return '%'
    else if (unit === 'color' || unit === 'alignItems')
        return false
    return 'px'
}