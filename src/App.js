import React, { useRef } from 'react';
import './App.css';
import About from './components/about-me/About';
import Contact from './components/contact/Contact';
import Home from './components/home/Home';
// import ScrolldownBtn from './components/home/ScrolldownBtn';
import Projects from './components/projects/Projects';

function App() {
  const aboutRef = useRef()
  const projectsRef = useRef()
  const contactRef = useRef()


  return (
    <div>
      <Home />
      {/* <ScrolldownBtn /> */}
      <div className="btn-div">
      <button className="scroll-down-btn"
        onClick={() => { aboutRef.current.scrollIntoView({ behavior: 'smooth' }) }}>
        Welcome to my portfolio <i className="fas fa-caret-down"></i>
      </button>
      </div>
      <About ref={aboutRef} />
      <Projects ref={projectsRef} />
      <Contact ref={contactRef} />
    </div>
  );
}

export default App;
