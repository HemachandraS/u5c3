


import { createContext, useState } from "react";
import { Dupe } from "./PrivateRoute";


export const Tempcontext = createContext()
export const Tempcontextprovider = ({ children }) => {
    const [isAuth, setisAuth] = useState(false)
    function toggleAuth() { 
        setisAuth((p) => {
            return !p
        })
    }
    return <Tempcontext.Provider value ={{isAuth,toggleAuth}}>{children}</Tempcontext.Provider>
}

