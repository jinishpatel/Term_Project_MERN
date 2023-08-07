import "./navBar.css";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import { useState } from "react";

const Navbar = () => {
  const [click, setclick] = useState(false);
  const handleClick = () => setclick(!click);

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
          <Link to="/login">Login/Register</Link>
        </li>
      </ul>
      <div className="hamburger-menu" onClick={handleClick}>
        {click ? <FaTimes size={20} /> : <FaBars size={20} />}
      </div>
    </div>
  );
};

export default Navbar;
