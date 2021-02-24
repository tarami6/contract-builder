import React from 'react';
import {
    ELEMENTTYPE
} from "../../../redux/config/elementSchema"
import { useSelector } from 'react-redux'
import EditRow from './EditRow'
import EditColumn from './EditColumn'
import EditText from './EditText'
import EditImg from './EditImg'
import EditVariable from './EditVariable'
import EditSignature from './EditSignature'

const Editor = () => {
    const { currentType } = useSelector(state => state.editable)
    const _rows = useSelector(state => state.contractDom.body.rows)
    const TopLevelEditore = () => {
        if (!_rows.length)
            return <></>
        else
            return _rows.map(bodyRowId => <EditRow key={bodyRowId} bodyRowId={bodyRowId} />)
    }
    switch (currentType) {
        case ELEMENTTYPE.row:
            return <EditRow />
        case ELEMENTTYPE.column:
            return <EditColumn />
        case ELEMENTTYPE.text:
            return <EditText />
        case ELEMENTTYPE.img:
            return <EditImg />
        case ELEMENTTYPE.variable:
            return <EditVariable />
        case ELEMENTTYPE.signature:
            return <EditSignature />
        default:
            return <TopLevelEditore />
    }
};

export default Editor;