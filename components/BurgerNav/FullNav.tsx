import { Menuitem } from 'components/Navigation/NavigationMenu/NavMenu'
import { BurgerContext } from 'context/burgerContext';
import gsap from 'gsap';
import Link from 'next/link'
import { useRouter } from 'next/router';
import React from 'react'
import { useContext } from 'react';
import { useEffect } from 'react';
import SVG from 'react-inlinesvg';
import classes from './styles.module.scss';
const FullNav: React.FC<{ mainLayout?: Menuitem[]; cloudLayout?: { label: string; link: string; }[] }> = (props) => {

    const router =  useRouter();
    const { show } = useContext(BurgerContext);

    let tl = React.useRef<gsap.core.Timeline>()

useEffect(() => {
    tl.current = gsap.timeline({ paused: true, delay:0.5 });
    tl.current.to('.fixnav', { scaleY: 1, ease:"power2.out", overwrite:true, })
        .from('.fixnav nav', { autoAlpha:0, ease:"power2.out", duration:0.3 })
}, [])

    useEffect(() => {
        if(show) {
            tl.current.play()
        } else {
            tl.current.reverse()

        }
    }, [show])

    return (
        <div className="fixnav bg-black-00 w-full fixed top-0 left-0 z-30 m-0 p-0" style={{ height:"101vh", transform:"scaleY(0)", transformOrigin:"top left"}}>
            <nav className="px-20 py-40 overflow-y-scroll h-full" style={{overflow:"overlay"}}>
                <ul className="list-none">
                {props.mainLayout?.map(c=>(
                    <li key={c.menu} className="text-white text-20 capitalize">
                        {c.menu}
                        <ul className="pl-12 mt-16">
                            {c.submenu.map(c=>(
                                <li key={c.label} className={`pb-11 flex items-center ${classes.item} ${c.link === router.asPath ? classes.active : ''}`}>
                                    <SVG width="45px" height="45px" src={"/static/Images/icons/menu_icon/" + c.icon} />
                                    <Link href={c.link}>
                                        <a className="ml-5 text-20">{c.label}</a>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </li>
                ))}
                {props.cloudLayout?.map(c=>(
                    <li key={c.label} className={`pb-11 flex items-center ${classes.item} ${c.link === router.asPath ? classes.active : ''}`}>
                        <Link href={c.link}>
                            <a className="ml-5 text-20">{c.label}</a>
                        </Link>
                    </li>
                ))}
                </ul>
            </nav>
                <Link href={props.mainLayout ? "/get-started" : '/contactus'}>
                <a className="text-white text-center absolute w-9/12 py-5 text-20 bottom-10 bg-brand-primary" style={{ left:"50%", transform:"translateX(-50%)" }}>{props.mainLayout ? 'Get Started' : "Contact Us"}</a>
                </Link>
        </div>
    )
}

export default FullNav
