import React, { useState } from "react";
import "./contactUs.css";
import Navbar from "./Navbar";

const ContactUs = () => {
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
  const resetForm = () => {
    setFormData({
      name: '',
      email: '',
      message: ''
    });
  };

  return (
    <div className="home-page">
    {" "}
    <div id="div1">
      <div className="container">
        <Navbar />
        <div id="div1-center" className="container">
          <div>Contact Us</div>
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
      <div id="um-c">
      <div id="div2-c">
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
          <button type="button" onClick={resetForm}>Send</button> {/* Bu button sıfırlamaq üçündür */}
        </div>
      </form>
    </div>
        <div id="div3-c">
          <div></div>
          <div>
            <div className="contact">
              <div></div>
              <p>your.email.inbox@here.com</p>
            </div>
            <div className="contact" id="contact-2">
              <div></div>
              <p>4517 Washington Ave. Manchester, Kentucky 39495</p>
            </div>
            <div className="contact" id="contact-3">
              <div></div>
              <p>+62 424 954 824</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
