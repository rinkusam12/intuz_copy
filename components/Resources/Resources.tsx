import React from 'react';
import Resource from './Resource';

const Resources = (props) => {

    let r = React.useRef();

    return (
        <>

            <div className={`grid grid-cols-1 md:grid-cols-3 gap-9`} style={{ marginTop: '5rem' }}>
                {props.sectionresources.map(sr => {
                    let data = { myref: r, link: sr.link, imgSrc: sr.image.name, alt: sr.title, caption: sr.title }
                    return (
                         <Resource key={sr.title} {...data} />
                    )
                })}
            </div>
        </>
    )
}

export default Resources
