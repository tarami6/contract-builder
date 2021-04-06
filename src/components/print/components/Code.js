import React from 'react';

const Code = ({element}) => {
    return (
            <div style={{...element.style}} dangerouslySetInnerHTML={{ __html: element?.html }}></div>
    );
};

export default Code;