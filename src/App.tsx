import React from 'react';
import './App.css';
import './icofont.min.css';
import NavBar from './components/NavBar';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Footer from './components/Footer';
import Contact from './components/Contact';
function App() {
  return ( 
    <div className="container_all">

          <NavBar/>
          <Home />
          <About />
          <Skills />
          <Projects/>
          <Contact/>
          <Footer />
    </div>

  
  );
}

export default App;
