import React, { useState, useContext } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { Link } from "react-router-dom";
import logo from "../assests/logoBurgir.png";
import { CartContext } from "../context";
import { BsCartFill } from "react-icons/bs";
import { motion, AnimatePresence } from "framer-motion";
const Navbar = () => {
  const { cartAmount } = useContext(CartContext);
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <nav className="navbar">
      <Link to="/">
        <img className="navbar-logo" src={logo} alt="" />
      </Link>

      <ul className="navbar-links">
        <li className="link">
          <Link to="/">
            <a href="/">Home</a>
          </Link>
        </li>
        <li className="link">
          <Link to="about">
            <a href="about">About</a>
          </Link>
        </li>
        <li className="link">
          <Link to="menu">
            <a href="menu">Menu</a>
          </Link>
        </li>
        <li className="link">
          <Link to="contact">
            <a href="contact">Contact</a>
          </Link>
        </li>
      </ul>
      <div className="navbar-cart">
        <Link to="cart">
          <BsCartFill color="white" size="1.5rem" />
        </Link>
        <div className="navbar-amount-cart">
          <p style={{ color: "black" }} className="quantity">
            {cartAmount.length}{" "}
          </p>
        </div>
      </div>
      <div className="navbar-mobile">
        <GiHamburgerMenu
          color="#fff"
          fontSize={27}
          onClick={() => setToggleMenu(true)}
        />
        <AnimatePresence>
          {toggleMenu && (
            <motion.div
              initial={{ scaleY: 0 }}
              animate={{ scaleY: 1 }}
              exit={{ scaleY: 0 }}
              className="navbar-mobile-overlay">
              <GiHamburgerMenu
                color="#fff"
                fontSize={27}
                onClick={() => setToggleMenu(false)}
                className="close"
              />
              <ul className="navbar-mobile-links">
                <li className="link">
                  <Link to="/">
                    <a href="/">Home</a>
                  </Link>
                </li>
                <li className="link">
                  <Link to="about">
                    <a href="about">About</a>
                  </Link>
                </li>
                <li className="link">
                  <Link to="menu">
                    <a href="menu">Menu</a>
                  </Link>
                </li>
                <li className="link">
                  <Link to="contact">
                    <a href="contact">Contact</a>
                  </Link>
                </li>
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};

export default Navbar;
