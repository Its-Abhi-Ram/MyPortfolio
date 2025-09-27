import { useState } from 'react'
import './index.css'
import 'bootstrap-icons/font/bootstrap-icons.css';

import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Skills from './components/skills';
import Internship from './components/Internship';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';





function App() {
  const [count, setCount] = useState(0);

  

  return (
    <>
      <Header />
      <Home />
      <About />
      <Skills />
      <Internship />
      <Projects />
      <Contact />
      <Footer />
    </>
  )
}

export default App
