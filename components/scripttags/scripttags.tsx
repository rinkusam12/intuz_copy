import React, { useEffect, useState } from 'react'

const ScriptTags = (props) => {
    const [allow, setAllow] = useState(false);
    useEffect(() => {
        setAllow(true)
    }, [])
    return (
        <div>
            {allow ? <>
                        <div id="footer-tags" dangerouslySetInnerHTML={{__html:props.footertags}}>
                        </div>
            </> : ''}
            <div id="customScript" dangerouslySetInnerHTML={{__html:props.customScript}}></div>
                {/* {props.customScript} */}
            <div id="custom-tags" dangerouslySetInnerHTML={{__html:props.customtags}}>
            </div>
        </div>
    )
}

export default ScriptTags
