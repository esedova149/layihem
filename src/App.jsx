import React from 'react';
import Home from './components/Home'; 
import About from './components/About'
import "./main.css";
import Portfolio from './components/Portfolio';

function App() {
  return (
    <div>
      <Home />
      <About/>
      <Portfolio/>
    </div>
  );
}

export default App;

