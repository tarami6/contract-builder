import React, { useState } from 'react';
import TitleRow from 'components/common/TitleRow'
import TitleBox from 'components/common/TitleBox'
import useGetInputValue from 'customHooks/useGetInputValue'
import { BoxSize, SaveStyle, Aligment, Border, WidthHeight, } from './inputs'

const StyleColumn = () => {
    const { getStyleValue, changeStyle } = useGetInputValue()
    const [openedSections, setOpenedSections] = useState({
        margin: true,
        padding: false,
        aligment: false,
        border: false,
        size: false
    })

    const openSections = (key) => {
        setOpenedSections({ ...openedSections, [key]: !openedSections[key] })
    }

    return (
        <div>
            <TitleBox title={'Column Style'} />
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
                show={openedSections.padding}
                sides
                type={'padding'}
            />
            <TitleRow
                title={'Aligment'}
                onClick={() => openSections('aligment')}
                opened={openedSections.aligment}
            />
            <Aligment
                onChange={changeStyle}
                value={getStyleValue('alignItems')}
                show={openedSections.aligment}
                selector={'alignItems'}
            />
            <TitleRow
                title={'Border'}
                onClick={() => openSections('border')}
                opened={openedSections.border}
            />
            <Border
                onChange={changeStyle}
                value={getStyleValue('borderWidth')}
                show={openedSections.border}
            />
            <TitleRow
                title={'Size'}
                onClick={() => openSections('size')}
                opened={openedSections.border}
            />
            <WidthHeight
                onChange={changeStyle}
                valueWidth={getStyleValue('minHeight')}
                valueHeight={getStyleValue('width')}
                show={openedSections.size}
            />
            <SaveStyle />
        </div>
    );
};

export default StyleColumn;