import { Menuitem } from 'components/Navigation/NavigationMenu/NavMenu';
import { BurgerContext } from 'context/burgerContext';
import gsap from 'gsap';
import React, { useEffect, useState } from 'react'
import { useContext } from 'react';
import FullNav from './FullNav';
import classes from './styles.module.scss';
const BurgerNav: React.FC<{ variant: "dark" | "light"; mainLayout?: Menuitem[]; cloudLayout?: { label: string; link: string; }[] }> = (props) => {
    const { show, setShow } = useContext(BurgerContext);
    let tl = React.useRef<gsap.core.Timeline>(null)
    useEffect(() => {
        tl.current = gsap.timeline({ paused: true });
        tl.current
            .to('.burger', { border: 0, duration: 0.1, ease: "power1.out", overwrite: true })
            .to('.second', { width: 0, duration: 0.1, ease: "power1.out", overwrite: true })
            .to('.first', { top: 16, duration: 0.1, ease: "power1.out", overwrite: true })
            .to('.third', { top: 16, duration: 0.1, ease: "power1.out", overwrite: true }, "-=0.1")
            .to('.first', { rotate: 45, duration: 0.1, ease: "power1.out" })
            .to('.third', { rotate: 135, duration: 0.1, ease: "power1.out" }, "-=0.1")
    }, [])

    useEffect(() => {
        if (show) {
            tl.current?.play()
        } else {
            tl.current?.reverse()
        }
        
    }, [show])

    return (
        <>
            <div className={`${classes.Burger} inline-flex md:hidden z-50 cursor-pointer burger  ${props.variant === 'light' ? 'border-white' : 'border-black-26'} ml-auto ${show ? classes.active : ''}`} onClick={() => {
                setShow(!show)
            }}>
                <span className={`first ${props.variant === 'light' || show  ? 'bg-white' :  'bg-black-26'}`}></span>
                <span className={`second ${props.variant === 'light' || show ? 'bg-white' : 'bg-black-26'}`}></span>
                <span className={`third ${props.variant === 'light' || show ? 'bg-white' : 'bg-black-26'}`}></span>
            </div>
            <FullNav mainLayout={props.mainLayout} cloudLayout={props.cloudLayout} />
        </>
    )
}

export default BurgerNav
