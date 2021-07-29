


import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { myLoader } from '../../config/image-loader';
import classes from './styles.module.scss';

const MoreGuideDesign = (props) => {
    const ParentPage = (props.link.indexOf('/blog') !== -1 ? '/blog/[name]' : '/[guides]')
    return (
        <Link href={ParentPage} as={props.link} prefetch={false}>
            <a className={classes.MoreGuide} ref={props.myRef} aria-label={props.alt}>
                <figure className='opacity-100' onClick={props.onClick}>
                    {/*<LazyLoad height={300} offset={300}>
                        <img src={`${props.imgSrc}?fm=pjpg&auto=format,compress`} alt={props.alt} />
    </LazyLoad> */}

                    <Image layout="fill" alt={props.caption} src={props.imgSrc.split("https://intuz-site.imgix.net/uploads/")[1]} width={70} height={60} />

                    <figcaption>{props.caption}</figcaption>
                </figure>
            </a>
        </Link>
    )
}

export default MoreGuideDesign


