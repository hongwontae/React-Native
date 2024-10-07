import { createContext, useState } from "react";

export const AuthCtx = createContext({
    isAuth : false,
    setAuth : ()=>{},
    isLogout : ()=>{}
})


export default function AuthCtxProvider({children}){

    const [isAuth, setAuth] = useState(false);

    function isLogout(){
        setAuth(false)
    }


    const ctx = {
        isAuth,
        setAuth,
        isLogout
    }

    return <AuthCtx.Provider value={ctx}>{children}</AuthCtx.Provider>
}