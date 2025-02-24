import React from "react"
import { Col, Container, Grid, Row, VStack } from "rsuite"
import { produtos } from "../../data/products"
import { ProductItem } from "../../components/ProductItem"

export default ()=>{
    return  <Grid fluid style={{ margin:'100px 0' }} >
    <Row  className="show-grid" >
      {produtos.map((p,k)=><Col key={k}  xs={24} sm={24} md={6} ><ProductItem product={p} /></Col>)}
    </Row>
    <Row className="show-grid"> 
    </Row>

   
  </Grid>
        
}