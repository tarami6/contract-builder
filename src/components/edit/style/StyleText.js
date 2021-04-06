import React, { useState } from 'react';
import BoxSize from './inputs/BoxSize'
import Fonts from './inputs/Fonts'
import SaveStyle from './inputs/SaveStyle'
import TitleRow from './TitleRow'
import TitleBox from '../../common/TitleBox'
import useGetInputValue from '../customHooks/useGetInputValue'

const StyleText = () => {
    const { getStyleValue, changeStyle } = useGetInputValue()
    const [openedSections, setOpenedSections] = useState({
        margin: true,
        padding: false,
        font: false
    })

    const openSections = (key) => {
        setOpenedSections({ ...openedSections, [key]: !openedSections[key] })
    }

    return (
        <div>
            <TitleBox title='Text Style' />
            <TitleRow
                title={'Margin'}
                onClick={() => openSections('margin')}
                opened={openedSections.margin}
            />
            <BoxSize
                onChange={changeStyle}
                valueTop={getStyleValue('marginTop')}
                valueBottom={getStyleValue('marginBottom')}
                show={openedSections.margin}
            />
            <TitleRow
                title={'Padding'}
                onClick={() => openSections('padding')}
                opened={openedSections.padding}
            />
            <BoxSize
                onChange={changeStyle}
                valueTop={getStyleValue('paddingTop')}
                valueBottom={getStyleValue('paddingBottom')}
                valueLeft={getStyleValue('paddingLeft')}
                valueRight={getStyleValue('paddingRight')}
                sides
                show={openedSections.padding}
                type={'padding'}
            />
            <TitleRow
                title={'Font'}
                onClick={() => openSections('font')}
                opened={openedSections.font}
            />
            <Fonts
                onChange={changeStyle}
                sizeValue={getStyleValue('fontSize')}
                colorValue={getStyleValue('color')}
                show={openedSections.font}
            />
            <SaveStyle />
        </div>
    );
};

export default StyleText;