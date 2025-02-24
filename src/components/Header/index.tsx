import React from "react"
import { HeaderContainer } from "./style"
import MenuIcon from '@rsuite/icons/Menu'
import CloseIcon from '@rsuite/icons/Close'
import { HStack,Text, IconButton, Toggle, VStack } from "rsuite"
import { LinksHeader } from "../../utils/links.header"
import ListItem from "rsuite/esm/List/ListItem"
import { useContextUI } from "../../context/uicontext"
import { Link } from "react-router-dom"

export const Header=()=>{
    const {openMenuMobile,handleMenuMobile,theme,handleTheme}=useContextUI()


    return <HeaderContainer state={openMenuMobile}>
        <div className="cx-logo">

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
                LinksHeader.map((i)=><ListItem as='li'><Link to={i.path}>{i.name}</Link></ListItem>)
             }
            </ul>
            <HStack className="handle-theme" alignItems="center">
                <Text color="cyan">Alterer o Tema</Text>
                <HStack justifyContent="center">
                <Toggle size="lg" onChange={()=>theme ==='light' ? handleTheme('dark') :handleTheme('light')} checkedChildren="escuro" unCheckedChildren="claro" defaultChecked />
                </HStack>
        </HStack>
        </nav>
        
    </HeaderContainer>
}