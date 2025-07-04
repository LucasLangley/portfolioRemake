import React from 'react';
import Header from './components/headerPadrao';
import Home from './telas/homeSection';
import About from './telas/aboutSection';
import Experience from './telas/experienceSection';
import Education from './telas/educationSection';
import Skills from './telas/skillsSection';
import Contact from './telas/contactSection';
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
