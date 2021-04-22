import React from 'react';
import {
    ELEMENTTYPE
} from "redux/config/elementSchema"
import { useSelector } from 'react-redux'
import EditRow from './EditRow'
import EditColumn from './EditColumn'
import EditText from './EditText'
import EditImg from './EditImg'
import EditVariable from './EditVariable'
import EditSignature from './EditSignature'
import EditWys from './EditWys'
import EditDevider from './EditDevider'
import EditCode from './EditCode'

const Editor = () => {
    const { currentType } = useSelector(state => state.editable)
    const _rows = useSelector(state => state.contractDom.body.rows)
    const TopLevelEditore = () => {
        if (!_rows.length)
            return <></>
        else
            return _rows.map((bodyRowId, index) => <EditRow key={bodyRowId} bodyRowId={bodyRowId} index={index} />)
    }
    switch (currentType) {
        case ELEMENTTYPE.rows:
            return <EditRow />
        case ELEMENTTYPE.columns:
            return <EditColumn />
        case ELEMENTTYPE.text:
            return <EditText />
        case ELEMENTTYPE.wys:
            return <EditWys />
        case ELEMENTTYPE.img:
            return <EditImg />
        case ELEMENTTYPE.variable:
            return <EditVariable />
        case ELEMENTTYPE.signature:
            return <EditSignature />
        case ELEMENTTYPE.devider:
            return <EditDevider />
        case ELEMENTTYPE.code:
            return <EditCode />
        default:
            return <TopLevelEditore />
    }
};

export default Editor;