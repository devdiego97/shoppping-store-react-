import React from "react"
import { HeaderContainer } from "./style"
import MenuIcon from '@rsuite/icons/Menu'
import CloseIcon from '@rsuite/icons/Close'
import { HStack,Text, IconButton, Toggle, VStack } from "rsuite"
import { LinksHeader } from "../../utils/links.header"
import ListItem from "rsuite/esm/List/ListItem"
import { useContextUI } from "../../context/uicontext"
import { Link } from "react-router-dom"
import { useContextData } from "../../context/datacontext"





export const Header=()=>{
    const {openMenuMobile,handleMenuMobile,theme,handleTheme}=useContextUI()
    const {user}=useContextData()

    return <HeaderContainer  state={openMenuMobile}>
        <div className="cx-logo">
            <h3 style={{color:'white'}}>ShoppingWeb</h3>
        </div>
        <div className="cx-open-menu">
           <IconButton onClick={()=>handleMenuMobile(true)} appearance="primary" color="blue" icon={<MenuIcon />} />
        </div>
        <nav>
            <div className="cx-close-menu">
              <IconButton onClick={()=>handleMenuMobile(false)} appearance="primary" color="red" icon={<CloseIcon />} />
            </div>
            <ul className="links">
             {
               !user ? LinksHeader.filter(i=>!i.private).map((i)=><ListItem as='li'><Link to={i.path}>{i.name}</Link></ListItem>)
              : LinksHeader.filter(i=>i.private || i.hasUser).map((i)=><ListItem as='li'><Link to={i.path}>{i.name}</Link></ListItem>)
             }
            </ul>
        </nav>
        
    </HeaderContainer>
}