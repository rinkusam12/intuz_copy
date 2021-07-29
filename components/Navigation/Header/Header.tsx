import BurgerNav from 'components/BurgerNav/BurgerNav';
import Container from 'components/Container/Container'
import { Menuitem } from 'components/Layout/items';
import Link from 'next/link';
import React, { useEffect } from 'react'
import Logo from '../Logo'
import NavMenu from '../NavigationMenu/NavMenu';

const Header: React.FC<{disableTransparency?: boolean}> = (props) => {
    const ref = React.useRef<HTMLElement>();

    useEffect(() => {
        if(!props.disableTransparency) {
            document.addEventListener("scroll",checkClass)
        }
        return () => {
            document.removeEventListener("scroll",checkClass)
        }
    }, [props.disableTransparency]);

    const checkClass = () => {
        if(!props.disableTransparency) {
            if(window.pageYOffset > 20) {
                ref.current.classList.replace("bg-opacity-0", "bg-opacity-90")
                // ref.current.classList.add()
            } else if(window.pageYOffset < 20) {
                ref.current.classList.replace("bg-opacity-90", "bg-opacity-0")
            }
        }
    }

    return (
        <header ref={ref} className="fixed top-0 left-0 py-9 w-full bg-header bg-opacity-0 z-50" style={{transition:"all 0.5s ease"}}>
            <Container className="flex items-center">
                <Link href="/">
                <a className="z-50">
                    <Logo width="120px" />
                </a>
                </Link>
                <BurgerNav variant="light" mainLayout={Menuitem} />
                <NavMenu menuList={Menuitem} />
            </Container>
        </header>
    )
}

export default Header
