import gsap from "gsap";
import { useEffect } from "react";

export function scrollAnimation(triggerEl, cb) {
    useEffect(() => {
        let tl = gsap.timeline({ 
            scrollTrigger:{
                trigger:triggerEl,
                start:"top center"
            }
        });
        cb(tl);
    }, [])
}