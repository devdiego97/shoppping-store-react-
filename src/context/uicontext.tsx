import { createContext, ReactNode, useContext, useState } from "react"
import React from "react"

export interface IContextUi{
    openMenuMobile:boolean,
    theme:'light' | 'dark',
    handleTheme:(theme:'light' | 'dark')=>{},
    handleMenuMobile:(value:boolean)=>{}
}


export const contextUi=createContext({
    openMenuMobile:false,
    theme:'light',
    handleTheme:(theme:'light' | 'dark')=>{},
    handleMenuMobile:(value:boolean)=>{}
})

type Props={
    children:ReactNode
}
export const ContextUiProvider=({children}:Props)=>{
    const [openMenuMobile,handleMenuMobile]=useState<boolean>(false)
    const [theme,handleTheme]=useState<'light' | 'dark'>('light')

return <contextUi.Provider  value={{handleMenuMobile,openMenuMobile,theme,handleTheme}}>
        {children}
    </contextUi.Provider>
}

export const useContextUI=()=>useContext(contextUi)