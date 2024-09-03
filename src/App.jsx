import React, { useState, useEffect} from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./main.css";
import Home from "./components/Home";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Service from "./components/Service";
import PricingPlan from "./components/PricingPlan";
import Blog from "./components/Blog";
import ContactUs from "./components/ContactUs";
import NotFound from "./components/NotFound";
import DetailBlog from "./components/DetailBlog";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  const [showScrollTop, setShowScrollTop] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    // <div>
    //   <Home />
    //   <About/>
    //   <Portfolio/>
    //   <Service/>
    //   <PricingPlan/>
    //   <Blog/>
    //   <ContactUs/>
    //   <NotFound/>
    // </div>
    <Router>
      {/* <Navbar/> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/service" element={<Service />} />
        <Route path="/PricingPlan" element={<PricingPlan />} />
        <Route path="/blog" element={<Blog/>} />
        <Route path="/detail/:id" element={<DetailBlog/>} />
        <Route path="/contact" element={<ContactUs />} />
        <Route component={NotFound} /> {}
      </Routes>
      
      {}

      <Footer />
      {showScrollTop && (
          <button className="scroll-to-top" onClick={scrollToTop}>
              ↑  
          </button>
        )}
    </Router>
  );
}

export default App;
