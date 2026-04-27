import React, { useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const PROFILE_FALLBACK = 'https://github.com/MattVmx.png';

const About = () => {
  const { t, language } = useLanguage();
  const [profileSrc, setProfileSrc] = useState(
    () => `${process.env.PUBLIC_URL || ''}/images/profile.jpg`.replace(/([^:]\/)\/+/g, '$1')
  );

  return (
    <section id="about" className="about">
      <div className="container">
        <h2 className="section-title">{t('about.title')}</h2>
        <div className="about-content">
          <div className="about-image">
            <img
              src={profileSrc}
              alt="Matías Speroni"
              onError={() => {
                if (profileSrc !== PROFILE_FALLBACK) setProfileSrc(PROFILE_FALLBACK);
              }}
            />
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
                ? <>I have strong database skills with MySQL and focus on building visually appealing user interfaces using a range of tools. I also work in <strong>QA (Quality Assurance)</strong>, including manual and automated testing, as well as graphic design and Adobe Creative Cloud applications.</>
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

