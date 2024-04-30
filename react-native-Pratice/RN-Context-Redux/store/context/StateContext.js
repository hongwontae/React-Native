import {createContext, useState} from 'react';

export const context = createContext({
    name : '',
    changeName : ()=>{}
});

export default function ContextProvider({children}){

    const [name, setName] = useState('HWT');
    
    function changeName(name){
        setName(name);
    }

    let ctx = {
        name,
        changeName
    }

    return(
        <>
            <context.Provider value={ctx}>{children}</context.Provider>
        </>
    )
}