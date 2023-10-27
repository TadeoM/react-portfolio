import React from 'react'
import './App.css';
import './index.css';
import Home from './routes/home';
import Projects from './routes/projects';
import About from './routes/about';
import Contact from './routes/contact';
import Navbar from './components/Navbar.jsx';
import Waves from './components/CanvasComponents/Waves'

function App() {
  let component;

  switch (window.location.pathname) {
    case '/':
    case '/home':
      component = <Home />;
      break;
    case '/projects':
      component = <Projects />;
      break;
    case '/about':
      component = <About />;
      break;
    case '/contact':
      component = <Contact />;
      break;
    default:
      break;
  };

  return (
    <div className="overflow-hidden">
      <Navbar activeName={window.location.pathname}/>
      <div className='w-full md:w-4/5 lg:w-5/12 h-screen m-auto py-56 text-amber-50 items-center z-10'> 
        {component}
      </div>
      <Waves className='w-screen h-screen' xDots={200} yDots={25}/>
    </div>
  );
}

export default App;
