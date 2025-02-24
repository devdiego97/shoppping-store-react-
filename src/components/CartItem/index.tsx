import { Button,Text, Card, Heading, HStack, Image, Tag, VStack, Divider } from "rsuite"
import { IProduct } from "../../interfaces/product.interface"
import React from "react"
import { useNavigate } from "react-router-dom"


type props={
    product:IProduct
}
export const CartItem=({product}:props)=>{
    const navigate=useNavigate()

 
    return <Card style={{ margin:'5px 0' }} direction="row">
            <Image zoomed src={product.cover} alt="imgem do produto" />
            <VStack>
                <Card.Header>
                    <Text as='h6' maxLines={1} >{product.name}</Text>
                </Card.Header>
              <Card.Body>
                <Tag size="lg">{product.category}</Tag>
                <Tag size="lg">{product.mark}</Tag>
                <Tag size="lg" >Qtd: 5</Tag>
                <Divider />
                <HStack style={{ margin:'20px 0' }} spacing={0} >
                    <Button size="lg" appearance="primary" color="red"  
                      style={{marginRight:'0',borderTopRightRadius:'0',borderBottomRightRadius:'0' }}>
                      -
                    </Button>
                    <Button size="lg" style={{ borderRadius:'0' }}>0</Button>
                    <Button size="lg" color="green" appearance="primary" style={{marginRight:'0',borderTopLeftRadius:'0',borderBottomLeftRadius:'0' }}>+</Button>
                </HStack>
             </Card.Body>
            </VStack>
    
    </Card>
}

