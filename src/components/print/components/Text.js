import React from 'react';

const Text = ({element}) => {
    return (
        <div >
            <p style={{...element.style}}>{element.content}</p>
        </div>
    );
};

export default Text;