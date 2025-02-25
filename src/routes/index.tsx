import React from "react"
import { Routes as Router,Route } from "react-router-dom"
import Home from "../pages/Home"
import Products from "../pages/Products"
import {Cart} from "../pages/Cart"
import {Conta} from "../pages/Conta"
import { Register } from "../pages/Register"
import { Login } from "../pages/Login"
import ProductId from "../pages/ProductId"
import { PrivateRoute } from "../PrivateRoute"

export const Routes=()=>{
    
    return <Router >
        <Route path="/" Component={Home}/>
        <Route path="/produtos" Component={Products}/>
        <Route path="/produtos/:id/:name" Component={ProductId}/>
        <Route path="/minha-conta" element={<PrivateRoute><Conta/></PrivateRoute>}/>
        <Route path="/meu-carrinho" Component={Cart}/>
        <Route path="/cadastro" Component={Register}/>
        <Route path="/entrar" Component={Login}/>
    </Router>
}