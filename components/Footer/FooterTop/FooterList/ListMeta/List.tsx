import Link from 'next/link';
import React from 'react';
const List = (props) => {
    return (
       <>
            {props.list.map((item,i) => (
                <li className="py-3" key={i}>
                   <Link href={item.link}>
                        <a className="text-2xl text-[#2e3b48] hover:text-brand-secondary" style={{transition:"color 0.3s ease"}}>{item.title}</a>
                    </Link>
                </li>
            ))}
       </>
    )
}

export default List;