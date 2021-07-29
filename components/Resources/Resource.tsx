import { myLoader } from 'config/image-loader';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
const Resource = (props) => {
    return (
        <Link href={"/" + props.link}>
            <a className={"text-16 leading-normal text-center"} style={{color:"#060f19"}} ref={props.myRef} aria-label={props.alt}>
                <figure onClick={props.onClick}>
                    <div className="shadow-2xl">
                        <Image sizes="50vw" alt={props.caption} className="rounded-lg" src={props.imgSrc} layout="responsive" width={600} height={350} />
                    </div>
                    <figcaption className="pt-8 mx-3">{props.caption}</figcaption>
                </figure>
            </a>
        </Link>
    )
}

export default Resource


