import React from 'react';
import "./main.css";
import Home from './components/Home'; 
import About from './components/About';
import Portfolio from './components/Portfolio';
import Service from './components/Service';
import PricingPlan from './components/PricingPlan';
import Blog from './components/Blog';

function App() {
  return (
    <div>
      <Home />
      <About/>
      <Portfolio/>
      <Service/>
      <PricingPlan/>
      <Blog/>
    </div>
  );
}

export default App;

