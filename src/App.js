import React, { useRef } from 'react';
import './App.css';
import About from './components/about-me/About';
import Contact from './components/contact/Contact';
import Home from './components/home/Home';
import ScrolldownBtn from './components/home/ScrolldownBtn';
import Projects from './components/projects/Projects';

function App() {
 const aboutRef = useRef() 
 const projectsRef = useRef() 
 const contactRef = useRef() 

 
  return (
    <div>
      <Home />
      <ScrolldownBtn />
      <button onClick={() => { aboutRef.current.scrollIntoView({ behavior: 'smooth' })}}>button</button>
      <About ref={aboutRef}/>
      <Projects ref={projectsRef}/>
      <Contact ref={contactRef}/>
    </div>
  );
}

export default App;
