import React from 'react';

const Signature = ({element}) => {
    return (
        <div style={{
            padding: '3px',
            width: 'fit-content',
            marginTop: element.style.marginTop,
            marginBottom: element.style.marginBottom,
            marginLeft: element.style.marginLeft,
            marginRight: element.style.marginRight,
            paddingTop: element.style.paddingTop,
            paddingBottom: element.style.paddingBottom,
            paddingLeft: element.style.paddingLeft,
            paddingRight: element.style.paddingRight,
        }}>
            <p style={{fontSize: '150%'}}>Signature</p>
            <div style={{ width: '160px', height: '80px', border: '1px solid' }} />
        </div>
    );
};

export default Signature;