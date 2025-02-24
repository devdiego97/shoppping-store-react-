import { Button,Text, Card, Heading, HStack, Image, Tag } from "rsuite"
import { IProduct } from "../../interfaces/product.interface"
import React from "react"
import { useNavigate } from "react-router-dom"


type props={
    product:IProduct
}
export const ProductItem=({product}:props)=>{
    const navigate=useNavigate()

 
    return <Card style={{ margin:'12px 0' }}>
            <Image zoomed src={product.cover} alt="imgem do produto" />
            <Card.Header>
                 <Text as='h6' maxLines={1} >{product.name}</Text>
            </Card.Header>
            <Card.Body>
                <Tag>{product.category}</Tag>
                <Tag>{product.mark}</Tag>
            </Card.Body>
            <Card.Footer >
                <Button size="lg" appearance="primary" block 
                onClick={()=>navigate(`/products/${product.id}/${product.name}`)}>ver detalhes</Button>
            </Card.Footer>
    
    </Card>
}

