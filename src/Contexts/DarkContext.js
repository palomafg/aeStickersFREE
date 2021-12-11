import { createContext, useContext, useState } from 'react';

const DarkContext = createContext();

export const DarkContextUse = () => {
    return useContext(DarkContext)
}

export const DarkContextProvider = ({ children }) => {

    const [dark, setDark] = useState(false);

    return(
        <DarkContext.Provider value={{ dark, setDark }}>
            {children}
        </DarkContext.Provider>
    );
}