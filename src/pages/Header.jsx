import React from "react";
import image from "../assests/photo.png";
import transitions from "../transitions";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <div className="header">
      <div className="header-info">
        <h1>Burgir</h1>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Debitis
          dicta, libero maxime porro necessitatibus saepe tempore beatae harum
          ducimus. Laborum qui maxime iure error quasi nulla tempore voluptas
          blanditiis doloribus!
        </p>
        <Link to="menu">
          <button className="button-explore-header">Explore Menu</button>
        </Link>
      </div>
      <div className="header-img">
        <img src={image} className="animated" alt="poza" />
      </div>
    </div>
  );
};

export default Header;
