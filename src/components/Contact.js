import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const Contact = () => {
  const { t } = useLanguage();

  return (
    <section id="contact" className="contact">
      <div className="container">
        <h2 className="section-title">{t('contact.title')}</h2>
        <p className="contact-subtitle">{t('contact.subtitle')}</p>
        <div className="contact-links">
          <a 
            href="https://www.linkedin.com/in/speroni-matias/" 
            className="contact-link" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            <i className="fab fa-linkedin"></i>
            <span>LinkedIn</span>
          </a>
          <a 
            href="https://github.com/MattVmx" 
            className="contact-link" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            <i className="fab fa-github"></i>
            <span>GitHub</span>
          </a>
          <a 
            href="mailto:smatias94.rz@gmail.com" 
            className="contact-link" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            <i className="fas fa-envelope"></i>
            <span>Email</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;

