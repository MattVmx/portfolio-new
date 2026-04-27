import React, { createContext, useState, useContext } from 'react';

const LanguageContext = createContext();

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

const translations = {
  en: {
    nav: {
      home: 'HOME',
      about: 'ABOUT ME',
      skills: 'SKILLS',
      projects: 'PROJECTS',
      contact: 'CONTACT'
    },
    hero: {
      title: 'Matías Speroni',
      subtitle: 'Frontend Developer',
      button: 'Learn more'
    },
    about: {
      title: 'About Me',
      role: 'Frontend Developer | QA',
      intro: 'Frontend developer focused on React, with experience working with APIs and full-stack applications.',
      skills: {
        frontend: 'Frontend Development',
        qa: 'QA Testing'
      },
      description: 'Also MySQL, QA (manual and automated), Adobe tools, and close collaboration with backend teams.',
      languages: 'Languages:',
      languagesValue: 'English (Competent C2) / Spanish (Native)',
      qa: 'QA:',
      qaValue: 'Manual and Automated Testing'
    },
    skills: {
      title: 'Skills'
    },
    projects: {
      title: 'Projects',
      demo: 'View Demo',
      code: 'Code'
    },
    contact: {
      title: 'Contact',
      subtitle: 'Find me on:'
    },
    footer: {
      text: 'Made by Matías Speroni, 2026'
    }
  },
  es: {
    nav: {
      home: 'INICIO',
      about: 'SOBRE MÍ',
      skills: 'HABILIDADES',
      projects: 'PROYECTOS',
      contact: 'CONTACTO'
    },
    hero: {
      title: 'Matías Speroni',
      subtitle: 'Desarrollador Frontend',
      button: 'Conoce más'
    },
    about: {
      title: 'Sobre Mí',
      role: 'Desarrollador Frontend | QA',
      intro: 'Desarrollador frontend enfocado en React, con experiencia en APIs y aplicaciones full-stack.',
      skills: {
        frontend: 'Desarrollo Frontend',
        qa: 'QA Testing'
      },
      description: 'Además: MySQL, QA (manual y automatizado), herramientas Adobe y trabajo conjunto con equipos backend.',
      languages: 'Idiomas:',
      languagesValue: 'Inglés (Competente C2) / Español (Nativo)',
      qa: 'QA:',
      qaValue: 'Testing Manual y Automatizado'
    },
    skills: {
      title: 'Habilidades'
    },
    projects: {
      title: 'Proyectos',
      demo: 'Ver Demo',
      code: 'Código'
    },
    contact: {
      title: 'Contacto',
      subtitle: 'Encuéntrame en:'
    },
    footer: {
      text: 'Hecho por Matías Speroni, 2026'
    }
  }
};

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState('en');

  const toggleLanguage = () => {
    setLanguage(prev => prev === 'en' ? 'es' : 'en');
  };

  const t = (key) => {
    const keys = key.split('.');
    let value = translations[language];
    for (const k of keys) {
      value = value?.[k];
    }
    return value || key;
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

