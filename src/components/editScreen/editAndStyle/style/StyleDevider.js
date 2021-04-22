import React, { useState } from 'react';
import BoxSize from './inputs/BoxSize'
import Dimensions from './inputs/Dimensions'
import TitleRow from './TitleRow'
import TitleBox from 'components/common/TitleBox'
import useGetInputValue from '../customHooks/useGetInputValue'

const StyleDevider = () => {
    const { getStyleValue, changeStyle } = useGetInputValue()
    const [openedSections, setOpenedSections] = useState({
        margin: true,
        dimensions: false,
    })

    const openSections = (key) => {
        setOpenedSections({ ...openedSections, [key]: !openedSections[key] })
    }
    console.log('getStyleValue', getStyleValue('backgroundColor'))
    return (
        <div>
            <TitleBox title={'Devider Style'} />
            <TitleRow
                title={'Margin'}
                onClick={() => openSections('margin')}
                opened={openedSections.margin}
            />
            <BoxSize
                onChange={changeStyle}
                valueTop={getStyleValue('marginTop')}
                valueBottom={getStyleValue('marginBottom')}
                valueLeft={getStyleValue('marginLeft')}
                valueRight={getStyleValue('marginRight')}
                show={openedSections.margin}
                sides
            />
            <TitleRow
                title={'Dimensions'}
                onClick={() => openSections('dimensions')}
                opened={openedSections.dimensions}
            />
            <Dimensions
             onChange={changeStyle}
             valueWidth={getStyleValue('height')}
             valueColor={getStyleValue('backgroundColor')}
             show={openedSections.dimensions}
            />
        </div>
    );
};

export default StyleDevider;