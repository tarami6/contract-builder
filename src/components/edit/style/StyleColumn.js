import React, { useEffect, useState } from 'react';
import BoxSize from './inputs/BoxSize'
import SaveStyle from './inputs/SaveStyle'
import TitleRow from './TitleRow'
import TitleBox from '../../common/TitleBox'
import Aligment from './inputs/Aligment'
import Border from './inputs/Border'
import useGetInputValue from '../customHooks/useGetInputValue'

const StyleColumn = () => {
    const { getStyleValue, changeStyle } = useGetInputValue()
    const [openedSections, setOpenedSections] = useState({
        margin: true,
        padding: false,
        aligment: false,
        border: false
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
            <SaveStyle />
        </div>
    );
};

export default StyleColumn;