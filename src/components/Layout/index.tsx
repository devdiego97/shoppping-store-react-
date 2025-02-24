
import React, { ReactNode, useState } from "react"
import { Header } from "../Header"


type Props={
    children:ReactNode
}
export const Layout=({children}:Props)=>{
    const [activeKey, setActiveKey] = useState(null)
    return <div>
        <Header />
        <main>
            <div className="content">
                {children}
            </div>    
        </main>
    </div>
}

