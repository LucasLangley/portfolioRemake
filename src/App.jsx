import React from 'react';
import Header from './components/headerPadrao';
import Home from './components/homeSection';
import About from './components/aboutSection';
import Experience from './components/experienceSection';
import Education from './components/educationSection';
import Skills from './components/skillsSection';
import Contact from './components/contactSection';
import Footer from './components/footerPadrao';

const App = () => {
  return (
    <div className="App">
      <Header />
      <Home />
      <About />
      <Experience />
      <Education />
      <Skills />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
