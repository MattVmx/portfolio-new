import React from 'react';
import './App.css';
import { LanguageProvider } from './contexts/LanguageContext';
import { ThemeProvider } from './contexts/ThemeContext';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <LanguageProvider>
      <ThemeProvider>
        <div className="App">
          <Navbar />
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Contact />
          <Footer />
        </div>
      </ThemeProvider>
    </LanguageProvider>
  );
}

export default App;

