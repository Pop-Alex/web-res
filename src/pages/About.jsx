import React, { useRef } from "react";
import image from "../assests/burgitpng.png";

import transitions from "../transitions";
import { Outlet, NavLink } from "react-router-dom";
import { Link } from "react-scroll";

const About = () => {
  return (
    <div>
      <div className="about">
        <div className="about-info">
          <div className="about-info-content">
            <h1> About us</h1>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Debitis
              dicta, libero maxime porro necessitatibus saepe tempore beatae
              harum ducimus. Laborum qui maxime iure error quasi nulla tempore
              voluptas blanditiis doloribus!
            </p>

            <NavLink to="aboutus">
              <button className="button-explore-menu">Know More</button>{" "}
            </NavLink>
          </div>
        </div>

        <div className="about-img">
          <img src={image} className="about-image" alt="" />
        </div>

        <div className="about-info">
          <div className="about-info-history">
            <h1> Our History</h1>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Debitis
              dicta, libero maxime porro necessitatibus saepe tempore beatae
              harum ducimus. Laborum qui maxime iure error quasi nulla tempore
              voluptas blanditiis doloribus!
            </p>
            <NavLink to="history">
              <button className="button-explore-menu">History</button>
            </NavLink>
          </div>
        </div>
      </div>
      <Outlet></Outlet>
    </div>
  );
};

export default transitions(About);
