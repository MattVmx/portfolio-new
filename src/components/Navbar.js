import React, { useState, useEffect } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { useTheme } from '../contexts/ThemeContext';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const { t, language, toggleLanguage } = useLanguage();
  const { isDark, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
      
      // Detectar sección activa
      const sections = document.querySelectorAll('section[id]');
      const scrollY = window.pageYOffset;

      sections.forEach(section => {
        const sectionHeight = section.offsetHeight;
        const sectionTop = section.offsetTop - 100;
        const sectionId = section.getAttribute('id');

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
          setActiveSection(sectionId);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e, targetId) => {
    e.preventDefault();
    const target = document.querySelector(targetId);
    if (target) {
      const offsetTop = target.offsetTop - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
    setIsMenuOpen(false);
  };

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="nav-container">
        <div className="nav-logo">
          <a href="#home" onClick={(e) => handleNavClick(e, '#home')}></a>
        </div>
        <ul className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
          <li className="nav-item">
            <a 
              href="#home" 
              className={`nav-link ${activeSection === 'home' ? 'active' : ''}`}
              onClick={(e) => handleNavClick(e, '#home')}
            >
              {t('nav.home')}
            </a>
          </li>
          <li className="nav-item">
            <a 
              href="#about" 
              className={`nav-link ${activeSection === 'about' ? 'active' : ''}`}
              onClick={(e) => handleNavClick(e, '#about')}
            >
              {t('nav.about')}
            </a>
          </li>
          <li className="nav-item">
            <a 
              href="#skills" 
              className={`nav-link ${activeSection === 'skills' ? 'active' : ''}`}
              onClick={(e) => handleNavClick(e, '#skills')}
            >
              {t('nav.skills')}
            </a>
          </li>
          <li className="nav-item">
            <a 
              href="#projects" 
              className={`nav-link ${activeSection === 'projects' ? 'active' : ''}`}
              onClick={(e) => handleNavClick(e, '#projects')}
            >
              {t('nav.projects')}
            </a>
          </li>
          <li className="nav-item">
            <a 
              href="#contact" 
              className={`nav-link ${activeSection === 'contact' ? 'active' : ''}`}
              onClick={(e) => handleNavClick(e, '#contact')}
            >
              {t('nav.contact')}
            </a>
          </li>
        </ul>
        <div className="nav-controls">
          <button 
            className="theme-toggle" 
            onClick={toggleTheme}
            aria-label="Toggle theme"
            title={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
          >
            <i className={isDark ? 'fas fa-sun' : 'fas fa-moon'}></i>
          </button>
          <button 
            className="language-toggle" 
            onClick={toggleLanguage}
            aria-label="Toggle language"
            title={language === 'en' ? 'Cambiar a español' : 'Switch to English'}
          >
            {language === 'en' ? 'ES' : 'EN'}
          </button>
        </div>
        <div 
          className={`nav-toggle ${isMenuOpen ? 'active' : ''}`}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

