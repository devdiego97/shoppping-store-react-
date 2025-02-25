import React, { useEffect, useState } from "react"
import { Container, Heading, Placeholder, VStack } from "rsuite"
import { CartItem } from "../../components/CartItem"
import { produtos } from "../../data/products"
import CartIcon from "../../components/CartIcon"
import { IProduct } from "../../interfaces/product.interface"


export const Cart=()=>{
    const [load,setLoad]=useState(true)
    const [listCart,setListCart]=useState<IProduct[] | []>([])
    useEffect(()=>{
        setTimeout(()=>{
            setLoad(false)
            setListCart(produtos)
        },1900)
    },[])
    return <Container style={{ margin:'100px 0' }}>
        <Heading>
            <CartIcon />
            Meu carrinho
        </Heading>
        <VStack style={{ margin:'20px 0' }}>
            {load && <>
               <Placeholder.Paragraph style={{margin:'20px'}} graph="image" active />
               <Placeholder.Paragraph style={{margin:'20px'}} graph="image" active />
               <Placeholder.Paragraph style={{margin:'20px'}} graph="image" active />
               <Placeholder.Paragraph style={{margin:'20px'}} graph="image" active />
            </>}
            {!load && listCart.map((p,k)=><CartItem  product={p} />)}
        </VStack>
    </Container>
}