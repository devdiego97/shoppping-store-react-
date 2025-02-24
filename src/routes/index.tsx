import React from "react"
import { Routes as Router,Route } from "react-router-dom"
import Home from "../pages/Home"
import Products from "../pages/Products"
import {Cart} from "../pages/Cart"
import {Conta} from "../pages/Conta"
import { Register } from "../pages/Register"
import { Login } from "../pages/Login"



export const Routes=()=>{
    return <Router >
        <Route path="/" Component={Home}/>
        <Route path="/produtos" Component={Products}/>
        <Route path="/meu-carrinho" Component={Cart}/>
        <Route path="/minha-conta" Component={Conta}/>
        <Route path="/cadastro" Component={Register}/>
        <Route path="/entrar" Component={Login}/>
    </Router>
}