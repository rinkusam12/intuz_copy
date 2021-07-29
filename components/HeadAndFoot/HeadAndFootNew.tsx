import Head from 'next/head';
import React from 'react';
import ReactHtmlParser from 'html-react-parser';
// import Scripttags from '../scripttags/scripttags';
export const HeadAndFootNew: React.FC<{data:any, customScript?: string }> = ({ data, customScript, children }) => {
    
    return (
    <div id="root" style={{overflowX:"hidden"}}>
         <Head>
            {data.mainmeta.length > 0 ? <title>{data.mainmeta[0].title}</title> : '' }
            {data.mainmeta.length > 0 ? data.mainmeta[0].description && <meta name="description" content={data.mainmeta[0].description} /> : '' }
             {/* {data.mainmeta.length > 0 ?ReactHtmlParser(`${data.mainmeta[0].meta_tags}`) : ''} */}
             <meta name="google-site-verification" content="yDWmduv9hiGVPQRgywDOKkuy8yrbDIfPB4pbRxOQT_Y" />
<meta name="ahrefs-site-verification" content="d1ba74316bb0a450053cd269f808c79ba036675cd5a0bffd480b3437dd71bf44" />
            {/* {data.pages.length > 0 ? ReactHtmlParser(data.pages[0].meta_tags) : ''} */}
            {data.mainmeta.length > 0 ? (data.mainmeta[0].no_index ? <meta name="ROBOTS" content="NOINDEX, NOFOLLOW"/> : '') : '' }
        </Head>
        {children}
        {/* <div id="GlobalSchema" dangerouslySetInnerHTML={{__html:data.pages[0].script_footer}}>
        </div> */}
        {/* <Scripttags footertags={data.pages[0].after_load_scripts}  customtags={data.mainmeta.length > 0 ?  data.mainmeta[0].script_footer : ''}  customScript={customScript}/> */}
    </div>
    )
}

export default HeadAndFootNew;