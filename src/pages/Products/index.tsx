import React, { useEffect, useState } from "react"
import { Col, Container, Grid, Row, VStack } from "rsuite"
import { produtos } from "../../data/products"
import { ProductItem } from "../../components/ProductItem"
import { IProduct } from "../../interfaces/product.interface"
import PlaceholderGrid from "rsuite/esm/Placeholder/PlaceholderGrid"
import { useContextData } from "../../context/datacontext"

export default ()=>{
  const [listProducts,setListProducts]=useState<IProduct[] | []>([])
  const [load,setLoad]=useState(true)
  const {user}=useContextData()

  useEffect(()=>{
    setTimeout(()=>{
      setLoad(false)
      setListProducts(produtos)
    },1900)
  },[])
  
    return  <Grid fluid style={{ margin:'100px 0' }} >
      <Container style={{margin:'50px 0'}}>
        <h4>
            Bem Vindo <strong>{user  && user.name}</strong>,aproveite as nossas ofertas
        </h4>
      </Container>
    <Row  className="show-grid" >
      {load && <>
        <PlaceholderGrid  active style={{margin:'20px 0'}} rows={6} columns={4} />
        <PlaceholderGrid active  style={{margin:'20px 0'}}rows={6} columns={4} />
        <PlaceholderGrid active style={{margin:'20px 0'}} rows={6} columns={4} />
        <PlaceholderGrid  active style={{margin:'20px 0'}}rows={6} columns={4} />
      </>}
      {!load && produtos.map((p,k)=><Col key={k}  xs={24} sm={24} md={6} ><ProductItem product={p} /></Col>)}
    </Row>
    <Row className="show-grid"> 
    </Row>

   
  </Grid>
        
}