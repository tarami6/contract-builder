import React from 'react'
import useContractVirtualDom from './customeHooks/useContractVirtualDom'
import { uid } from 'uid'
import Row from './components/Row'

const ComponentToPrint = React.forwardRef((_, ref) => {
    const { rows } = useContractVirtualDom()

    return (
        <div ref={ref} style={{padding: '15px'}}>
            {rows.map((row, index) => <Row key={uid()} row={row} />)}
        </div>
    )
});


export default ComponentToPrint