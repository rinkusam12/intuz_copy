import React from 'react'

const SubHeading: React.FC<{ className?:string }> = (props) => {
    return (
        <p className={`mt-5 text-4xl lg:text-30 text-black-6b font-opensans font-normal leading-normal ${props.className}`}>
            {props.children}
        </p>
    )
}

export default SubHeading
