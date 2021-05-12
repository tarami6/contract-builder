import React from 'react'
import useContractVirtualDom from './customeHooks/useContractVirtualDom'
import { uid } from 'uid'
import Row from './components/Row'

const ComponentToHtml = () => {
    const { rows } = useContractVirtualDom()
 
    return (
        <div style={{padding: '15px'}}>
            {rows.map(row => <Row key={uid()}  row={row} />)}
        </div>
    )
};

export default ComponentToHtml;