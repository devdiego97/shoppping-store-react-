import React from "react"
import { BgImg } from "./style"

type Props={
    img:string,
    height:number
}
export const ImgBg=({img,height}:Props)=>{
    return <BgImg height={height} imageUrl={img} />
}