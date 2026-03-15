import { createContext, useState } from "react";

export const ColorContext = createContext(null);

export const ColorProvider = ({children}) => {
    const [color, setColor] = useState("#965af0");
    return (
        <ColorContext.Provider value ={{color, setColor}}>
            {children}
        </ColorContext.Provider >    
    );
}