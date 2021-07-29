import React from 'react'
import classes from './styles.module.scss'
import SVG from 'react-inlinesvg';
const SocialAddressLink = () => {
    return (
        <ul className={classes.SocialAddressLink}>
            <li 
                onClick={()=>window.open("https://twitter.com/Intuzhq")}
                className={classes.twitter}>
                    <SVG src="/static/Images/addressicons/twitter.svg" />
                </li>
            <li 
                onClick={()=>window.open("https://www.linkedin.com/company/intuz")}
                className={classes.linkedin}>
                    <SVG src="/static/Images/addressicons/linkedin.svg" />
                </li>
            <li 
                onClick={()=>window.open("https://medium.com/intuz")}
                className={classes.medium}>
                    <SVG src="/static/Images/addressicons/medium.svg" />
                </li>
            <li 
                onClick={()=>window.open("https://github.com/Intuz-production")}
                className={classes.github}>
                    <SVG src="/static/Images/addressicons/github.svg" />
                </li>
        </ul>
    )
}

export default SocialAddressLink
