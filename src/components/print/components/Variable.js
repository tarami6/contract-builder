import React from 'react';
import { useSelector } from 'react-redux'

const Variable = ({ element }) => {
    const _data = useSelector(state => state.varJson)
    const _row = useSelector(state => state.contractDom.rows[element.rowId])
    const valueIt = () => {
        switch (element.key) {
            case 'empty':
                return <span style={{ width: '50px', height: '1px', borderBottom: '1px solid black' }} />
            default: {
                if (_row?.loop) {
                    return _data[_row?.loop][0][element.key]
                } else {
                    return _data[element.key]
                }
            }
        }
    }
   
    return (
        <div style={{ display: "flex", alignItems: "flex-end", }}>
            <p style={{ ...element.style.title }} >{element.title}</p>
            <p style={{ ...element.style.key }}>{valueIt()}</p>
        </div>
    );
};

export default Variable;