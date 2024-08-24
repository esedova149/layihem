import React from 'react';
import "./main.css";
import Home from './components/Home'; 
import About from './components/About';
import Portfolio from './components/Portfolio';
import Service from './components/Service';
import PricingPlan from './components/PricingPlan';
import Blog from './components/Blog';
import ContactUs from './components/ContactUs';
import NotFound from './components/NotFound';


function App() {
  return (
    <div>
      <Home />
      <About/>
      <Portfolio/>
      <Service/>
      <PricingPlan/>
      <Blog/>
      <ContactUs/>
      <NotFound/>
    </div>
  );
}

export default App;

