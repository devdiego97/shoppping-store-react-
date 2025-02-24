import { useParams } from "react-router-dom"
import React from "react"

export default ()=>{
    const {name,id}=useParams()
    return <div>
        <p>{id} - {name}</p>
    </div>
}