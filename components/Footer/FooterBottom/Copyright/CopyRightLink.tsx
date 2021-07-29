
import React from 'react';

const CopyRightLink = (props) => {
    return(
        <>
        <a href={props.link} title={props.title}>{props.children}</a>{props.separator}
        </>
    )
}

export default CopyRightLink;