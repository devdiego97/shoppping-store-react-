import { Button,Text, Card, Heading, HStack, Image, Tag } from "rsuite"
import { IProduct } from "../../interfaces/product.interface"
import React from "react"
import { useNavigate } from "react-router-dom"
import './style.css'
import {ImgBg} from "../ImgBg"


type props={
    product:IProduct
}
export const ProductItem=({product}:props)=>{
    const navigate=useNavigate()

 
    return <Card className="card" style={{ margin:'12px 0',padding:'0'}}>
            <div style={{backgroundColor:'white'}} >
              <ImgBg height={200} img={product.cover}  />
            </div>
            <Card.Header>
                 <Text as='h6' maxLines={1} >{product.name}</Text>
            </Card.Header>
            <Card.Body style={{margin:'12px 0'}}>
                <Tag>{product.category}</Tag>
                <Tag>{product.mark}</Tag>
            </Card.Body>
            <Card.Footer >
                <Button size="lg" appearance="primary" block 
                onClick={()=>navigate(`/produtos/${product.id}/${product.name}`)}>ver detalhes</Button>
            </Card.Footer>
    
    </Card>
}

