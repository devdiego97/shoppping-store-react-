import React from "react"
import { Container, Heading, VStack } from "rsuite"
import { CartItem } from "../../components/CartItem"
import { produtos } from "../../data/products"


export const Cart=()=>{
    return <Container style={{ margin:'100px 0' }}>
        <Heading>
            Meu carrinho
        </Heading>
        <VStack style={{ margin:'20px 0' }}>
            {produtos.map((p,k)=><CartItem  product={p} />)}
        </VStack>
    </Container>
}