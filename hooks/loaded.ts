import { useEffect, useState } from 'react';


export default function loaded() {
    const [loaded, setLoaded] = useState(false);
    useEffect(() => {
      let t = setTimeout(() => {
        setLoaded(true)
        }, 1000);
      return () => {
       clearTimeout(t);
      };
    }, [])
  return loaded;
}