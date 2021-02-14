import React from "react";
import Row from '../elements/Row'
import { useSelector } from 'react-redux'

const RenderRow = () => {
    const rows = useSelector(state => state.contractDom?.body?.rows)
    console.log('rows', rows)
    if (!rows || !rows?.length )
        return <></>
    return rows?.map((rowId, index) => <Row key={rowId} index={index} rowId={rowId} /> )
}


export default RenderRow
