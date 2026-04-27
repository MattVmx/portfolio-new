import React, { useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const PROFILE_FALLBACK = 'https://github.com/MattVmx.png';

const About = () => {
  const { t } = useLanguage();
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
            <p>{t('about.description')}</p>
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

