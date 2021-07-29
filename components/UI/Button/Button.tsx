import React from 'react'
import classes from './styles.module.scss'
const Button = (props) => {
    let variation = props.variation
    return (
        <button type={props.type}
                className={`${classes.Button}
                ${classes[variation]}`}>
                {props.children}
        </button>
    )
}

export default Button
