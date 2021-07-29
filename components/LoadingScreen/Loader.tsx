import React from 'react'
import classes from './styles.module.scss'
const Loader = () => {
    return (
        <div className={classes.Ring}>
            <div></div><div></div><div></div><div></div>
        </div>
    )
}

export default Loader
