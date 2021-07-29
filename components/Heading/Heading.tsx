import React from 'react';
import classes from './heading.module.scss';
const PrimaryHeading = (props) => {
    return (
        <h2 className={`${classes.title} ${props.className}`} style={{fontFamily:props.font === "s" ? "Quicksand" : "Open Sans", ...props.style}}>
            {props.children}
        </h2>
        )
}

export default PrimaryHeading
