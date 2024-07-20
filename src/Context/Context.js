import { createContext, useState } from "react";

const Context = createContext();

const MyProvider = ({children}) =>{

    const [item, setItem] = useState("");
    const [number, setNumber] = useState(0);

    return(
        <Context.Provider value={{item, setItem, number, setNumber}}>
            {children}
        </Context.Provider>
    );
}

export {Context};
export default MyProvider;