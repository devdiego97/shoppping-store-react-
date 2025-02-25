import { useParams } from "react-router-dom"
import React, { useState } from "react"
import {produtos} from "../../data/products"
import { Card,Text, Col, Container, FlexboxGrid, Grid, HStack, Row, Tag, List, VStack, Button } from "rsuite"
import FlexboxGridItem from "rsuite/esm/FlexboxGrid/FlexboxGridItem"
import { ImgBg} from "../../components/ImgBg"
import { BgImg } from "../../components/ImgBg/style"
import { useContextData } from "../../context/datacontext"



export default ()=>{
    const {name,id}=useParams()
    const productId=produtos.find(i=>i.id === parseInt(id as string))
    const [activeImg,setActiveImg]=useState<string>(productId!.cover)
   const {user}=useContextData()

    return <div >
      
        <Grid  fluid style={{margin:'150px 0'}}>
            <Row className="show-grid" >
            <Col sm={24} xs={24} md={12} style={{width:''}}>
                <Card style={{maxHeight:'500px',backgroundColor:'white'}}>
                   <ImgBg img={activeImg} height={500} />
                </Card>
                <div style={{display:'flex',margin:'50px 0'}}>

                    {
                        productId?.imgs.map(i=><div  onClick={()=>setActiveImg(i)} style={{padding:'12px',
                        width:'150px',height:'180px',border:'1px solid #aaa',background:'white',cursor:'pointer'}}>
                            <BgImg  height={145} imageUrl={i}  />
                        </div>) 
                    }
                    </div>
                 
            </Col>
            <Col sm={24} md={12} xs={24}>
                <h2>{productId?.name}</h2>
              <HStack style={{margin:'20px 0'}}>
                <Tag color="blue" size="lg">{productId?.category}</Tag>
                <Tag color="green" size="lg">{productId?.model}</Tag>
                <Tag color="violet"  size="lg">{productId?.mark}</Tag>
              </HStack>
              <Card>
                <Card.Header>
                    <Text as='p'>Sobre</Text>
                </Card.Header>
                <Card.Body>
                    <Text as='p'>{productId?.about}</Text>
                    <VStack style={{margin:'9px'}}>
          
                      {user ? <>
                        <Text as='p'>Por</Text>
                        <Text as ='h3'>R$ {productId?.price.toFixed(2).replace('.',',')}</Text>
                        </> :  <Text as='h4' color="red" >FAÇA LOGIN PARA VER PREÇO</Text>}
                      <Button style={{margin:'20px 0'}} block size="lg" color="blue" appearance="primary">Comprar</Button>
                    </VStack>
                </Card.Body>
              </Card>
            </Col> 
            </Row>
       </Grid>
     

    </div>
}