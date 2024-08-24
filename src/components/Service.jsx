import React from "react";
import "./service.css";
import Navbar from "./Navbar";

const Service = () => {
  const services = [
    {
      title: "Interior Design",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. A amet vitae vel id id porttitor ut in. Integer pretium egestas nisi, nunc, purus sit vitae nisi, etiam.",
    },
    {
      title: "Interior Design",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. A amet vitae vel id id porttitor ut in. Integer pretium egestas nisi, nunc, purus sit vitae nisi, etiam.",
    },
    {
      title: "Interior Design",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. A amet vitae vel id id porttitor ut in. Integer pretium egestas nisi, nunc, purus sit vitae nisi, etiam.",
    },
  ];
  const steps = [
    {
      step: 1,
      title: "STEP 1",
      subtitle: "Select one of our talented designers.",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. A amet vitae vel id id porttitor ut in. Integer pretium egestas nisi, nunc, purus sit vitae nisi, etiam.",
      image: " ",
    },
    {
      step: 2,
      title: "STEP 2",
      subtitle: "Tell us all about your dream home.",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. A amet vitae vel id id porttitor ut in. Integer pretium egestas nisi, nunc, purus sit vitae nisi, etiam.",
      image: " ",
    },
    {
      step: 3,
      title: "STEP 3",
      subtitle: "Your designer will blow your mind.",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. A amet vitae vel id id porttitor ut in. Integer pretium egestas nisi, nunc, purus sit vitae nisi, etiam.",
      image: " ",
    },
    {
      step: 4,
      title: "STEP 4",
      subtitle: "Tell us which design ideas you vibe.",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. A amet vitae vel id id porttitor ut in. Integer pretium egestas nisi, nunc, purus sit vitae nisi, etiam.",
      image: " ",
    },
    {
      step: 5,
      title: "STEP 5",
      subtitle: "Shop items from your design in one place.",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. A amet vitae vel id id porttitor ut in. Integer pretium egestas nisi, nunc, purus sit vitae nisi, etiam.",
      image: " ",
    },
  ];

  return (
    <div className="home-page">
    {" "}
    <div id="div1">
      <div className="container">
        <Navbar />
        <div id="div1-center" className="container">
          <div>Service</div>
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
      <div id="um-s">
        <div id="div2-s">
          <div id="div2-center" className="container">
            <div className="div2-center1">Our Service</div>
            <div className="div2-center2">
              {services.map((service, index) => (
                <div className="design" key={index}>
                  <div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="32"
                      height="32"
                      viewBox="0 0 32 32"
                      fill="none"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M18.2897 20.3884C19.895 20.3884 21.2017 21.6857 21.2017 23.2804V27.3817C21.2017 27.7244 21.4763 27.999 21.8283 28.007H24.3697C26.3723 28.007 28.0003 26.399 28.0003 24.423V12.791C27.991 12.111 27.667 11.471 27.111 11.0457L18.3203 4.03504C17.1403 3.10037 15.4897 3.10037 14.3057 4.03771L5.57499 11.043C4.99766 11.4817 4.67366 12.1217 4.66699 12.8137V24.423C4.66699 26.399 6.29499 28.007 8.29766 28.007H10.863C11.2243 28.007 11.5177 27.7204 11.5177 27.3684C11.5177 27.291 11.527 27.2137 11.543 27.1404V23.2804C11.543 21.695 12.8417 20.399 14.435 20.3884H18.2897ZM24.3697 30.007H21.8043C20.335 29.9724 19.2017 28.819 19.2017 27.3817V23.2804C19.2017 22.7884 18.7923 22.3884 18.2897 22.3884H14.4417C13.9497 22.391 13.543 22.7924 13.543 23.2804V27.3684C13.543 27.4684 13.5297 27.5644 13.5017 27.655C13.3577 28.975 12.2297 30.007 10.863 30.007H8.29766C5.19233 30.007 2.66699 27.5017 2.66699 24.423V12.8044C2.68033 11.479 3.29099 10.2657 4.34566 9.46704L13.059 2.47371C14.9777 0.953708 17.651 0.953708 19.5657 2.47104L28.3417 9.47104C29.3723 10.2564 29.983 11.467 30.0003 12.7764V24.423C30.0003 27.5017 27.475 30.007 24.3697 30.007Z"
                        fill="white"
                      />
                    </svg>
                  </div>
                  <div>{service.title}</div>
                  <p>{service.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div id="div3-s">
          <p>How it Works</p>
          <div>
            <div></div>
            <div className="steps-numbers">
              {steps.map((step) => (
                <div key={step.step}>{step.step}</div>
              ))}
            </div>
            {steps.map(
              (step) => (
                (
                  <div key={step.step} className="step-content div-text">
                    <p>{step.title}</p>
                    <p>{step.subtitle}</p>
                    <p>{step.description}</p>
                  </div>
                ),
                (<div>{step.image}</div>)
              )
            )}
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;
