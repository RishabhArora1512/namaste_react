import { useState } from "react";
import { Link } from "react-router-dom";
import styles from "../index.css"

const Header = () =>{
    // let btnName = "Login"

    const [btnName, setBtnName] = useState("Login");
    return (<div className="flex justify-between">
        <div className="logo-container">
            <img className="w-56" src="/images/images.png" alt="Logo" />
        </div>
        <div className="nav-items">
            <ul className="flex p-4 m-4">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/grocery">Grocery</Link></li>
                <li><Link to="/contact">Contact Us</Link></li>
                <li>Cart</li>
                <button className="login" onClick={()=>{
                    btnName === "Login" ? setBtnName("Logout") : setBtnName("Login");
                    console.log(btnName);
                }}>{btnName}</button>
            </ul>
        </div>
    </div>)
}


export default Header;