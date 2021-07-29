import React from 'react';
import classes from './heading.module.scss';
const PrimaryHeading = (props) => {
    return (
        <h1 className={`${classes.title} ${props.className}`} style={{fontFamily:props.font === "s" ? "Quicksand" : "Open Sans", ...props.style}}>
            {props.children}
        </h1>
        )
}

export default PrimaryHeading
