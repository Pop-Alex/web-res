import React, { createContext, useState } from "react";
import dataMenu from "./dataMenu";

export const CartContext = createContext();
const getCart = () => {
  let cart = {};
  for (let i = 1; i < dataMenu.length + 1; i++) {
    cart[i] = 0;
  }
  return cart;
};
export const ContextProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState(getCart());
  const [cartAmount, setCartAmount] = useState([]);

  const addCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
    setCartAmount([...cartAmount, { ...itemId }]);
  };

  const removeCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
  };

  const amount = () => {
    let totalAmount = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        let itemInfo = dataMenu.find((product) => product.id === Number(item));
        totalAmount += cartItems[item] * itemInfo.price;
      }
    }
    return totalAmount;
  };

  const value = {
    addCart,
    removeCart,
    cartItems,
    cartAmount,
    amount,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
