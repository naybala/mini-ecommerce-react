import React, { useState } from 'react'
import { BrowserRouter } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import Navbar from '../Navbar/Navbar';
import Home from './../HomePage/Home';
import About from '../AboutPage/About';
import Cart from '../CartPage/Cart';
export default function MainRouter() {
    const [cart, setCart] = useState([]);
    return (
        <BrowserRouter>
            <Navbar cart={cart} setCart={setCart} />
            <Routes>
                <Route path="/" element={<Home cart={cart} setCart={setCart} />} />
                <Route path="/about" element={<About cart={cart} setCart={setCart} />} />
                <Route path="/cart" element={<Cart cart={cart} setCart={setCart} />} />
            </Routes>
        </BrowserRouter>
    )
}
