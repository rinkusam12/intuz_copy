import gsap from 'gsap';
import ScrollToPlugin from 'gsap/dist/ScrollToPlugin';
import React, { useEffect } from 'react';
import classes from './styles.module.scss';

gsap.registerPlugin(ScrollToPlugin);

const ScrollToTopButton = () => {

    let r = React.useRef<HTMLDivElement>();

    function visible() {
        if (document.body.scrollTop > 1000 || document.documentElement.scrollTop > 1000) {
            r.current.style.display = "block";
        } else {
            r.current.style.display = "none";
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', visible, false)
        return () => {
            window.removeEventListener('scroll', visible, false)
        }
    }, [])

    function scroll() {
        gsap.to(window, 1, { scrollTo: { y: 0, autoKill: false }, ease: "power1.easeOut" });
    }

    return (
        <div className={classes.ScrollButton} onClick={scroll} ref={r}>

            <svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><g>
                <path d="M507.333,424.604h-0.01c-34.073-69.917-91.188-169.063-141.594-256.521c-26.396-45.833-51.323-89.104-69.344-121.979
			c-8.5-15.521-23.604-24.771-40.396-24.771c-16.792,0-31.896,9.25-40.396,24.771c-18.01,32.875-42.917,76.104-69.292,121.896
			C95.885,255.5,38.76,354.667,4.667,424.604C1.573,430.979,0,437.708,0,444.604C0,470,20.51,490.667,45.729,490.667L256,490.625
			l210.271,0.042C491.49,490.667,512,470,512,444.604C512,437.708,510.427,430.979,507.333,424.604z"/>
            </g></svg>

        </div>
    )
}

export default ScrollToTopButton
