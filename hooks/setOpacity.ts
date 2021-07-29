import { useEffect } from "react";
import gsap from "gsap";

export default function setOpacity(q) {
    useEffect(() => {
        gsap.set(q, { opacity:0 });
    }, [])
}