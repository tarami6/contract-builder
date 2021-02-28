import React from 'react';

const WysText = ({element}) => {
    return (
            <div style={{...element.style}} dangerouslySetInnerHTML={{ __html: element?.content }}></div>
    );
};

export default WysText;