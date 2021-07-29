import {useEffect, useState} from 'react';

export default function windowWidth() {
    const [windowSize, setwindowSize] = useState({size : 0})
    useEffect(() => {
        setwindowSize({size: window.innerWidth})
        
    }, [])
    return windowSize.size;
}