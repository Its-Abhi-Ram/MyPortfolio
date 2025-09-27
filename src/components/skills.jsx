import React from 'react';
import css3 from '../assets/css-3.png';
import html5 from '../assets/html-5.png';
import js from '../assets/java-script.png';
import python from '../assets/python.png';
import django from '../assets/django.png';
import mysql from '../assets/mysql.png';

const skillsData = [
  {
    category: "Backend Technologies",
    skills: [
      { icon: python, name: "Python" }
    ]
  },
  {
    category: "Web Technologies",
    skills: [
      { icon: html5, name: "HTML5" },
      { icon: css3, name: "CSS3" },
      { icon: js, name: "JavaScript" },
      { icon: "devicon-react-original colored", name: "React" }
    ]
  },
  {
    category: "Web Frameworks",
    skills: [
        { icon: django, name: "Django" },
        
    ]
  },
  {
    category: "Databases",
    skills: [
        { icon: mysql, name: "MySQL" }
    ]
  }
];

function Skills() {
  return (
    <section id="skills" className="skills-section">
      <div className="skill-container">
        <h1>Tech Stack</h1>
        <div className="skill-box">
          {skillsData.map((group, index) => (
            <div className="nth-skill" key={index}>
              <div className="skill-name">
                <h3>{group.category}</h3>
              </div>
              <div className="skills-list">
                {group.skills.map((skill, i) => (
                  <div className="skill" key={i}>
                    <i className={skill.icon}></i>
                    <p>{skill.name}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
