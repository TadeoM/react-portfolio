import React, { useState } from 'react'
import logo from './logo.svg';
import './App.css';
import './index.css';
import Home from './pages/Home';
import Projects from './pages/Projects';
import About from './pages/About';
import Navbar from './components/Navbar.jsx';

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
    default:
      break;
  };

  return (
    <div className="bg-black">
      <Navbar activeName={window.location.pathname}/>
      <div className='w-full md:w-4/5 lg:w-1/2 h-screen m-auto text-center py-32 text-white items-center'> 
        {component}
      </div>
    </div>
  );
}

export default App;
