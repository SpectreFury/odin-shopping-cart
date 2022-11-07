import React from "react";
import NavBar from "../NavBar/NavBar";

import "./Homepage.css";

const Homepage = () => {
  return (
    <section className="slides">
      <NavBar darkMode={false} />
      <div className="details-container">
        <h1 className="details-heading">Ducky One 3 TKL -FUJI</h1>
        <p className="details-subtext">A Tint of Japan</p>
        <button className="details-btn">Order Now</button>
      </div>
    </section>
  );
};

export default Homepage;
