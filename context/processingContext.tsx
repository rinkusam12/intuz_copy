
import React, { useState } from "react";
export const ProcessingContext = React.createContext<{ processing: boolean, setProcessing: React.Dispatch<React.SetStateAction<boolean>> }>({ processing: false, setProcessing: () => null });


const ProcessingProvider: React.FC = (props) => {
    const [processing, setProcessing] = useState<boolean>(false);
    return (
        <ProcessingContext.Provider value={{ processing, setProcessing }}>
            {props.children}
        </ProcessingContext.Provider>
    )
}

export default ProcessingProvider
