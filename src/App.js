import './App.css';
import About from './components/about-me/About';
import Contact from './components/contact/Contact';
import Home from './components/home/Home';
import Projects from './components/projects/Projects';

function App() {
  return (
    <div>
      <Home />
      <About />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
