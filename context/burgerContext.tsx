import React, { useState } from 'react'
export const BurgerContext = React.createContext<{ show:boolean; setShow:React.Dispatch<React.SetStateAction<boolean>> }>({ show:false, setShow:()=>null })



const BurgerProvider:React.FC = (props) => {
    const [show, setShow] = useState(false)
    return (
        <BurgerContext.Provider value={{ show, setShow }}>
            {props.children}
        </BurgerContext.Provider>
    )
}

export default BurgerProvider
