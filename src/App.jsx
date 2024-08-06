import React from 'react';
import "./main.css";
import Home from './components/Home'; 
import About from './components/About';
import Portfolio from './components/Portfolio';
import Service from './components/Service';

function App() {
  return (
    <div>
      <Home />
      <About/>
      <Portfolio/>
      <Service/>
    </div>
  );
}

export default App;

