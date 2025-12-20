import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const Skills = () => {
  const { t } = useLanguage();
  const skills = [
    { icon: 'fab fa-java', name: 'Java' },
    { icon: 'fab fa-js', name: 'JavaScript' },
    { icon: 'fab fa-react', name: 'React' },
    { icon: 'fab fa-html5', name: 'HTML5' },
    { icon: 'fab fa-css3-alt', name: 'CSS3' },
    { icon: 'fas fa-database', name: 'MySQL' },
    { icon: 'fab fa-git-alt', name: 'Git' },
    { icon: 'fab fa-bootstrap', name: 'Bootstrap' },
    { icon: 'fab fa-node-js', name: 'Node.js' },
    { icon: 'fas fa-bug', name: 'QA Testing' }
  ];

  return (
    <section id="skills" className="skills">
      <div className="container">
        <h2 className="section-title">{t('skills.title')}</h2>
        <div className={`skills-grid ${skills.length % 2 !== 0 ? 'odd-items' : ''}`} style={skills.length % 2 !== 0 ? { justifyContent: 'center' } : {}}>
          {skills.map((skill, index) => (
            <div key={index} className="skill-item">
              <i className={skill.icon}></i>
              <span>{skill.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;

