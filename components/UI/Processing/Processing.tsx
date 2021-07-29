import gsap from 'gsap';
import React, { useEffect } from 'react';
import classes from './styles.module.scss';
const Processing = () => {

    let tl = gsap.timeline({ repeat: -1 });
    let tl2 = gsap.timeline({ repeat: -1 });
    useEffect(() => {
        //animate first circle
        tl.set("#c1", { autoAlpha: .7 })
            .to("#c1", .5, { scale: .2, x: "+=5", transformOrigin: "50% 50%" })
            .to("#c1", .5, { scale: 1, x: "-=5", transformOrigin: "50% 50%" });

        //animate second circle
        tl2.set("#c2", { autoAlpha: .7 })
            .to("#c2", .5, { scale: .2, x: "-=5", transformOrigin: "50% 50%" })
            .to("#c2", .5, { scale: 1, x: "+=5", transformOrigin: "50% 50%" })

        //split loading text


    }, [])


    return (
        <div className={classes.Processing}>
            <svg viewBox="0 0 16 16" width="60px" height="30px" version="1.1"
                xmlns="http://www.w3.org/2000/svg">
                <circle id="c1" cx="8" cy="8" r="8" fill="#29B6F6" />
                <circle id="c2" cx="14" cy="8" r="8" fill="#FF4081" />
            </svg>
            <div className={classes.txtLoading}>PROCESSING</div>
        </div>
    )
}

export default Processing
