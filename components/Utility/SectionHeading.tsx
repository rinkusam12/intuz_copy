import React from 'react'

const SectionHeading:React.FC<{ className?:string }> = (props) => {
    return (
        <h2 className={`text-5xl md:text-6xl lg:text-48 text-black-2f font-opensans font-semibold leading-normal ${props.className}`}>
            {props.children}
        </h2>
    )
}

export default SectionHeading
