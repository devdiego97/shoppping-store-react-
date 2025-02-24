import styled from "styled-components";

type props={
state:boolean
}
export const HeaderContainer=styled.header<props>`
display: flex;
align-items: center;
justify-content: space-around;
padding: 12px;
background-color: #D84040;
.cx-img{
    img{
        height:90px;
    }
}
.cx-open-menu,.cx-close-menu{
    display: none;
}
nav{
    display: flex;
    align-items: center;
}
.links{
    display: flex;
    align-items: center;
    li,a{
        background-color: transparent;
        margin: 0 12px;
        font-size: 16px;
        color: white;
    }
}


@media screen and (min-width:350px) and (max-width:950px) {
    height: 90px;
    justify-content: space-between;
    .cx-open-menu{
        display:${props=>props.state === false ? 'flex' : 'none'};
        }

    nav{
        display: ${props=>props.state === true ? 'flex' : 'hidden'};
        position: fixed;
        width:${props=>props.state === true ? '50vw' : '0'};
        right: 0;
        top: 0;
        flex-direction: column;
        height: 100vh;
        background-color :#A31D1D;
        transition: all ease .3s;
        display: flex;
        .cx-close-menu{
            display: ${props=>props.state === true ? 'flex' : 'none'};
            width: ${props=>props.state === true ? '100%' : '0'};
            padding: 12px;
            background-color: white;
        }
        .handle-theme{
            display: ${props=>props.state === true ? 'flex' : 'none'};
        }
        .links{
            display: ${props=>props.state === true ? 'flex' : 'none'};
             flex-direction: column;

             
            a,li{
                margin: 12px 0;
            }
        }
    }
}
`