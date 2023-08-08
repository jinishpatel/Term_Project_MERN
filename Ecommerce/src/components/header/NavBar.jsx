import "./navBar.css";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../../actions/userAction";

const Navbar = () => {
  const [click, setclick] = useState(false);
  const handleClick = () => setclick(!click);

  const dispatch = useDispatch();

  const logoutHandler = () => {
    dispatch(logout());
    alert.success("Logout Successfully");
    console.log("logout");
  };
  const [color, setcolor] = useState(false);
  const changeColor = () => {
    if (window.scrollY >= 100) {
      setcolor(true);
    } else {
      setcolor(false);
    }
  };
  window.addEventListener("scroll", changeColor);

  return (
    <div className={color ? "header header-bg " : "header"}>
      <Link to="/">
        <h1 className="title_name">JP</h1>
      </Link>

      <ul className={click ? "nav-menu active" : "nav-menu"}>
        <li>
          <Link to="/product">All Products</Link>
        </li>

        {/* <li>
          <Link to="/cart">Cart</Link>
        </li> */}
        <li>
          <Link to="/search">Search</Link>
        </li>

        <li>
          {/* {userLogin ? (
            <div className="dropdown">
              <button className="dropbtn">{user.username}</button>
              <div className="dropdown-content">
                <Link to="/me">Profile</Link>
                <Link onClick={logoutHandler}>Logout</Link>
              </div>
            </div>
          ) : ( */}
          {/* <linkContainer> */}
          <Link href="/login">Login</Link>
          {/* </linkContainer> */}
          {/* )} */}
        </li>
      </ul>
      <div className="hamburger-menu" onClick={handleClick}>
        {click ? <FaTimes size={20} /> : <FaBars size={20} />}
      </div>
    </div>
  );
};

export default Navbar;
