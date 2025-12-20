import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="footer">
      <div className="container">
        <p>{t('footer.text')}</p>
      </div>
    </footer>
  );
};

export default Footer;

