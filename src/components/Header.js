import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import styles from "../index.css"
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

const Header = () =>{
    // let btnName = "Login"

    const [btnName, setBtnName] = useState("Login");

    const {loggedInUser} = useContext(UserContext);

    const cart = useSelector((store) => store.cart.items);
    return (<div className="flex justify-between shadow-xl">
        <div className="logo-container">
            <img className="w-56" src="/images/images.png" alt="Logo" />
        </div>
        <div className="flex items-center">
            <ul className="flex p-4 m-4">
                <li className="px-4"><Link to="/">Home</Link></li>
                <li className="px-4"><Link to="/about">About</Link></li>
                <li className="px-4"><Link to="/grocery">Grocery</Link></li>
                <li className="px-4"><Link to="/contact">Contact Us</Link></li>
                <li className="px-4 after:relative after:bg-red-400 after:w-2 after:h-2 after:rounder-lg">Cart ({cart.length})</li>
                <button className="login" onClick={()=>{
                    btnName === "Login" ? setBtnName("Logout") : setBtnName("Login");
                    console.log(btnName);
                }}>{btnName}</button>
                <li className="px-4 font-bold">{loggedInUser}</li> 
            </ul>
        </div>
    </div>)
}


export default Header;