import React from 'react';
import { useSelector } from 'react-redux'
import useGetInputValue from 'customHooks/useGetInputValue'
import TitleRow from './TitleRow'
import ChangeSize from './ChangeSize'
import ChangeBox from './ChangeBox'
import ChangeAligment from './ChangeAligment'
import ChangeBorder from './ChangeBorder'
import { ELEMENTTYPE } from 'redux/config/elementSchema'

const StyleRC = () => {
    const { getStyleValue, changeStyle } = useGetInputValue()
    const { currentType } = useSelector(state => state.editable)
    const isRow = currentType === ELEMENTTYPE.rows
   
    return (
        <div>
            <TitleRow title={'Size :'} />
            <ChangeSize
                onChange={changeStyle}
                valueWidth={getStyleValue('width')}
                valueHeight={getStyleValue('minHeight')}
            />

            <TitleRow title={'Margin :'} />
            <ChangeBox
                onChange={changeStyle}
                valueTop={getStyleValue('marginTop')}
                valueBottom={getStyleValue('marginBottom')}
                valueLeft={getStyleValue('marginLeft')}
                valueRight={getStyleValue('marginRight')}
                type={'margin'}
            />

            <TitleRow title={'Padding :'} />
            <ChangeBox
                onChange={changeStyle}
                valueTop={getStyleValue('paddingTop')}
                valueBottom={getStyleValue('paddingBottom')}
                valueLeft={getStyleValue('paddingLeft')}
                valueRight={getStyleValue('paddingRight')}
                type={'padding'}
            />

            <TitleRow title={'Aligment :'} />
            <ChangeAligment
                onChange={changeStyle}
                value={getStyleValue(isRow ? 'justifyContent' : 'alignItems')}
                selector={isRow ? 'justifyContent' : 'alignItems'}
            />

            <TitleRow title={'Border :'} />
            <ChangeBorder
                onChange={changeStyle}
                value={getStyleValue('borderWidth')}
            />
        </div>
    );
};

export default StyleRC;