import React from 'react'
import logo_image from '../Pics/cubicle_logo.avif'
import { FaSearch } from "react-icons/fa";
import { FaRegBell } from "react-icons/fa6";
import { FaShoppingCart } from "react-icons/fa";


function Navbar() {
    return (
        <>
            <nav>
                <div className='nav-bar'>
                    <h3 className="discount_line">SPEND <span className='yellow'>$60.00</span> MORE FOR FREE U.S. SHIPPING</h3>
                    <div className="register_box">
                        <span className="log">Log in</span>
                        or
                        <span className="log">Register</span>
                    </div>
                    <div className="logo">
                        <img className="logoImg"
                            src={logo_image}
                            alt="" />
                    </div>
                    <div className="search_bar">
                        <input className='search' placeholder='Search' type="text" name="" id="" />
                        <FaSearch style={{ color: "white" }} />
                    </div>
                    <div className="bell_icon">
                        <FaRegBell style={{ fontSize: "18px", color: "white" }} />
                    </div>
                    <div className="cart">
                        <FaShoppingCart style={{ fontSize: "17px", color: "white" }}/>
                        CART
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar
