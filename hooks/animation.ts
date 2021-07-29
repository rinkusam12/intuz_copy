import gsap from 'gsap';
import { useEffect } from 'react';

export default function animation(abc) {
    const tl = gsap.timeline({ paused: true });
    useEffect(() => {
        abc(tl);
    }, [])
    return tl;
}