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
      title: 'Welcome to my Portfolio',
      subtitle: 'Web Developer',
      button: 'Learn more'
    },
    about: {
      title: 'About Me',
      role: 'Software Developer & QA',
      intro: 'Hello! I am a very dedicated software developer with experience in Spring, Java, JavaScript, MySQL, React, CSS and Git. I have a comprehensive understanding of different frameworks and I love web development and design.',
      skills: {
        backend: 'Backend Development',
        frontend: 'Frontend Development',
        qa: 'QA Testing',
        design: 'Graphic Design'
      },
      description: 'I have a strong command of database management using MySQL and I make sure to create visually appealing user interfaces with different tools at my disposal. I also have knowledge in QA (Quality Assurance), including manual and automated testing, as well as Graphic Design and Adobe Software Pack tools.',
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
      text: 'Made by Matías Speroni, 2025'
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
      title: 'Bienvenido a mi Portfolio',
      subtitle: 'Desarrollador Web',
      button: 'Conoce más'
    },
    about: {
      title: 'Sobre Mí',
      role: 'Desarrollador de Software & QA',
      intro: 'Hola! Soy un desarrollador de software muy dedicado con experiencia en Spring, Java, JavaScript, MySQL, React, CSS y Git. Tengo una comprensión integral de diferentes frameworks y me encanta el desarrollo web y el diseño.',
      skills: {
        backend: 'Desarrollo Backend',
        frontend: 'Desarrollo Frontend',
        qa: 'QA Testing',
        design: 'Diseño Gráfico'
      },
      description: 'Tengo un fuerte dominio en la gestión de bases de datos usando MySQL y me aseguro de crear interfaces de usuario visualmente atractivas con diferentes herramientas a mi disposición. También tengo conocimientos en QA (Quality Assurance), incluyendo testing manual y automatizado, así como en Diseño Gráfico y herramientas de Adobe Software Pack.',
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
      text: 'Hecho por Matías Speroni, 2025'
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

