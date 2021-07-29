import Container from 'components/Container/Container';
import gsap from 'gsap';
import React from 'react'
import { Transition } from 'react-transition-group';
import { Menuitem } from './NavMenu';
import SVG from 'react-inlinesvg';
import classes from './styles.module.scss';
const NavBar: React.FC<{ show?: boolean; onMouseEnter?:()=>void; onMouseExit?:()=>void; subLinks: Menuitem['submenu'] }> = (props) => {
    let paddingClass = props.show ? "py-3 px-8" : ''
    return (
        <Transition<undefined> in={props.show} addEndListener={(node, done) => {
            node.addEventListener('transitionend', done, false)
        }} onEntering={(n) => {
            gsap.fromTo(n, { height: 0 }, { height: "auto", ease: "power1.ease" });
        }} onExit={(n) => {
            gsap.fromTo(n, { height: 100 }, { height: 0, ease: "power1.ease" });

        }}>
            <div onMouseEnter={props.onMouseEnter} onMouseLeave={props.onMouseExit} className={"fixed bg-header bg-opacity-70 w-full " + paddingClass} style={{ top: "8.5rem", left: "0", overflow:"hidden" }}>
                <Container className="flex items-center justify-center">
                {props.subLinks?.map(c=>(
                    <a key={c.link} className={`text-center block ${classes.link} px-20`} href={c.link} style={{textDecoration:"none"}}>
                        <SVG className="block mx-auto" width="35px" height="35px" src={"/static/Images/icons/menu_icon/" + c.icon} />
                        <span className="capitalize mt-3 mb-3 text-2xl inline-block">{c.label}</span>
                    </a>
                ))}
                </Container>
            </div>
        </Transition>

    )
}

export default NavBar
