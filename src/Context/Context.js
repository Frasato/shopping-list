import { createContext, useState } from "react";

const Context = createContext();

const MyProvider = ({children}) =>{

    const [items, setItems] = useState([]);

    return(
        <Context.Provider value={{items, setItems}}>
            {children}
        </Context.Provider>
    );
}

export {Context};
export default MyProvider;