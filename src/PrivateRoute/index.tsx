import React, { ReactNode } from "react"
import { useContextData } from "../context/datacontext"
import { Navigate, useNavigate } from "react-router-dom"


type Props={
    children:ReactNode
}
export const PrivateRoute=({children}:Props)=>{
    const {user}=useContextData()
const nav=useNavigate()
    if(user){
        return children
    }else{
        return  <Navigate to="/" replace />
    }
}