import React from "react";
import "./portfolio.css";
import Navbar from "./Navbar";
const Portfolio = () => {
  const recentProjects = Array(5).fill("");
  return (
    <div className="home-page">
      {" "}
      <div id="div1">
        <div className="container">
          <Navbar />
          <div id="div1-center" className="container">
            <div>Portfolio</div>
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
      <div id="um-p">
        <div id="div2-p">
          <div id="div2-bottom">
            <div className="div2-bottom1">
              <div>Home Living</div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. A amet
                vitae vel id id porttitor ut in. Integer pretium egestas nisi,
                nunc, purus sit vitae nisi, etiam.{" "}
              </p>
            </div>
            <div className="div2-bottom2">
              {recentProjects.map((_, index) => (
                <div key={index}></div>
              ))}
            </div>
          </div>
          <div id="div2-bottom2">
            <div>Furniture</div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. A amet
              vitae vel id id porttitor ut in. Integer pretium egestas nisi,
              nunc, purus sit vitae nisi, etiam.{" "}
            </p>
            <div className="bottom2p">
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Portfolio;
