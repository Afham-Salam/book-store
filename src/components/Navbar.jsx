import React, { useState } from "react";
import { navitems } from "../utils/data";
import { NavLink } from "react-router-dom";
import Mobilemenu from "./Mobilemenu";
import { Badge } from "antd";
import CartComponent from "./CartComponent";
import { useSelector } from "react-redux";
import MobileMenu from "./Mobilemenu";
import logo from "../assets/Logo.jpg"


export default function Navbar() {
  const [menu, setMenu] = useState(false);
  const [cartVisible, setCartVisible] = useState(false); 

  const cartItems = useSelector((state) => state.cart.items);

  const toggleCart = () => {
    setCartVisible(!cartVisible);
  };

  return (
    <div className="flex items-center justify-between w-full h-[70px] relative z-50 shadow-md">
      {/* Mobile menu */}
      <div className="flex flex-row items-center m-0 p-0">
      <div className="lg:hidden md:block">
      <svg
        onClick={() => setMenu(!menu)}
        className="text-white pl-2 cursor-pointer"
        xmlns="http://www.w3.org/2000/svg"
        width="44"
        height="44"
        viewBox="0 0 24 24"
      >
        {!menu ? (
          <path fill="#ad5051" d="M3 18v-2h18v2zm0-5v-2h18v2zm0-5V6h18v2z" />
        ) : (
         
          <path fill="#ad5051" d="M18.3 5.71L12 12.01 5.7 5.71 4.29 7.12l6.3 6.3-6.3 6.3 1.42 1.41 6.3-6.3 6.29 6.3 1.42-1.41-6.3-6.3 6.3-6.3z" />
        )}
      </svg>
      {menu && <MobileMenu />}
    </div>

     
        <div className="p-4 w-fit">
          <NavLink to="/">
            <img className="lg:w-20 md:w-20 sm:w-24 w-24 h-full" src={logo} alt="Logo" />
          </NavLink>
        </div>

        
        <div className="ml-5"></div>
        <div className="lg:flex lg:gap-10 md:hidden hidden">
          {navitems.map((it) => (
            <NavLink
              to={it.path}
              key={it.label}
              className={`text-[#c3794b] font-bold flex ${it.icon ? "group" : ""}`}
            >
              {it.label}
            </NavLink>
          ))}
        </div>
      </div>

   
      <div className="flex gap-6 mr-4">
     
        <div className="relative inline-block" onClick={toggleCart}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path
              fill="#c3794b"
              d="M7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2s-.9-2-2-2M1 3c0 .55.45 1 1 1h1l3.6 7.59l-1.35 2.44C4.52 15.37 5.48 17 7 17h11c.55 0 1-.45 1-1s-.45-1-1-1H7l1.1-2h7.45c.75 0 1.41-.41 1.75-1.03l3.58-6.49A.996.996 0 0 0 20.01 4H5.21l-.67-1.43a.99.99 0 0 0-.9-.57H2c-.55 0-1 .45-1 1m16 15c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2s2-.9 2-2s-.9-2-2-2"
            />
          </svg>
          <Badge count={cartItems.length} size="small" className="absolute -top-1 -right-1"></Badge>
        </div>

        
        {cartVisible && <CartComponent />} 

       
        <div className="flex flex-row gap-2 justify-end">
          <button className="text-[#c3794b] font-bold"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" fill-rule="evenodd" d="M8 7a4 4 0 1 1 8 0a4 4 0 0 1-8 0m0 6a5 5 0 0 0-5 5a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3a5 5 0 0 0-5-5z" clip-rule="evenodd"/></svg></button>
        </div>
      </div>
    </div>
  );
}
