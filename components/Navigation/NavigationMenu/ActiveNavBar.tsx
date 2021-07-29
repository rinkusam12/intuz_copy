import Container from 'components/Container/Container';
import React from 'react';
import { Menuitem } from './NavMenu';
import classes from './styles.module.scss';
const ActiveNavBar: React.FC<{ show?: boolean; onMouseEnter?:()=>void; onMouseExit?:()=>void; subLinks: Menuitem['submenu'] }> = (props) => {
    return (
            <div className={"hidden fixed bg-header bg-opacity-70 w-full md:block py-3 px-8"} style={{ top: "8.5rem", left: "0", overflow:"hidden" }}>
                <Container className="flex items-center justify-center">
                {props.subLinks?.map(c=>(
                    <a key={c.link} className={`text-center block ${classes.link} px-20`} href={c.link} style={{textDecoration:"none"}}>
                        <span className="capitalize mt-3 mb-3 text-2xl inline-block">{c.label}</span>
                    </a>
                ))}
                </Container>
            </div>
    )
}

export default ActiveNavBar
