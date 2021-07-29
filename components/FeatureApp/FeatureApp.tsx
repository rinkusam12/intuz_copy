import { myLoader } from 'config/image-loader';
import gsap from 'gsap';
import Image from 'next/image';
import React, { Component } from 'react';
import LinkButton from '../UI/LinkButton/LinkButton';
import styles from './featureapp.module.scss';

interface FeatureAppProps {
    className?: string;

}

const FeatureApp: React.FC<FeatureAppProps> = (props) => {
    return (
        <div className={props.className}>
        <Image  sizes="50vw" alt="Feature Application" className="opacity-100" loader={myLoader} src={"featured-app-img1.png"} layout="responsive" width={600} height={350} />
        <LinkButton className="mt-20" variation="blackBorder" href="/work">View Case Studies</LinkButton>
        </div>
    )
}

export default FeatureApp;
 