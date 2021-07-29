import React from 'react';
import { cdn } from '../../config/cdn';
import ClientLogo from './ClientLogo';

const WorkPartner = (props) => {
    return (
        
            <div className="grid grid-cols-2 md:grid-cols-4" style={{marginTop:'10rem'}}>
                {props.sectionclients.map(sc=>(
                    // <div key={sc.id}>
                        <ClientLogo key={sc.title} imgSrc={`${sc.image.name}`} alt={sc.title}/>
                    // </div>
                ))}
            </div>
    )
}

export default WorkPartner
