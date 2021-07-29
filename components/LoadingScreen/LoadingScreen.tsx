import React, { useEffect } from 'react';
import classes from './styles.module.scss';
import Loader from './Loader';
const LoadingScreen = (props) => {
    let r = React.useRef();
    useEffect(() => {
    }, [])

    return (
        <div className={classes.LoadingScreen} ref={props.myRef}>
            <Loader/>
        </div>
    )
}

export default LoadingScreen