import React from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../assests/logoBurgir.png";
const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <div className="footer">
      <div className="links-footer">
        <h3>Useful links</h3>
        <ul className="footer-links">
          <li className="link">
            <NavLink to="/">
              <a href="/" onClick={scrollToTop}>
                Home
              </a>
            </NavLink>
          </li>
          <li className="link">
            <NavLink to="about">
              <a href="about" onClick={scrollToTop}>
                About
              </a>
            </NavLink>
          </li>
          <li className="link">
            <NavLink to="menu">
              <a href="menu" onClick={scrollToTop}>
                Menu
              </a>
            </NavLink>
          </li>
          <li className="link">
            <NavLink to="contact">
              <a href="contact" onClick={scrollToTop}>
                Contact
              </a>
            </NavLink>
          </li>
        </ul>
      </div>
      <div className="middle-footer-page">
        <img src={logo} alt="" className="navbar-logo" />
        <form action="" className="footer-from">
          <input type="text" placeholder="Enter email: johndoe@gmai.com" />
          <br />
          <br />
          <button>Subscribe</button>
        </form>
      </div>
      <div className="contact-footer">
        <h3>Contact</h3>
        <p>123,XYZ Road 3</p>
        <p>City name</p>
        <p>Phone:123213123</p>
      </div>
    </div>
  );
};

export default Footer;
