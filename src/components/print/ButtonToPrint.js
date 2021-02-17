import React, { useRef } from 'react'
import ReactToPrint from 'react-to-print';
import ComponentToPrint from './ComponentToPrint'
import { Button } from 'react-bootstrap'
import { Eye } from 'react-bootstrap-icons'

const ButtonToPrint = () => {
    const componentRef = useRef();
    return (
        <div>
            <ReactToPrint
                trigger={() => <Button type='button' variant="outline-secondary" ><Eye /> Print Preview</Button>}
                content={() => componentRef.current}
            />
            <div style={{ display: "none" }}>
                <ComponentToPrint ref={componentRef} />
            </div>
        </div>
    )
}

export default ButtonToPrint