import React, { useState } from 'react'
import logo from './logo.svg';
import './App.css';
import './index.css';
import Home from './pages/Home';
import Projects from './pages/Projects';
import About from './pages/About';
import Contact from './pages/Contact';
import Navbar from './components/Navbar.jsx';
import Waves from './components/CanvasComponents/Waves'

function App() {
  let component;

  switch (window.location.pathname) {
    case '/':
    case '/Home':
      component = <Home />;
      break;
    case '/Projects':
      component = <Projects />;
      break;
    case '/About':
      component = <About />;
      break;
    case '/Contact':
      component = <Contact />;
      break;
    default:
      break;
  };

  return (
    <div className="overflow-hidden">
      <Navbar activeName={window.location.pathname}/>
      <div className='w-full md:w-4/5 lg:w-5/12 h-screen m-auto text-center py-56 text-amber-50 items-center z-10'> 
        {component}
      </div>
      <Waves className='w-screen h-screen' xDots={200} yDots={25}/>
    </div>
  );
}

export default App;
