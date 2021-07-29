import Link from 'next/link';
import React from 'react';
import Styles from './footerbottom.module.module.scss';
import SocialAddressLink from 'components/SocialAddressLink/SocialAddressLink';

const FooterBottom = () => {
    return(
        <div className={Styles.CopyrightBlock}>
            <SocialAddressLink/>
            <div className="mb-2">
                &copy;&nbsp;
               <Link href="/">
                   
                        <a title = "Intuz">Intuz </a> 
                   
               </Link>
                         |  
               
               <Link href="/privacy-policy">
                   
                    <a title = "Privacy"> Privacy </a> 
                    
               </Link>
                     |  
                <Link href="/sitemap">
                    <a title="Sitemap"> Sitemap</a>
                </Link>
            </div>
            <div className="mb-2">
                <span>All trademarks, images and logos are the property of their respective owners.</span>
            </div>
            <div>
            {/* <a href="//www.dmca.com/Protection/Status.aspx?ID=9bb9378b-0402-4adf-b03b-7217bb907077" title="DMCA.com Protection Status" className="dmca-badge"> <img className="lazyload" src ="https://images.dmca.com/Badges/dmca_protected_sml_120n.png?ID=9bb9378b-0402-4adf-b03b-7217bb907077"  alt="DMCA.com Protection Status" /></a>  <script src="https://images.dmca.com/Badges/DMCABadgeHelper.min.js"> </script> */}
            </div>
        </div>
    )
}
export default FooterBottom;