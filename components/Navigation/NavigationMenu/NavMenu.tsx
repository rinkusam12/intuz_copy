import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { useState } from 'react'
import { useEffect } from 'react'
import ActiveNavBar from './ActiveNavBar'
import NavBar from './NavBar'
export interface Menuitem {
    menu: string;
    submenu: {
        label: string;
        link: string;
        icon: string;
    }[];
}
const NavMenu: React.FC<{ menuList:Menuitem[] }> = (props) => {
    const router = useRouter();
    const [activeHoverIndex, setActiveIndex] = useState<number>(null)
    const [insideBar, setInsideBar] = useState<boolean>(false)
    const [outsideLink, setOutsideLink] = useState<boolean>(false);

    const [activeMenu, setActiveMenu] = useState<Menuitem>(null);

    useEffect(() => {
        if(!insideBar && outsideLink) {
            setActiveIndex(null);
        }
        
    }, [insideBar, outsideLink])

    useEffect(() => {
        let currentRoute = router.asPath
        let m = props.menuList.find(c=>{
            return c.submenu.findIndex(c=>c.link === currentRoute) !== -1;
        });
        if(m) {
            setActiveMenu(m);
        } else{
            setActiveMenu(null)
        }
    }, [router.asPath])

    return (
        <>
        <ul className="hidden list-none md:flex ml-auto justify-between w-7/12 items-center">
            {props.menuList.map((c,i)=>(
                <li key={c.menu} className={`text-white capitalize text-2xl cursor-pointer ${c.menu === activeMenu?.menu ? 'font-bold opacity-70' : ''}`} onMouseEnter={()=>{
                    if(c.menu === activeMenu?.menu) {
                        setActiveIndex(null)
                    } else{
                        setActiveIndex(i)

                    }
                }} onMouseOut={()=>{
                    setOutsideLink(true)
                }}>{c.menu}</li>
            ))}
            <li>
                <Link href="/get-started">
                    <a className="bg-brand-primary text-white py-3 px-3 text-2xl hover:bg-brand-secondary no-underline uppercase rounded-md" style={{textDecoration:"none", transition:"all 0.3s ease"}}>Get Started</a>
                </Link>
            </li>
        </ul>
        <NavBar subLinks={props?.menuList[activeHoverIndex]?.submenu} onMouseEnter={()=>{
            setInsideBar(true)
        }} onMouseExit={()=>{
            setInsideBar(false)
        }} show={activeHoverIndex !== null} />
       {!activeHoverIndex && !!activeMenu && <ActiveNavBar subLinks={activeMenu.submenu} />}
        </>
    )
}

export default NavMenu
