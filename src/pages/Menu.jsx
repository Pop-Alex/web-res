import React from "react";
import data from "../data";

import { motion } from "framer-motion";
import { Link, Outlet } from "react-router-dom";
import transitions from "../transitions";
const Menu = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <div className="menu">
      <div className="menu-title">
        <h1>Menu</h1>
        <div></div>
      </div>

      <div className="menu-menu">
        <div className="menu-burger-list">
          <p>Burgers</p>
          <div className="menu-items">
            {data.burgers.map((item, index) => {
              return (
                <div className="menu-item">
                  <div className="menu-item-head">
                    <div className="menu-name">
                      <p>{item.title}</p>
                    </div>
                    <div className="line"></div>
                    <div className="menu-price">
                      <p>{item.price}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="menu-burger-list">
          <p>Drinks</p>
          <div className="menu-items">
            {data.drinks.map((item, index) => {
              return (
                <div className="menu-item">
                  <div className="menu-item-head">
                    <div className="menu-name">
                      <p>{item.title}</p>
                    </div>
                    <div className="line"></div>
                    <div className="menu-price">
                      <p>{item.price}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <Link to="/submenu">
        <button onClick={() => scrollToTop()} className="menu-button">
          Check for More
        </button>
      </Link>
    </div>
  );
};

export default transitions(Menu);
