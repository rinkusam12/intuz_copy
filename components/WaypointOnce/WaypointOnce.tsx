import React, { useState } from 'react';
import VisibilitySensor from 'react-visibility-sensor';
const WaypointOnce = ({ play, children, bottom }) => {

    const [shown, setShown] = useState(false)

    function onViewPort(visible){
        if(visible){
            if(!shown){
                play();
            }
            setShown(true);
        }
    }

    return (
        <VisibilitySensor partialVisibility offset={{ bottom: bottom ? bottom : 200 }} onChange={onViewPort}>
            {children}
        </VisibilitySensor>
    
    )
}

export default WaypointOnce
