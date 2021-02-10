import React, { useRef } from 'react'
import ReactToPrint from 'react-to-print';

import ComponentToPrint from './ComponentToPrint'

const ButtonToPrint = () => {
    const componentRef = useRef();
    return (
        <div>
            <ReactToPrint
                trigger={() => <button>Print this out!</button>}
                content={() => componentRef.current}
            />
            <div style={{ display: "none" }}>
            <ComponentToPrint ref={componentRef} />
            </div>
            
        </div>
    )
}

export default ButtonToPrint