import React from "react";
import { Link, useParams } from "react-router-dom";
import dataMenu from "../dataMenu";
import transitions from "../transitions";
const SingleItem = () => {
  const { id } = useParams();
  console.log("ID from useParams:", id);
  const product = dataMenu.find((product) => product.id === Number(id));
  const { title, image, desc, ingredients } = product;
  console.log(product);
  if (!product) {
    return <div>No product found for the given ID.</div>;
  }
  return (
    <div style={{ color: "white" }} className="singlePage-item">
      <div className="card-singleItem">
        <img src={image} alt="" />
        <div className="singleItem-info">
          <h3>{title}</h3>
          <p>{desc}</p>
          <p>{ingredients}</p>
          <button className="button-singleItem">Order Now!</button>
        </div>
        <Link to="/submenu" className="close-singleItem">
          <button>X</button>
        </Link>
      </div>
    </div>
  );
};

export default transitions(SingleItem);
