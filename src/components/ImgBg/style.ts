import { styled } from "styled-components";

interface BackgroundProps {
    imageUrl: string;
    height:number;
  }
  
  export const BgImg = styled.div<BackgroundProps>`
    width: 100%;
    height:${props=>props.height}px;
    background-image: url(${(props) => props.imageUrl});
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
    border-radius: 10px;
  `;
  