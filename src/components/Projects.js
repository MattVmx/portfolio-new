import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const Projects = () => {
  const { t, language } = useLanguage();
  
  const projects = [
    {
      type: 'App',
      title: 'Vitalidapp Health Service',
      description: {
        en: 'Full-stack health services app with appointment scheduling, user management and API integration.',
        es: 'Aplicación full-stack de servicios de salud con gestión de citas, administración de usuarios e integración con APIs.'
      },
      image: '/images/vitalidapp.jpg',
      demo: null,
      code: 'https://github.com/MattVmx/vitalidapp'
    },
    {
      type: 'Website',
      title: 'Punta Glacial Ice Cream Shop',
      description: {
        en: 'Modern website for an ice cream shop with an engaging design and interactive features.',
        es: 'Sitio web moderno para una heladería con diseño atractivo y funcionalidades interactivas.'
      },
      image: '/images/heladeria.jpg',
      demo: 'https://mattvmx.github.io/puntaglacial-web/',
      code: null
    },
    {
      type: 'Website',
      title: 'Macrotec Real Estate',
      description: {
        en: 'Real estate platform with a property catalog and advanced search.',
        es: 'Plataforma inmobiliaria con catálogo de propiedades y sistema de búsqueda avanzado.'
      },
      image: '/images/macrotec.jpg',
      demo: 'https://mattvmx.github.io/macrotec-web/',
      code: null
    },
    {
      type: 'Website',
      title: 'Supremo Restaurant',
      description: {
        en: 'Elegant restaurant website with an interactive menu and reservations.',
        es: 'Sitio web elegante para restaurante con menú interactivo y sistema de reservas.'
      },
      image: '/images/supremo.jpg',
      demo: 'https://mattvmx.github.io/supremo-web/',
      code: null
    },
    {
      type: 'Website',
      title: 'Sucar Car Dealership',
      description: {
        en: 'Car dealership site with a vehicle catalog and contact options.',
        es: 'Concesionario de autos con catálogo de vehículos y sistema de contacto.'
      },
      image: '/images/sucar.jpg',
      demo: 'https://mattvmx.github.io/sucar-web/',
      code: null
    },
    {
      type: 'Design',
      title: 'App Design',
      description: {
        en: 'Mobile app visual design with a modern, polished UI/UX.',
        es: 'Diseño visual de aplicación móvil con UI/UX moderno y atractivo.'
      },
      image: '/images/app.jpg',
      demo: 'https://mattvmx.github.io/app-visual-design/',
      code: null
    }
  ];

  return (
    <section id="projects" className="projects">
      <div className="container">
        <h2 className="section-title">{t('projects.title')}</h2>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <div className="project-image">
                <img src={project.image} alt={project.title} />
              </div>
              <div className="project-content">
                <span className="project-type">{project.type}</span>
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description[language]}</p>
                <div className="project-links">
                  {project.demo && (
                    <a href={project.demo} className="project-link" target="_blank" rel="noopener noreferrer">
                      <i className="fas fa-external-link-alt"></i> {t('projects.demo')}
                    </a>
                  )}
                  {project.code && (
                    <a href={project.code} className="project-link" target="_blank" rel="noopener noreferrer">
                      <i className="fab fa-github"></i> {t('projects.code')}
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;

