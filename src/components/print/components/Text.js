import React from 'react';

const Text = ({element}) => {
    return (
        <div >
            <p style={{fontSize: '24px'}}>{element.content}</p>
        </div>
    );
};

export default Text;