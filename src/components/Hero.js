import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const Hero = () => {
  const { t } = useLanguage();

  const handleClick = (e) => {
    e.preventDefault();
    const target = document.querySelector('#about');
    if (target) {
      const offsetTop = target.offsetTop - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="home" className="hero">
      <div className="hero-content">
        <h1 className="hero-title">{t('hero.title')}</h1>
        <p className="hero-subtitle">{t('hero.subtitle')}</p>
        <a href="#about" className="btn-primary" onClick={handleClick}>
          <span>{t('hero.button')}</span>
        </a>
      </div>
    </section>
  );
};

export default Hero;

