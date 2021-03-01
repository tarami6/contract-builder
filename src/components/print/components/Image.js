import React from "react";

const Image = ({element}) => {
    return <img style={{...element.style}} src={element.src}
                alt="Logo"/>;
}
export default Image
