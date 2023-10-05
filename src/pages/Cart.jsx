import React, { useContext } from "react";
import dataMenu from "../dataMenu";
import { CartContext } from "../context";
import { BsTrash3 } from "react-icons/bs";
import { Link, useParams } from "react-router-dom";

const Cart = () => {
  const { addCart, removeCart, cartItems, amount } = useContext(CartContext);
  const total = amount();
  return (
    <div style={{ color: "white" }} className="cart">
      <h1>Cart</h1>
      <div className="content-cart">
        <div className="line-cart"></div>
        {dataMenu.map((product) => {
          if (cartItems[product.id] !== 0) {
            return (
              <div className="cart-content-info">
                <button
                  onClick={() => removeCart(product.id)}
                  className="cart-delete-button">
                  <BsTrash3 color="white" size="1rem" />
                </button>
                <img className="cart-image" src={product.image} alt="" />
                <h3>{product.title}</h3>
                <p>{product.price}$</p>
                <input className="input-cart" value={cartItems[product.id]} />
              </div>
            );
          }
        })}

        <div className="line-cart"></div>

        <div className="button-continue">
          <Link to="/submenu">
            <button className="cart-continue-shop">Continue Shopping</button>
          </Link>
        </div>
      </div>
      <div className="cart-total-amount">
        <h1>TOTAL CART</h1>
        <div className="line-cart"></div>
        <div className="cart-total-amount-price">
          <h3>Total Price:</h3>
          <p>{total}$</p>
        </div>
        <div className="line-cart"></div>
        <button className="cart-total-amount-button">Continue</button>
      </div>
    </div>
  );
};

export default Cart;
