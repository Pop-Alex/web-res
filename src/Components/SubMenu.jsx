import React, { useState, useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import dataMenu from "../dataMenu";
import { AnimatePresence, motion } from "framer-motion";
import transitions from "../transitions";
import { CartContext } from "../context";

const allCategories = [
  "all",
  ...new Set(dataMenu.map((item) => item.category)),
];
const SubMenu = () => {
  const [menuItems, setMenuItems] = useState(dataMenu);
  const [categories, setCategories] = useState(allCategories);
  const { addCart } = useContext(CartContext);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  const filterItems = (category) => {
    if (category === "all") {
      setMenuItems(dataMenu);
      return;
    }
    const newItems = dataMenu.filter((item) => item.category === category);
    setMenuItems(newItems);
  };

  return (
    <div className="submenu-container">
      <div className="category-sesction">
        {categories.map((category, index) => {
          return (
            <button
              type="button"
              className="filter-btn"
              key={index}
              onClick={() => filterItems(category)}>
              {category}
            </button>
          );
        })}
      </div>
      <div className="submenu">
        {menuItems.map((item, index) => {
          return (
            <motion.div
              layout
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="card-container"
              key={item.id}>
              <div className="card">
                <img src={item.image} alt=".." />
                <div className="card-content">
                  <h2>{item.title}</h2>
                </div>
                <div className="button-submenu">
                  <Link to={`/submenu/${item.id}`}>
                    <button className="button-sumbenu-details">
                      More detalis
                    </button>
                  </Link>

                  <button
                    className="button-sub"
                    onClick={() => addCart(item.id)}>
                    Order Now
                  </button>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default transitions(SubMenu);
