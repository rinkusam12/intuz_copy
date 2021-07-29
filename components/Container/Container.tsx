

import React from 'react';
import classes from './styles.module.scss';
const Container: React.FC<{ className?: string; style?:React.CSSProperties; myRef?:React.LegacyRef<HTMLDivElement> }> = (props) => {
    const styleClass =  (props.className) ? props.className : '';
    return (
        <div ref={props.myRef} className={`${classes.Container} ${styleClass}`} style={props.style}>
            {props.children}
        </div>
    )
}

export default Container
