import { cdn } from 'config/cdn';
import Image from 'next/image';
import React from 'react';
import { myLoader } from '../../config/image-loader';
import classes from './WorkPartner.module.scss';

const ClientLogo:React.FC<{ imgSrc: string; alt: string; }> = (props) => {
    return (
        <div className={classes.ClientLogo}>
            <Image objectFit="contain" height={220} width={120} layout="intrinsic"  src={props.imgSrc} alt={props.alt} />
        </div>
    )
}

export default ClientLogo
