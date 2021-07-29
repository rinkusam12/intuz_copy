import React from 'react';
import classes from './heading.module.scss';

const SecondaryHeading = (props) => {
    // const fontStyle = { fontSize: (props.fontSize) ? props.fontSize : '2.8rem' }
    const color = {color: (props.color) ? props.color : '#6b6b6b' }
    return (
    <>
        <p className={`${classes.subtitle} ${props.className} ${classes[props.variation]}`} style={{ ...color, fontFamily:props.font==="s" ? "Quicksand" : "Open Sans", ...props.style}}
        dangerouslySetInnerHTML={{__html:props.children}}>
        </p>
            <style jsx>
                {`
                    .${classes.subtitle}{
                        font-size: ${props.fontSize ? props.fontSize : '2.8rem' };
                    }
                `}
            </style>
    </>
    )
}

export default SecondaryHeading
