import React, { useState, useEffect } from "react";
import "./home.css";
import { useNavigate } from "react-router-dom";
// import data from './data/home.json';
// import Navbar from './Navbar';
import { NavLink } from "react-router-dom";
import Navbar from "./Navbar";
const Home = () => {
  const menuItems = ["Home", "About Us", "Portfolio", "Service", "Pages"];
  const navigate = useNavigate();

  const handleContactUsClick = () => {
    navigate("/contact");
  };

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
  const recentProjects = Array(5).fill("");
  const updates = [
    {
      date: "12 May 2022",
      title: "Lorem ipsum dolor sit amet",
      description:
        "Pellentesque suspendisse aenean aliquet arcu facilisi molestie. Magna velit, malesuada ullamcorper amet",
    },
    {
      date: "12 May 2022",
      title: "Lorem ipsum dolor sit amet",
      description:
        "Pellentesque suspendisse aenean aliquet arcu facilisi molestie. Magna velit, malesuada ullamcorper amet",
    },
    {
      date: "12 May 2022",
      title: "Lorem ipsum dolor sit amet",
      description:
        "Pellentesque suspendisse aenean aliquet arcu facilisi molestie. Magna velit, malesuada ullamcorper amet",
    },
  ];
  const reviews = [
    {
      id: "img1",
      name: "Esther Howard",
      role: "Content Creator",
    },
    {
      id: "img2",
      name: "Guy Hawkins",
      role: "Teacher",
    },
    {
      id: "img3",
      name: "Robert Fox",
      role: "Influencer",
    },
    {
      id: "img4",
      name: "Lorem Pak",
      role: "Influencer",
    },
  ];
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

  const [messageSent, setMessageSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("https://your-backend-api.com/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", data);
        setFormData({ name: "", email: "", message: "" });
        setMessageSent(true);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  {
    messageSent && <div className="alert">Message sent successfully!</div>;
  }

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
          } else {
            entry.target.classList.remove("show");
          }
        });
      },
      { threshold: 0.1 }
    );

    const hiddenElements = document.querySelectorAll(".hidden");
    hiddenElements.forEach((el) => observer.observe(el));

    return () => {
      hiddenElements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  const [activeSection, setActiveSection] = useState("Home");

  const handleMenuClick = (section) => {
    setActiveSection(section);
  };
  const [currentReview, setCurrentReview] = useState(0);
  // const [darkMode, setDarkMode] = useState(false);

  // const toggleDarkMode = () => {
  //   setDarkMode(!darkMode);
  // };



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
      <div id="div1" className="hidden">
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
      <div id="um">
        <div id="div2" >
          <div id="div2-top" className="container">
            <div></div>
            <div>
              <div>About InterQ</div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. A amet
                vitae vel id id porttitor ut in. Integer pretium egestas nisi,
                nunc, purus sit vitae nisi, etiam. Fermentum, fringilla nisl
                elementum, mattis amet, elementum, cras elementum morbi. Aliquet
                ut mus arcu, ornare nunc nisi, dignissim in. Diam mus fermentum
                volutpat arcu pulvinar scelerisque auctor sed. Feugiat turpis
                vitae porttitor in odio lacus praesent mauris. At massa lobortis
                mi id molestie nibh sociis. Sem quis sed quisque fames urna elit
                molestie nisl. Auctor sit tellus sed nunc cursus nibh tempus.
              </p>
            </div>
          </div>
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
          <div id="div2-bottom">
            <div className="div2-bottom1">
              <div>Recent Project</div>
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
        </div>
        <div id="div3" className="hidden">
          <div className="div3-top">
            <div>Get More Updates</div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. A amet
              vitae vel id id porttitor ut in. Integer pretium egestas nisi,
              nunc, purus sit vitae nisi, etiam.{" "}
            </p>
          </div>
          <div className="div3-bottom">
            {updates.map((update, index) => (
              <div className="div3-center" key={index}>
                <div className="div3-center1"></div>
                <div className="div3-center2">
                  <p>{update.date}</p>
                  <p>{update.title}</p>
                  <p>{update.description}</p>
                </div>
                <div className="btn3">
                  <button>Read More</button>
                </div>
              </div>
            ))}
          </div>
          <div className="btn4">
            <button>View All</button>
          </div>
        </div>
        <div id="div4" className="hidden">
          <div className="div4-top">
            <div className="div4-top1">
              <div>Our Customers Review</div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. A amet
                vitae vel id id porttitor ut in. Integer pretium egestas nisi,
                nunc, purus sit vitae nisi, etiam.{" "}
              </p>
            </div>
            <div className="div4-top2">
              <div className="div4-top21">
                {reviews.map((review, index) => (
                  <div className="div4-top211" key={index}>
                    <div id={review.id}></div>
                    <div>
                      <p>{review.name}</p>
                      <p>{review.role}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="div4-top22">
                <p>It was a Great Experience!</p>
                <div>
                  <div></div>
                  <div></div>
                  <div></div>
                  <div></div>
                  <div></div>
                </div>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. A
                  amet vitae vel id id porttitor ut in. Integer pretium egestas
                  nisi, nunc, purus sit vitae nisi, etiam. Fermentum, fringilla
                  nisl elementum, mattis amet, elementum, cras elementum morbi.
                  Aliquet ut mus arcu, ornare nunc nisi, dignissim in. Diam mus
                  fermentum volutpat arcu pulvinar scelerisque auctor sed.
                  Feugiat turpis vitae porttitor in odio lacus praesent mauris.
                  At massa lobortis mi id molestie nibh sociis. Sem quis sed
                  quisque fames urna elit molestie nisl. Auctor sit tellus sed
                  nunc cursus nibh tempus.
                </p>
              </div>
              <div className="div4-top23"></div>
            </div>
          </div>
        </div>
        <div id="div5" className="hidden">
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

        
      </div>
    </div>
  );
};

export default Home;
