import { myLoader } from 'config/image-loader'
import Image from 'next/image'
import React from 'react'
import classes from './styles.module.scss'
const PrivacyStrip = (props) => {
    return (
        <div className={classes.Cookie}>
            <p className="flex items-center text-justify">
            We use cookies to provide and improve our services. By using our site, you consent to cookies. 
            <a href="/privacy-policy" className="whitespace-nowrap px-3">Know More</a>
            <button className="mx-3" onClick={props.onAccept}><Image layout="fixed" width={20} height={20} src="close-popup.png" alt="Close Popup"/></button>
            </p>
        </div>
    )
}

export default PrivacyStrip
