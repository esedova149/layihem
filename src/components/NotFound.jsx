import React from "react";
import "./home.css";
import Navbar from "./Navbar";

const NotFound = () => {
  return (
    <div className="home-page">
      {" "}
      <div id="div1">
        <div className="container">
          <Navbar />
          <div id="div1-center" className="container">
            <div>Make room for better living</div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. A amet
              vitae vel id id porttitor ut in. Integer pretium egestas nisi,
              nunc, purus sit vitae nisi, etiam.{" "}
            </p>
            <div className="btn2">
              <button>Get Started</button>
            </div>
          </div>
        </div>
      </div>
      <div id="um"></div>
    </div>
  );
};

export default NotFound;
