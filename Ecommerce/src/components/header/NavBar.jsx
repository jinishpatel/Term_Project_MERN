import "./navBar.css";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import React, { useState, useEffect } from "react";

const Navbar = () => {
  const [click, setclick] = useState(false);
  const handleClick = () => setclick(!click);
  const [userName, setUserName] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  useEffect(() => {
    // Check if the user is logged in (e.g., by checking for a token)
    const Token = localStorage.getItem("token");
    console.log("as", Token);

    if (Token) {
      setIsLoggedIn(true);
      console.log(isLoggedIn);
    }
    const storedUsername = localStorage.getItem("user");
    if (storedUsername) {
      setUserName(JSON.parse(storedUsername).username);
    }
  }, []);
  const [color, setcolor] = useState(false);
  const changeColor = () => {
    if (window.scrollY >= 100) {
      setcolor(true);
    } else {
      setcolor(false);
    }
  };
  window.addEventListener("scroll", changeColor);

  console.log(userName);
  return (
    <div className={color ? "header header-bg " : "header"}>
      <Link to="/">
        <h1 className="title_name">JP</h1>
      </Link>

      <ul className={click ? "nav-menu active" : "nav-menu"}>
        <li>
          <Link to="/product">All Products</Link>
        </li>

        <li>
          <Link to="/cart">Cart</Link>
        </li>
        <li>
          <Link to="/search">Search</Link>
        </li>
        <li>
          <Link to="/grp">GRP MEMBER</Link>
        </li>
        <li>
          {isLoggedIn ? (
            <Link to="/me">hello!{userName}</Link>
          ) : (
            <Link to="/login">Login</Link>
          )}
        </li>
      </ul>
      <div className="hamburger-menu" onClick={handleClick}>
        {click ? <FaTimes size={20} /> : <FaBars size={20} />}
      </div>
    </div>
  );
};

export default Navbar;
