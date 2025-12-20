import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const About = () => {
  const { t, language } = useLanguage();

  return (
    <section id="about" className="about">
      <div className="container">
        <h2 className="section-title">{t('about.title')}</h2>
        <div className="about-content">
          <div className="about-image">
            <img src="/images/profile.jpg" alt="Profile photo" onError={(e) => { e.target.src = "/images/profile.png"; }} />
          </div>
          <div className="about-text">
            <div className="about-intro">
              <h3>{t('about.role')}</h3>
              <p>
                {t('about.intro')}
              </p>
            </div>
            <div className="about-skills-list">
              <div className="skill-badge">{t('about.skills.backend')}</div>
              <div className="skill-badge">{t('about.skills.frontend')}</div>
              <div className="skill-badge">{t('about.skills.qa')}</div>
              <div className="skill-badge">{t('about.skills.design')}</div>
            </div>
            <p>
              {language === 'en' 
                ? <>I have a strong command of database management using MySQL and I make sure to create visually appealing user interfaces with different tools at my disposal. I also have knowledge in <strong>QA (Quality Assurance)</strong>, including manual and automated testing, as well as Graphic Design and Adobe Software Pack tools.</>
                : <>Tengo un fuerte dominio en la gestión de bases de datos usando MySQL y me aseguro de crear interfaces de usuario visualmente atractivas con diferentes herramientas a mi disposición. También tengo conocimientos en <strong>QA (Quality Assurance)</strong>, incluyendo testing manual y automatizado, así como en Diseño Gráfico y herramientas de Adobe Software Pack.</>
              }
            </p>
            <div className="about-info">
              <div className="info-item">
                <i className="fas fa-language"></i>
                <div>
                  <strong>{t('about.languages')}</strong>
                  <span>{t('about.languagesValue')}</span>
                </div>
              </div>
              <div className="info-item">
                <i className="fas fa-check-circle"></i>
                <div>
                  <strong>{t('about.qa')}</strong>
                  <span>{t('about.qaValue')}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

