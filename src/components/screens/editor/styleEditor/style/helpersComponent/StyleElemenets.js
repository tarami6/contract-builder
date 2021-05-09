import React from 'react';
import { useSelector } from 'react-redux'
import { ELEMENTTYPE } from 'redux/config/elementSchema'
import useGetInputValue from 'customHooks/useGetInputValue'
import TitleRow from './TitleRow'
import ChangeBox from './ChangeBox'
import ChangeFont from './ChangeFont'
import ChangeImgSize from './ChangeImgSize'
import ChnageDeviderBorder from './ChnageDeviderBorder'

const StyleElemenets = () => {
    const { getStyleValue, changeStyle } = useGetInputValue()
    const { currentType } = useSelector(state => state.editable)
    const isText = currentType === ELEMENTTYPE.text
    const isEditor = currentType === ELEMENTTYPE.wys
    const isVariable = currentType === ELEMENTTYPE.variable
    const isImg = currentType === ELEMENTTYPE.img
    const isSignature = currentType === ELEMENTTYPE.signature
    const isDevider = currentType === ELEMENTTYPE.devider
    const isCode = currentType === ELEMENTTYPE.code
    const isTable = currentType === ELEMENTTYPE.table

    return (
        <div>
            {
                isImg && (
                    <>
                        <TitleRow title={'Size :'} />
                        <ChangeImgSize
                            onChange={changeStyle}
                            width={getStyleValue('width')}
                            height={getStyleValue('height')}
                        />
                    </>
                )
            }
            <TitleRow title={'Margin :'} />
            <ChangeBox
                onChange={changeStyle}
                valueTop={getStyleValue('marginTop')}
                valueBottom={getStyleValue('marginBottom')}
                valueLeft={getStyleValue('marginLeft')}
                valueRight={getStyleValue('marginRight')}
                type={'margin'}
            />
            {
                isDevider && (
                    <>
                        <TitleRow title={'Custom :'} />
                        <ChnageDeviderBorder
                            onChange={changeStyle}
                            valueWidth={getStyleValue('height')}
                            valueColor={getStyleValue('backgroundColor')}
                        />
                    </>
                )
            }
            { !isDevider && (
                <>
                    <TitleRow title={'Padding :'} />
                    <ChangeBox
                        onChange={changeStyle}
                        valueTop={getStyleValue('paddingTop')}
                        valueBottom={getStyleValue('paddingBottom')}
                        valueLeft={getStyleValue('paddingLeft')}
                        valueRight={getStyleValue('paddingRight')}
                        type={'padding'}
                    />
                </>
            )
            }
            {
                isText &&
                (
                    <>
                        <TitleRow title={'Font :'} />
                        <ChangeFont
                            onChange={changeStyle}
                            sizeValue={getStyleValue('fontSize')}
                            colorValue={getStyleValue('color')}
                        />
                    </>
                )
            }
        </div>
    );
};

export default StyleElemenets;