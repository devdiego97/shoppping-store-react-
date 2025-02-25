import { createContext, ReactNode, useContext, useEffect, useState } from "react"
import React from "react"
type TUser={
    id:number,
    name:string,
    tel:string,
    email:string,
    password:string
}

type IDataContext={
    user:TUser | null,
    setUser:(newUser:TUser | null)=>void
}


const contextData=createContext<IDataContext>({
    user:null,
    setUser:(newUser:TUser | null)=>{}
})

type Props={
    children:ReactNode
}
export const ContextDataProvider=({children}:Props)=>{
    const [user,setUser]=useState<TUser | null>(null)



    useEffect(()=>{

        const storageUser=localStorage.getItem('u')
        setUser(JSON.parse(storageUser as string))
        if(user){
            localStorage.setItem('u',JSON.stringify(user))
        }
    },[])
    
    return <contextData.Provider value={{user,setUser}}>
        {children}
    </contextData.Provider>
}

export  const useContextData=()=>useContext(contextData)