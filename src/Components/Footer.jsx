import React from 'react'
import { FaXTwitter } from "react-icons/fa6";
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";


function Footer() {
    return (
        <footer>
            <section className="foot">
                <div className="main_foot">
                    <div className="foot_content">
                        <h2 className="f_heading">Support</h2>
                        <ul className="f_text">
                            <li className="l_text">Contact Us</li>
                            <li className="l_text">Help & Support Docs</li>
                            <li className="l_text">Shipping Methods</li>
                            <li className="l_text">Returns & Exchanges</li>
                        </ul>
                    </div>
                    <div className="foot_content">
                        <h2 className="f_heading">INFORMATION</h2>
                        <ul className="f_text">
                            <li className="l_text">About Us</li>
                            <li className="l_text">Cubicle Rewards</li>
                            <li className="l_text">Terms & Services</li>
                            <li className="l_text">Privacy Policy</li>
                            <li className="l_text">Wholesales</li>
                            <li className="l_text">Sponsorships</li>
                        </ul>
                    </div>
                    <div className="foot_content">
                        <h2 className="f_heading">ACCOUNT</h2>
                        <ul className="f_text">
                            <li className="l_text">Order History</li>
                            <li className="l_text">Addresses</li>
                            <li className="l_text">Wishlist</li>
                            <li className="l_text">Shopping Cart</li>
                        </ul>
                    </div>
                    <div className="foot_content">
                        <h2 className="f_heading">EXTRAS</h2>
                        <ul className="f_text">
                            <li className="l_text">Gift Cards</li>
                            <li className="l_text">Clearance</li>
                            <li className="l_text">Cube Tutorials</li>
                            <li className="l_text">Blogs</li>
                            <li className="l_text">Cubicle Academy</li>
                        </ul>
                    </div>
                    <div className="foot_content">
                        <h2 className="f_heading">NEWSLETTER</h2>
                        <p className="o_text">Exclusive discounts and new sales/promotions. Directly to your inbox!</p>
                    </div>
                </div>
                <hr />
                <div className="icons">
                    <FaXTwitter style={{fontSize: "24px", color: "#585858", cursor: "pointer"}}/>
                    <FaFacebookSquare style={{fontSize: "24px", color: "#585858", cursor: "pointer"}}/>
                    <FaInstagram style={{fontSize: "25px", color: "#585858", cursor: "pointer"}}/>
                    <FaYoutube style={{fontSize: "30px", color: "#585858", cursor: "pointer"}}/>
                </div>
                <hr />
                <div className="end">© 2024 TheCubicle - all prices in USD</div>
            </section>
        </footer>
    )
}

export default Footer
