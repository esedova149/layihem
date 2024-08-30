import React, { useState, useEffect } from "react";
import "./pricingPlan.css";
import Navbar from "./Navbar";

const PricingPlan = () => {
  const menuItems = ["Home", "About Us", "Portfolio", "Service", "Pages"];

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  const plansData = [
    {
      title: "BASIC",
      price: "$32",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. A amet vel id porttitor ut in.",
      features: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      ],
      buttonText: "Pick Package",
    },
    {
      title: "MEDIUM",
      price: "$60",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. A amet vel id porttitor ut in.",
      features: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      ],
      buttonText: "Pick Package",
    },
    {
      title: "PREMIUM",
      price: "$100",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. A amet vel id porttitor ut in.",
      features: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      ],
      buttonText: "Pick Package",
    },
  ];

  const PricingCard = ({ title, price, description, features, buttonText }) => {
    return (
      <div className="pricing-card">
        <h3>{title}</h3>
        <p className="price">{price}</p>
        <p className="description">{description}</p>
        <ul className="features">
          {features.map((feature, index) => (
            <li key={index}>{feature}</li>
          ))}
        </ul>
        <button className="pick-button">{buttonText}</button>
      </div>
    );
  };

  const [plans, setPlans] = useState([]);

  useEffect(() => {
    setPlans(plansData);
  }, []);

  return (
    <div className="home-page">
      {" "}
      <div id="div1">
        <div className="container">
          <Navbar />
          <div id="div1-center" className="container">
            <div>Pricing Plan</div>
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
      <div id="um-pp">
        <div id="div2-pp" className="pricing-cards-container">
          {plans.map((plan, index) => (
            <PricingCard key={index} {...plan} />
          ))}
        </div>
        <div id="div3-pp">
          <div className="div5-top">
            Need a consultation
            <br />
            for your home?
          </div>
          <form className="div5-center" onSubmit={handleSubmit}>
            <div className="div5-center1">
              <div>
                <label>Your Name</label>
                <input
                  type="text"
                  name="name"
                  placeholder="Your Full Name"
                  value={formData.name}
                  onChange={handleChange}
                />
              </div>
              <div>
                <label>Your Email</label>
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email Address"
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="div5-center2">
              <label>Your Message</label>
              <input
                type="text"
                name="message"
                placeholder="Write Here"
                value={formData.message}
                onChange={handleChange}
              />
            </div>
            <div className="btn5">
              <button type="submit">Send</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default PricingPlan;
