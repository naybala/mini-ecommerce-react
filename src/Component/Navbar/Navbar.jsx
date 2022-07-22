import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";


const Navbar = (props) => {
    const clickNav = () => {
        const removeNav = document.querySelector('.collapse');
        removeNav.classList.remove("show");
    }
    const navActive = (e) => {
        const nav = document.querySelectorAll(".nav-link");
        nav.forEach(function (btn) {
            btn.classList.remove("active");
        });
        e.target.classList.add("active");

    }
    return (
        <>
            <nav className="navbar navbar-expand-lg py-3 fixed-top bg-light" >
                <div className="container">
                    <h1>Mini-Ecommerce</h1>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navmenu"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navmenu" onClick={navActive}>
                        <ul className="navbar-nav ms-auto" onClick={clickNav}>
                            <li className="nav-item">
                                <Link to="/" className="nav-link active" data-id="home">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/about" className="nav-link" data-id="about">About</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/cart" className="nav-link" data-id="cart">Cart <span className="badge text-bg-primary">{props.cart.length}</span></Link>
                            </li>

                        </ul>
                    </div>
                </div>
            </nav>
            <br /><br /><br /><br />
        </>
    )
}

export default Navbar;