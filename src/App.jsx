import React from 'react';
import "./main.css";
import Home from './components/Home'; 
import About from './components/About';
import Portfolio from './components/Portfolio';
import Service from './components/Service';
import PricingPlan from './components/PricingPlan';
import Blog from './components/Blog';
import ContactUs from './components/ContactUs';

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
    </div>
  );
}

export default App;

