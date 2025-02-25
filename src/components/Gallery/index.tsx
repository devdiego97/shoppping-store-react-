import React from "react";
import AliceCarousel from "react-alice-carousel";
import { produtos } from "../../data/products";
import 'react-alice-carousel/lib/alice-carousel.css';
import { Card } from "rsuite";


const handleDragStart = (e) => e.preventDefault();


const items = produtos.flatMap((produto) =>
  produto.imgs.map((imgSrc, index) => (
   <Card style={{background:'white',padding:'12px', width: "500px", height: "500px", objectFit: "cover" }} ><img key={index} src={imgSrc}       
   onDragStart={handleDragStart} role="presentation" /></Card>
  ))
)

export const GalleryProducts = () => {
  return <AliceCarousel  disableDotsControls mouseTracking autoPlay autoHeight items={items} 
  animationDuration={1000}  infinite
  animationEasingFunction="ease-in-out" 
  />
}

